(function () {
  function closeMenu(toggle, links) {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", window.SITE.labels.menuOpen);
    links.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  }

  document.addEventListener("layout:ready", () => {
    const header = document.querySelector("[data-site-header]");
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");
    if (!header || !toggle || !links) return;

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      toggle.setAttribute("aria-label", expanded ? window.SITE.labels.menuOpen : window.SITE.labels.menuClose);
      links.classList.toggle("is-open", !expanded);
      document.body.classList.toggle("nav-open", !expanded);
    });

    links.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu(toggle, links);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu(toggle, links);
    });

    const updateHeader = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
      header.classList.toggle("scrolled", window.scrollY > 8);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  });
})();
