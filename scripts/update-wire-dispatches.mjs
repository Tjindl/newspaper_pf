#!/usr/bin/env node
/**
 * Refreshes data/wire-dispatches.json from GitHub's public PR search API.
 *
 * Run manually: node scripts/update-wire-dispatches.mjs
 * Run automatically: .github/workflows/update-wire-dispatches.yml (daily cron)
 *
 * Finds every PR authored by GITHUB_USERNAME, drops PRs against repos that
 * user owns (those already show up in the Projects section, not Wire
 * Dispatches), and drops closed-and-unmerged PRs (abandoned/superseded).
 * Everything written here — titles, descriptions, statuses — comes straight
 * from the GitHub API. A terse PR title stays terse; nothing is rewritten.
 */

import { writeFile } from "fs/promises";

const GITHUB_USERNAME = "tjindl";
const OUT_PATH = new URL("../data/wire-dispatches.json", import.meta.url);

// Repos to leave out even though they're external contributions — edit
// freely if auto-discovery pulls in something you don't want featured.
const EXCLUDE_REPOS = [];

const token = process.env.GITHUB_TOKEN;
const headers = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

async function gh(url) {
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return res.json();
}

function cleanBody(body) {
  if (!body) return "";
  const noComments = body.replace(/<!--[\s\S]*?-->/g, "");
  const firstLine = noComments
    .split(/\r?\n/)
    .map((l) => l.trim())
    .find((l) => l.length > 0 && !l.startsWith("#"));
  if (!firstLine) return "";
  return firstLine.length > 220 ? firstLine.slice(0, 217) + "…" : firstLine;
}

async function fetchAllPRs() {
  let items = [];
  let page = 1;
  for (;;) {
    const q = encodeURIComponent(`type:pr author:${GITHUB_USERNAME}`);
    const data = await gh(`https://api.github.com/search/issues?q=${q}&per_page=100&page=${page}`);
    items = items.concat(data.items);
    if (data.items.length < 100) break;
    page += 1;
  }
  return items;
}

async function main() {
  const items = await fetchAllPRs();

  const byRepo = new Map();
  for (const item of items) {
    const fullName = item.repository_url.split("/repos/")[1];
    const [owner, repo] = fullName.split("/");
    if (owner.toLowerCase() === GITHUB_USERNAME.toLowerCase()) continue;
    if (EXCLUDE_REPOS.includes(fullName)) continue;

    const pr = item.pull_request || {};
    const status = pr.merged_at ? "merged" : item.state === "open" ? "open" : null;
    if (!status) continue;

    if (!byRepo.has(fullName)) byRepo.set(fullName, { owner, repo, prs: [] });
    byRepo.get(fullName).prs.push({
      title: item.title,
      url: item.html_url,
      number: item.number,
      status,
      description: cleanBody(item.body),
      updatedAt: item.updated_at,
    });
  }

  const repos = [];
  for (const [fullName, { owner, repo, prs }] of byRepo) {
    let meta = {};
    try {
      meta = await gh(`https://api.github.com/repos/${fullName}`);
    } catch (e) {
      console.error(`Warning: could not fetch metadata for ${fullName}: ${e.message}`);
    }
    prs.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    repos.push({
      org: owner,
      repo,
      repoUrl: `https://github.com/${fullName}`,
      description: meta.description || "",
      language: meta.language || null,
      stars: typeof meta.stargazers_count === "number" ? meta.stargazers_count : 0,
      logo: `https://github.com/${owner}.png`,
      prs,
    });
  }

  // Star count is a real, non-fabricated proxy for "production codebase used
  // in industry" vs. a friend's small personal project — surfaces cuDF/vLLM
  // ahead of a 0-star hackathon repo without any manual editorial judgment.
  repos.sort((a, b) => b.stars - a.stars);

  const out = {
    generatedAt: new Date().toISOString(),
    username: GITHUB_USERNAME,
    repos,
  };

  await writeFile(OUT_PATH, JSON.stringify(out, null, 2) + "\n");
  const totalPRs = repos.reduce((n, r) => n + r.prs.length, 0);
  console.log(`Wrote ${repos.length} repos, ${totalPRs} PRs to ${OUT_PATH.pathname}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
