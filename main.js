/**
 * THE VANCOUVER LEDGER — renderer.
 * Reads CONTENT (content.js) and populates the semantic skeleton in index.html.
 * No framework, no build step.
 */
(function () {
  "use strict";

  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function $(id) { return document.getElementById(id); }

  var SECTIONS = [
    { id: "front-page", label: "Front Page" },
    { id: "projects", label: "Projects" },
    { id: "business", label: "Business" },
    { id: "markets", label: "Markets" },
    { id: "classifieds", label: "Classifieds" },
  ];

  /* ---------- Masthead / dateline / edition ---------- */
  function renderMasthead() {
    var now = new Date();
    var iso = now.toISOString().slice(0, 10);
    var dateStr = now.toLocaleDateString("en-US", {
      weekday: "long", year: "numeric", month: "long", day: "numeric",
    }).toUpperCase();

    var founding = new Date(CONTENT.publication.foundingDate);
    var days = Math.floor((now - founding) / 86400000);
    var vol = Math.max(1, Math.floor(days / 365) + 1);
    var issue = Math.max(1, Math.floor(days / 7) + 1);

    $("masthead-edition").textContent = CONTENT.publication.edition;
    $("masthead-dateline").innerHTML =
      '<time datetime="' + iso + '">' + esc(dateStr) + "</time>" +
      '<span class="masthead-vol"> · Vol. ' + vol + ", No. " + issue + "</span>";
    $("masthead-price").textContent = CONTENT.publication.priceLine;
    $("masthead-eyebrow").textContent = CONTENT.publication.name;
    $("masthead-title").textContent = CONTENT.publication.personName;
    $("masthead-tagline").textContent = CONTENT.publication.tagline;
  }

  function renderNameCycle() {
    var el = $("name-cycle-text");
    var i = 0;
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function show(idx) {
      var entry = CONTENT.nameCycle[idx];
      el.textContent = entry.text;
      el.setAttribute("lang", entry.lang);
    }
    show(0);
    if (!reduced) {
      setInterval(function () {
        i = (i + 1) % CONTENT.nameCycle.length;
        el.style.opacity = 0;
        setTimeout(function () {
          show(i);
          el.style.opacity = 1;
        }, 200);
      }, 2600);
      el.style.transition = "opacity 0.2s ease";
    }
  }

  /* ---------- Nav ---------- */
  function renderNav() {
    var list = $("section-index-list");
    list.innerHTML = SECTIONS.map(function (s, idx) {
      return '<li><a href="#' + s.id + '">' +
        '<span class="visually-hidden">' + (idx + 1) + ". </span>" +
        esc(s.label) + "</a></li>";
    }).join("");

    $("resume-link").href = CONTENT.resume.href;
  }

  /* ---------- Theme toggle ---------- */
  function renderThemeToggle() {
    var btn = $("theme-toggle");
    function current() { return document.documentElement.getAttribute("data-theme") || "light"; }
    function paint() {
      var t = current();
      btn.textContent = t === "dark" ? "☼" : "☾";
      btn.setAttribute("aria-label", t === "dark" ? "Switch to day edition" : "Switch to night edition");
    }
    btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      paint();
    });
    paint();
  }

  /* ---------- Front page ---------- */
  function renderHero() {
    var h = CONTENT.hero;
    $("hero-kicker").textContent = h.kicker;
    $("hero-headline").textContent = h.headline;
    $("hero-deck").textContent = h.deck;
    $("hero-byline").textContent = h.byline;
    $("hero-dateline").textContent = h.dateline;
    $("hero-body").innerHTML = h.paragraphs.map(function (p) {
      return "<p>" + esc(p) + "</p>";
    }).join("");
    $("hero-pullquote").textContent = h.pullQuote;
    $("hero-jump").innerHTML = esc(h.jumpText)
      .replace(/Page B1/, '<a href="#projects">Page B1</a>')
      .replace(/Page C1/, '<a href="#markets">Page C1</a>');
  }

  function renderWireCondensed() {
    var os = CONTENT.openSource;
    $("wire-condensed-heading").textContent = os.headline;
    $("wire-condensed-sub").textContent =
      "Real pull requests, merged and open, against production codebases — not side projects. Full report in Projects.";
    $("wire-condensed-list").innerHTML = os.repos.slice(0, 4).map(function (repo) {
      var merged = repo.prs.filter(function (p) { return p.status === "merged"; }).length;
      var open = repo.prs.filter(function (p) { return p.status === "open"; }).length;
      var parts = [];
      if (merged) parts.push(merged + " merged");
      if (open) parts.push(open + " open");
      var badgeClass = merged ? "wire-condensed-badge--merged" : "wire-condensed-badge--open";
      return (
        "<li>" +
        '<div class="wire-condensed-top">' +
        '<a href="' + esc(repo.repoUrl) + '" target="_blank" rel="noopener noreferrer">' +
        '<span class="org">' + esc(repo.org) + "/</span>" + esc(repo.repo) +
        "</a>" +
        '<span class="wire-condensed-badge ' + badgeClass + '">' + esc(parts.join(" · ")) + "</span>" +
        "</div>" +
        "<p>" + esc(repo.description) + "</p>" +
        "</li>"
      );
    }).join("");
    $("wire-condensed-more").textContent = "Full wire report → Page B1";
  }

  function renderGlance() {
    var g = CONTENT.atAGlance;
    $("glance-heading").textContent = g.headline;
    $("glance-rows").innerHTML = g.rows.map(function (r) {
      var value = r.href
        ? '<a href="' + esc(r.href) + '" target="_blank" rel="noopener noreferrer">' + esc(r.value) + "</a>"
        : esc(r.value);
      return "<dt>" + esc(r.label) + "</dt><dd>" + value + "</dd>";
    }).join("");
  }

  function renderWeather() {
    var w = CONTENT.weather;
    $("weather-heading").textContent = w.headline;
    $("weather-location").textContent = w.location;
    $("weather-conditions").textContent = w.conditions;
    $("weather-rows").innerHTML = w.rows.map(function (r) {
      return "<dt>" + esc(r.label) + "</dt><dd>" + esc(r.value) + "</dd>";
    }).join("");
  }

  /* ---------- Projects ---------- */
  function projectArticleHTML(p, sizeClass, headingTag) {
    var techHTML = p.tech.map(function (t) {
      return '<span class="tech-chip">' + esc(t) + "</span>";
    }).join("");
    var bylineDateline = p.byline
      ? '<p class="byline-line">' + esc(p.byline) + " · " + esc(p.dateline) + "</p>"
      : "";
    return (
      '<article class="project-article ' + sizeClass + '">' +
      '<p class="kicker">' + esc(p.kicker) + "</p>" +
      "<" + headingTag + ' class="headline">' + esc(p.headline) + "</" + headingTag + ">" +
      bylineDateline +
      '<p class="lede">' + esc(p.lede) + " <em>(" + esc(p.name) + ")</em></p>" +
      '<div class="project-tech">' + techHTML + "</div>" +
      '<a class="project-link" href="' + esc(p.link) + '" target="_blank" rel="noopener noreferrer">View repository →</a>' +
      "</article>"
    );
  }

  function renderProjects() {
    var proj = CONTENT.projects;
    var leadMid =
      projectArticleHTML(proj.lead, "project-lead", "h3") +
      proj.mid.map(function (p) { return projectArticleHTML(p, "project-mid", "h3"); }).join("");
    $("projects-lead-mid").innerHTML = leadMid;

    $("projects-briefs").innerHTML = proj.briefs.map(function (p) {
      return (
        '<article class="brief">' +
        '<p class="kicker">' + esc(p.kicker) + "</p>" +
        '<h4 class="headline">' + esc(p.headline) + "</h4>" +
        '<p class="lede">' + esc(p.lede) + " <em>(" + esc(p.name) + ")</em> — " +
        '<a class="project-link" href="' + esc(p.link) + '" target="_blank" rel="noopener noreferrer">repo →</a></p>' +
        '<div class="project-tech">' + p.tech.map(function (t) {
          return '<span class="tech-chip">' + esc(t) + "</span>";
        }).join("") + "</div>" +
        "</article>"
      );
    }).join("");
  }

  function renderWire() {
    var os = CONTENT.openSource;
    $("wire-heading").textContent = os.headline;
    $("wire-subhead").textContent = os.subhead;
    $("wire-list").innerHTML = os.repos.map(function (repo, i) {
      var prsHTML = repo.prs.map(function (pr) {
        var tagsHTML = pr.tags.map(function (t) {
          return '<span class="tech-chip">' + esc(t) + "</span>";
        }).join("");
        var descHTML = pr.description ? '<p class="wire-pr-desc">' + esc(pr.description) + "</p>" : "";
        return (
          '<div class="wire-pr">' +
          '<div class="wire-pr-top">' +
          '<a class="wire-pr-title" href="' + esc(pr.url) + '" target="_blank" rel="noopener noreferrer">' + esc(pr.title) + "</a>" +
          '<span class="wire-badge wire-badge--' + pr.status + '">' + (pr.status === "merged" ? "✓ merged" : "↑ open") + "</span>" +
          "</div>" +
          descHTML +
          '<div class="project-tech">' + tagsHTML + "</div>" +
          "</div>"
        );
      }).join("");
      var repoDescHTML = repo.description ? '<p class="wire-repo-desc">' + esc(repo.description) + "</p>" : "";

      var merged = repo.prs.filter(function (p) { return p.status === "merged"; }).length;
      var open = repo.prs.filter(function (p) { return p.status === "open"; }).length;
      var countParts = [];
      if (merged) countParts.push(merged + " merged");
      if (open) countParts.push(open + " open");
      var countLabel = repo.prs.length + (repo.prs.length === 1 ? " PR" : " PRs") + " — " + countParts.join(" · ");

      return (
        '<details class="wire-repo" id="wire-repo-' + i + '">' +
        '<summary class="wire-repo-summary">' +
        '<div class="wire-repo-header">' +
        '<img class="wire-repo-logo" src="' + esc(repo.logo) + '" alt="" loading="lazy" />' +
        '<a class="wire-repo-name" href="' + esc(repo.repoUrl) + '" target="_blank" rel="noopener noreferrer">' +
        '<span class="org">' + esc(repo.org) + "/</span>" + esc(repo.repo) +
        "</a>" +
        '<span class="wire-repo-count">' + esc(countLabel) + "</span>" +
        "</div>" +
        repoDescHTML +
        "</summary>" +
        '<div class="wire-pr-list">' + prsHTML + "</div>" +
        "</details>"
      );
    }).join("");

    // Clicking the repo name should open GitHub, not just toggle the
    // disclosure it happens to sit inside.
    $("wire-list").querySelectorAll(".wire-repo-name").forEach(function (a) {
      a.addEventListener("click", function (e) { e.stopPropagation(); });
    });
  }

  /* ---------- Business ledger ---------- */
  function ledgerEntryHTML(item) {
    var bullets = item.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("");
    return (
      '<article class="ledger-entry">' +
      '<div class="ledger-head">' +
      '<span class="ledger-date">' + esc(item.date) + "</span>" +
      '<img class="ledger-logo" src="' + esc(item.logo) + '" alt="" loading="lazy" />' +
      '<h4 class="ledger-role">' + esc(item.role) + "</h4>" +
      "</div>" +
      '<div class="ledger-body">' +
      '<p class="ledger-org">' + esc(item.org) + " · " + esc(item.location) + "</p>" +
      '<ul class="ledger-bullets">' + bullets + "</ul>" +
      "</div>" +
      "</article>"
    );
  }

  function renderLedger() {
    $("experience-ledger").innerHTML = CONTENT.experience.map(ledgerEntryHTML).join("");
    $("education-ledger").innerHTML = CONTENT.education.map(ledgerEntryHTML).join("");
  }

  /* ---------- Markets ---------- */
  function renderMarkets() {
    var m = CONTENT.markets;
    document.querySelector("#markets-heading").textContent = m.headline;
    $("markets-subhead").textContent = m.subhead;
    $("markets-tbody").innerHTML = m.tickers.map(function (t) {
      return (
        "<tr>" +
        '<td class="symbol">' + esc(t.symbol) + "</td>" +
        "<td>" + esc(t.name) + "</td>" +
        "<td>" + esc(t.sector) + "</td>" +
        "</tr>"
      );
    }).join("");
  }

  /* ---------- Classifieds ---------- */
  function renderClassifieds() {
    var c = CONTENT.classifieds;
    var adsHTML = c.ads.map(function (ad) {
      var cta = ad.ctaLabel
        ? '<p><a href="' + esc(ad.ctaHref) + '" target="_blank" rel="noopener noreferrer">' + esc(ad.ctaLabel) + "</a></p>"
        : "";
      return (
        '<div class="classified-ad">' +
        '<span class="classified-tag">' + esc(ad.tag) + "</span>" +
        "<h3>" + esc(ad.title) + "</h3>" +
        "<p>" + esc(ad.body) + "</p>" +
        cta +
        "</div>"
      );
    }).join("");

    var listingsHTML = c.listings.map(function (l) {
      var external = l.href.indexOf("mailto:") === 0 ? "" : ' target="_blank" rel="noopener noreferrer"';
      return (
        '<div class="classified-ad">' +
        "<h3>" + esc(l.label) + "</h3>" +
        '<p><a href="' + esc(l.href) + '"' + external + ">" + esc(l.value) + "</a></p>" +
        "</div>"
      );
    }).join("");

    $("classifieds-grid").innerHTML = adsHTML + listingsHTML;
  }

  /* ---------- Footer ---------- */
  function renderFooter() {
    var year = new Date().getFullYear();
    $("footer-text").textContent =
      "© " + year + " " + CONTENT.publication.name +
      " · All facts on file, sourced from content-inventory.md · Published without a framework.";
  }

  /* ---------- Live wire data ----------
     content.js's openSource.repos is the fallback shown immediately. If
     data/wire-dispatches.json (regenerated daily by scripts/update-wire-
     dispatches.mjs via GitHub Actions) is present and loads, it replaces
     that fallback and both wire renders run again — progressive
     enhancement, so the page works offline or before the first automated
     run has ever happened. */
  function refreshWireDispatchesFromLiveData() {
    fetch("data/wire-dispatches.json", { cache: "no-store" })
      .then(function (res) { return res.ok ? res.json() : null; })
      .then(function (data) {
        if (!data || !Array.isArray(data.repos) || data.repos.length === 0) return;
        CONTENT.openSource.repos = data.repos.map(function (r) {
          var tags = r.language ? [r.language] : [];
          return {
            org: r.org,
            repo: r.repo,
            repoUrl: r.repoUrl,
            description: r.description || "",
            logo: r.logo,
            prs: r.prs.map(function (p) {
              return {
                title: p.title,
                url: p.url,
                status: p.status,
                description: p.description || "",
                tags: tags,
              };
            }),
          };
        });
        renderWireCondensed();
        renderWire();
      })
      .catch(function () {
        // Offline, a file:// preview, or the workflow hasn't run yet — keep the fallback.
      });
  }

  /* ---------- Print: expand every dispatch, restore after ----------
     Closed <details> content isn't reachable via a CSS override — the
     browser doesn't expose it to a plain `display: block !important` on
     the child. Toggling the `open` property in JS is the part that
     actually works across browsers. */
  function setupPrintExpansion() {
    var reopenIds = [];
    window.addEventListener("beforeprint", function () {
      reopenIds = [];
      document.querySelectorAll(".wire-repo").forEach(function (d) {
        if (!d.open) {
          d.open = true;
          reopenIds.push(d.id);
        }
      });
    });
    window.addEventListener("afterprint", function () {
      reopenIds.forEach(function (id) {
        var d = document.getElementById(id);
        if (d) d.open = false;
      });
      reopenIds = [];
    });
  }

  /* ---------- Boot ---------- */
  function init() {
    renderMasthead();
    renderNameCycle();
    renderNav();
    renderThemeToggle();
    renderHero();
    renderGlance();
    renderWireCondensed();
    renderWeather();
    renderProjects();
    renderWire();
    renderLedger();
    renderMarkets();
    renderClassifieds();
    renderFooter();
    refreshWireDispatchesFromLiveData();
    setupPrintExpansion();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
