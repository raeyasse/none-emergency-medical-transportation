(function () {
  const site = window.SITE;

  function currentFile() {
    const path = window.location.pathname.split("/").pop();
    return path || "index.html";
  }

  function makeLink(item, className) {
    const active = item.href === currentFile();
    return `<a class="${className}${active ? " is-active" : ""}" href="${item.href}"${active ? ' aria-current="page"' : ""}>${item.label}</a>`;
  }

  function injectSkipLink() {
    const skip = document.querySelector("[data-skip-link]");
    if (skip) {
      skip.textContent = site.labels.skipLink;
    }
  }

  function injectHeader() {
    const header = document.querySelector("[data-site-header]");
    if (!header) return;

    header.innerHTML = `
      <div class="top-bar">
        <div class="container top-bar-inner">
          <div class="top-bar-group">
            <a class="top-bar-link" href="${site.company.phoneHref}">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z"/></svg>
              <span>${site.labels.phoneLabel}: ${site.company.phone}</span>
            </a>
            <a class="top-bar-link" href="${site.company.emailHref}">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/><path d="m22 6-10 7L2 6"/></svg>
              <span>${site.company.email}</span>
            </a>
          </div>
          <div class="top-bar-group top-bar-group-right">
            <span class="top-bar-item">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg>
              <span>${site.company.serviceArea}</span>
            </span>
            <span class="top-bar-item">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/></svg>
              <span>${site.company.hours}</span>
            </span>
          </div>
        </div>
      </div>
      <div class="container nav-shell">
        <a class="brand" href="index.html" aria-label="${site.labels.homeAria}">
          <img class="brand-logo" src="images/logo.svg" alt="" width="176" height="64">
          <span>${site.company.name}</span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="${site.labels.menuOpen}">
          <span class="nav-toggle-lines" aria-hidden="true"></span>
        </button>
        <nav class="nav-links" id="primary-navigation" aria-label="${site.labels.primaryNav}">
          ${site.nav.map((item) => makeLink(item, "nav-link")).join("")}
          <a class="button button-primary nav-cta" href="book.html">${site.ctas.bookRide}</a>
        </nav>
      </div>
    `;
  }

  function injectFooter() {
    const footer = document.querySelector("[data-site-footer]");
    if (!footer) return;

    footer.innerHTML = `
      <div class="container footer-grid">
        <div class="footer-brand-column">
          <a class="footer-logo-link" href="index.html" aria-label="${site.labels.homeAria}">
            <img class="footer-logo" src="images/logo.svg" alt="" width="220" height="80" loading="lazy">
          </a>
          <p>${site.footer.aboutText}</p>
          <p>${site.footer.emergency}</p>
        </div>
        <div>
          <h2>${site.footer.servicesTitle}</h2>
          <ul class="footer-list">
            ${site.services.map((service) => `<li><a href="services.html#${service.id}">${service.title}</a></li>`).join("")}
          </ul>
        </div>
        <div>
          <h2>${site.footer.contactTitle}</h2>
          <ul class="footer-contact-list">
            <li>
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg>
              <span>${site.company.serviceArea}</span>
            </li>
            <li>
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/><path d="m22 6-10 7L2 6"/></svg>
              <a href="${site.company.emailHref}">${site.company.email}</a>
            </li>
            <li>
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z"/></svg>
              <a href="${site.company.phoneHref}">${site.company.phone}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="container footer-bottom">
        <p>${site.footer.copyright}</p>
      </div>
    `;
  }

  function applyMeta() {
    const page = document.body.dataset.page;
    const title = page && site.pages[page] ? `${site.pages[page].title} | ${site.company.name}` : `${site.company.name} | Non-Emergency Medical Transportation`;
    const description = site.meta.defaultDescription;
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", site.meta.ogTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", site.meta.ogDescription);
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyMeta();
    injectSkipLink();
    injectHeader();
    injectFooter();
    document.dispatchEvent(new CustomEvent("layout:ready"));
  });
})();
