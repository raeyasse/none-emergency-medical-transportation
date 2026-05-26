(function () {
  const selector = ".section, .page-header, .card, .service-detail, .contact-panel, .form-card, .cta-banner";

  function prepareAnimations() {
    const elements = Array.from(document.querySelectorAll(selector));
    elements.forEach((element, index) => {
      if (element.dataset.scrollAnimated === "true") return;
      element.dataset.scrollAnimated = "true";
      element.classList.add("scroll-reveal", `scroll-reveal-delay-${(index % 3) + 1}`);
    });
  }

  function revealWithoutObserver() {
    document.querySelectorAll(".scroll-reveal").forEach((element) => {
      element.classList.add("is-visible");
    });
  }

  function initScrollAnimations() {
    prepareAnimations();

    if (!("IntersectionObserver" in window)) {
      revealWithoutObserver();
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.04, rootMargin: "0px 0px 16% 0px" });

    document.querySelectorAll(".scroll-reveal:not(.is-visible)").forEach((element) => {
      observer.observe(element);
    });
  }

  document.addEventListener("page:rendered", initScrollAnimations);
})();
