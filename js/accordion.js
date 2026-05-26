(function () {
  function bindAccordions() {
    document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
      if (trigger.dataset.bound === "true") return;
      trigger.dataset.bound = "true";
      trigger.addEventListener("click", () => {
        const expanded = trigger.getAttribute("aria-expanded") === "true";
        const panel = document.getElementById(trigger.getAttribute("aria-controls"));
        trigger.setAttribute("aria-expanded", String(!expanded));
        panel?.classList.toggle("is-open", !expanded);
      });
    });
  }

  document.addEventListener("accordion:rendered", bindAccordions);
  document.addEventListener("DOMContentLoaded", bindAccordions);
})();
