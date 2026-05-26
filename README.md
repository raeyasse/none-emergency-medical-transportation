# NEMT Booking Website

Production-ready static website for a Non-Emergency Medical Transportation company. It uses plain HTML, CSS, and JavaScript only, so it can run by opening `index.html` directly in a browser.

## File Structure

```text
/
  index.html
  services.html
  testimonials.html
  book.html
  about.html
  contact.html
  thank-you.html

  /css
    variables.css
    base.css
    layout.css
    components.css
    animations.css

  /js
    layout.js
    render.js
    nav.js
    accordion.js
    smooth-scroll.js
    scroll-animations.js

  /data
    content.js

  /assets
    /icons
      ambulatory.svg
      wheelchair.svg
      stretcher.svg
```

## Editing Site Content

All visible site copy lives in `data/content.js` inside the `SITE` object. Update company details, service copy, FAQs, calls to action, page headings, and form labels there.

## Updating JotForm

The booking form URL is defined in `data/content.js`:

```js
SITE.forms.jotformUrl
```

Replace the placeholder JotForm URL with the client's production form URL. The booking page also exposes it as a single `JOTFORM_URL` constant at the top of the page script for quick updates.

## Local Use

Open `index.html` in any modern browser. No server, package install, build step, or framework is required.
