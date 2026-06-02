(function () {
  const site = window.SITE;

  function el(id) {
    return document.getElementById(id);
  }

  function pageHeader(page) {
    return `
      <section class="page-header">
        <div class="container-narrow">
          <p class="eyebrow hero-animate hero-delay-1">${page.eyebrow}</p>
          <h1 class="hero-animate hero-delay-2">${page.title}</h1>
          <p class="intro hero-animate hero-delay-3">${page.intro}</p>
        </div>
      </section>
    `;
  }

  function button(label, href, type) {
    return `<a class="button ${type}" href="${href}">${label}</a>`;
  }

  function serviceCard(service, index) {
    return `
      <article class="card service-card service-card-reveal service-card-delay-${index + 1}">
        <img class="service-card-image" src="${service.image}" alt="${service.imageAlt}" width="600" height="200" loading="lazy">
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </article>
    `;
  }

  function renderTrustBar(target) {
    target.innerHTML = site.trustBar.map((item) => `
      <div class="trust-item">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m20 6-11 11-5-5"/></svg>
        <span>${item}</span>
      </div>
    `).join("");
  }

  function renderServices(target) {
    target.innerHTML = site.services.map((service, index) => serviceCard(service, index)).join("");
  }

  function renderFaq(target) {
    target.innerHTML = site.faqs.map((faq, index) => {
      const panelId = `faq-panel-${index + 1}`;
      const buttonId = `faq-button-${index + 1}`;
      return `
        <div class="accordion-item">
          <h3>
            <button class="accordion-trigger" id="${buttonId}" type="button" aria-expanded="false" aria-controls="${panelId}">
              <span>${faq.question}</span>
              <span class="accordion-icon" aria-hidden="true"></span>
            </button>
          </h3>
          <div class="accordion-panel" id="${panelId}" role="region" aria-labelledby="${buttonId}">
            <p>${faq.answer}</p>
          </div>
        </div>
      `;
    }).join("");
  }

  function renderFinalCta(target) {
    target.innerHTML = `
      <div>
        <h2>${site.finalCta.title}</h2>
        <p>${site.finalCta.text}</p>
      </div>
      <div class="cta-actions">
        ${button(site.company.phone, site.company.phoneHref, "button-accent")}
        ${button(site.ctas.bookOnline, "book.html", "button-secondary")}
      </div>
    `;
  }

  function renderHome() {
    const main = el("main");
    main.innerHTML = `
      <section class="hero">
        <div class="hero-content">
          <p class="eyebrow hero-animate hero-delay-1">${site.hero.eyebrow}</p>
          <h1 class="hero-animate hero-delay-2">${site.hero.title}</h1>
          <p class="intro hero-animate hero-delay-3">${site.hero.text}</p>
          <div class="hero-actions hero-animate hero-delay-4">
            ${button(site.ctas.bookRide, "book.html", "button-primary")}
            ${button(site.ctas.learnMore, "services.html", "button-secondary")}
          </div>
          <p class="hero-animate hero-delay-4">${site.hero.note}</p>
        </div>
        <div class="hero-media">
          <img src="${site.hero.image}" alt="${site.hero.imageAlt}" width="900" height="760">
        </div>
      </section>
      <section class="section trust-section">
        <div class="container trust-bar" id="trust-bar"></div>
      </section>
      <section class="section section-muted">
        <div class="container">
          <p class="eyebrow">${site.pages.services.eyebrow}</p>
          <h2>${site.pages.services.title}</h2>
          <div class="grid grid-3" id="service-cards"></div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <p class="eyebrow">${site.howItWorks.eyebrow}</p>
          <h2>${site.howItWorks.title}</h2>
          <div class="grid grid-3">
            ${site.howItWorks.steps.map((step, index) => `
              <article class="card">
                <span class="step-number">${index + 1}</span>
                <h3>${step.title}</h3>
                <p>${step.description}</p>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
      <section class="section section-muted section-diagonal">
        <div class="container-narrow">
          <p class="eyebrow">${site.faqSection.eyebrow}</p>
          <h2>${site.faqSection.title}</h2>
          <div class="accordion" id="faq"></div>
        </div>
      </section>
      <section class="section">
        <div class="container cta-banner" id="final-cta"></div>
      </section>
    `;
    renderTrustBar(el("trust-bar"));
    renderServices(el("service-cards"));
    renderFaq(el("faq"));
    renderFinalCta(el("final-cta"));
    document.dispatchEvent(new CustomEvent("accordion:rendered"));
  }

  function renderServicesPage() {
    const page = site.pages.services;
    el("main").innerHTML = `
      ${pageHeader(page)}
      <section class="section">
        <div class="container">
          <h2>${page.detailTitle}</h2>
          <div class="grid">
            ${site.services.map((service) => `
              <article class="service-detail" id="${service.id}">
                <div class="feature-row">
                  <div>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                  </div>
                  <dl class="detail-list">
                    <div><dt class="detail-term">${page.whoLabel}</dt><dd>${service.who}</dd></div>
                    <div><dt class="detail-term">${page.includedLabel}</dt><dd>${service.included}</dd></div>
                    <div><dt class="detail-term">${page.accommodationsLabel}</dt><dd>${service.accommodations}</dd></div>
                  </dl>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderBookPage() {
    const page = site.pages.book;
    el("main").innerHTML = `
      ${pageHeader(page)}
      <section class="section">
        <div class="container booking-form-shell hero-animate hero-delay-2">
          <iframe class="jotform-frame" id="jotform-frame" title="${page.formTitle}" loading="lazy" scrolling="no"></iframe>
          <p class="booking-form-fallback">${page.formFallback} <a id="jotform-link" href="#">${page.formFallbackLink}</a></p>
        </div>
      </section>
    `;
    document.dispatchEvent(new CustomEvent("booking:rendered"));
  }

  function resizeBookingFrame(height) {
    const frame = el("jotform-frame");
    const numericHeight = Number(height);
    if (!frame || Number.isNaN(numericHeight)) return;
    frame.style.height = `${Math.max(numericHeight, 900)}px`;
  }

  window.addEventListener("message", (event) => {
    if (typeof event.data !== "string") return;
    const args = event.data.split(":");
    const action = args[0];
    const value = args[1];

    if (action === "setHeight") {
      resizeBookingFrame(value);
    }

    if (action === "scrollIntoView") {
      el("jotform-frame")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  function renderTestimonialsPage() {
    const page = site.pages.testimonials;
    el("main").innerHTML = `
      ${pageHeader(page)}
      <section class="section">
        <div class="container">
          <div class="grid grid-3">
            ${site.testimonials.map((testimonial) => `
              <article class="card">
                <p>${testimonial.quote}</p>
                <h3>${testimonial.name}</h3>
                <p>${testimonial.detail}</p>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
      <section class="section section-muted">
        <div class="container cta-banner" id="final-cta"></div>
      </section>
    `;
    renderFinalCta(el("final-cta"));
  }

  function renderAboutPage() {
    const page = site.pages.about;
    el("main").innerHTML = `
      ${pageHeader(page)}
      <section class="section">
        <div class="container split">
          <div>
            <h2>${page.missionTitle}</h2>
            <p>${page.missionText}</p>
            <h2>${page.serveTitle}</h2>
            <p>${page.serveText}</p>
            <h2>${page.areaTitle}</h2>
            <p>${page.areaText}</p>
          </div>
          <aside class="contact-panel">
            <h2>${page.trustTitle}</h2>
            <ul>${page.trustItems.map((item) => `<li>${item}</li>`).join("")}</ul>
          </aside>
        </div>
      </section>
    `;
  }

  function renderContactPage() {
    const page = site.pages.contact;
    el("main").innerHTML = `
      ${pageHeader(page)}
      <section class="section">
        <div class="container split">
          <aside class="contact-panel">
            <dl class="contact-list">
              <div><dt>${page.phoneLabel}</dt><dd><a href="${site.company.phoneHref}">${site.company.phone}</a></dd></div>
              <div><dt>${page.emailLabel}</dt><dd><a href="${site.company.emailHref}">${site.company.email}</a></dd></div>
              <div><dt>${page.hoursLabel}</dt><dd>${site.company.hours}</dd></div>
              <div><dt>${page.areaLabel}</dt><dd>${site.company.serviceArea}</dd></div>
            </dl>
          </aside>
          <form class="form-card contact-form" action="${page.formAction}" method="post">
            <h2>${page.formTitle}</h2>
            <div class="field"><label for="name">${page.fields.name}</label><input id="name" name="name" autocomplete="name" required></div>
            <div class="field"><label for="phone">${page.fields.phone}</label><input id="phone" name="phone" autocomplete="tel" required></div>
            <div class="field"><label for="email">${page.fields.email}</label><input id="email" name="email" type="email" autocomplete="email" required></div>
            <div class="field"><label for="message">${page.fields.message}</label><textarea id="message" name="message" required></textarea></div>
            <button class="button button-primary" type="submit">${site.labels.formSubmit}</button>
          </form>
        </div>
      </section>
    `;
  }

  function renderThankYouPage() {
    const page = site.pages.thankYou;
    el("main").innerHTML = `
      ${pageHeader(page)}
      <section class="section">
        <div class="container-narrow contact-panel">
          <h2>${page.nextTitle}</h2>
          <ul>${page.nextItems.map((item) => `<li>${item}</li>`).join("")}</ul>
          <p>${page.urgentText}</p>
          <div class="button-row">
            ${button(site.company.phone, site.company.phoneHref, "button-primary")}
            ${button(site.ctas.backHome, "index.html", "button-secondary")}
          </div>
        </div>
      </section>
    `;
  }

  document.addEventListener("layout:ready", () => {
    const page = document.body.dataset.page;
    if (page === "home") renderHome();
    if (page === "services") renderServicesPage();
    if (page === "book") renderBookPage();
    if (page === "testimonials") renderTestimonialsPage();
    if (page === "about") renderAboutPage();
    if (page === "contact") renderContactPage();
    if (page === "thankYou") renderThankYouPage();
    document.dispatchEvent(new CustomEvent("page:rendered"));
  });
})();
