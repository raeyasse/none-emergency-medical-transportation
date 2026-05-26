const SITE = {
  company: {
    name: "Care2Go Transportation LLC",
    phone: "(919) 567-8635",
    phoneHref: "tel:+19195678635",
    email: "info@care2go.com",
    emailHref: "mailto:info@care2go.com",
    serviceArea: "Durham, NC",
    hours: "Every day, 6:00 AM to 8:00 PM"
  },
  meta: {
    defaultDescription: "Reliable non-emergency medical transportation for appointments, therapy visits, discharges, and recurring care.",
    ogTitle: "Care2Go Transportation LLC | Non-Emergency Medical Transportation",
    ogDescription: "Compassionate NEMT service with ambulatory, wheelchair, and stretcher transportation options."
  },
  nav: [
    { label: "Home", href: "index.html" },
    { label: "Services", href: "services.html" },
    { label: "Testimonials", href: "testimonials.html" },
    { label: "About", href: "about.html" },
    { label: "Contact", href: "contact.html" }
  ],
  labels: {
    skipLink: "Skip to main content",
    menuOpen: "Open navigation menu",
    menuClose: "Close navigation menu",
    homeAria: "Care2Go Transportation LLC home",
    footerNav: "Footer navigation",
    primaryNav: "Primary navigation",
    phoneLabel: "Phone",
    emailLabel: "Email",
    locationLabel: "Location",
    accordionToggle: "Toggle answer",
    formSubmit: "Send Message",
    required: "required"
  },
  ctas: {
    bookRide: "Book a Ride",
    learnMore: "Learn More",
    bookOnline: "Book Online",
    callNow: "Call Now",
    backHome: "Back to Home",
    viewServices: "View Services"
  },
  hero: {
    eyebrow: "Non-emergency medical transportation",
    title: "Reliable rides for care that cannot wait.",
    text: "Door-through-door transportation for medical appointments, therapy visits, discharges, and recurring treatment with patient, respectful drivers.",
    note: "Same-day requests are welcome when vehicles are available."
  },
  trustBar: [
    "Licensed & Insured",
    "Serving Durham, NC",
    "Available 7 Days a Week"
  ],
  services: [
    {
      id: "ambulatory",
      title: "Ambulatory Transportation",
      description: "Comfortable rides for passengers who can walk independently or with light assistance.",
      icon: "assets/icons/ambulatory.svg",
      alt: "Walking cane icon",
      who: "Patients traveling to routine appointments, outpatient procedures, therapy, dialysis, or follow-up visits.",
      included: "Curb-to-curb or door-through-door assistance, appointment timing support, clean vehicles, and respectful help getting safely seated.",
      accommodations: "Drivers can assist with walkers, canes, small personal bags, and caregiver ride-alongs when scheduled."
    },
    {
      id: "wheelchair",
      title: "Wheelchair Transportation",
      description: "Accessible van service for riders who use manual or transport wheelchairs.",
      icon: "assets/icons/wheelchair.svg",
      alt: "Wheelchair icon",
      who: "Riders who need ramp access, secure wheelchair positioning, and extra boarding time.",
      included: "ADA-conscious boarding, wheelchair securement, lap and shoulder belts, and patient-centered pacing from pickup to drop-off.",
      accommodations: "Please share wheelchair size, pickup access notes, and whether a caregiver will travel with the rider."
    },
    {
      id: "stretcher",
      title: "Stretcher Transportation",
      description: "Non-emergency stretcher trips for riders who must remain reclined during transport.",
      icon: "assets/icons/stretcher.svg",
      alt: "Stretcher icon",
      who: "Patients leaving facilities, attending specialist visits, or traveling when sitting upright is not medically appropriate.",
      included: "Two-person transfer support, secure stretcher transport, coordination with facility staff, and careful trip planning.",
      accommodations: "Stretcher rides require advance scheduling so we can confirm staffing, access, and medical transport details."
    }
  ],
  howItWorks: {
    eyebrow: "How it works",
    title: "A simple process with real people behind it.",
    steps: [
      {
        title: "Book",
        description: "Request a ride online or by phone with pickup details, appointment time, mobility needs, and contact information."
      },
      {
        title: "Confirm",
        description: "Our team reviews the trip, confirms availability, and calls with timing, vehicle details, and any next steps."
      },
      {
        title: "Ride",
        description: "A trained driver arrives on time, helps the rider board safely, and supports a calm trip from door to door."
      }
    ]
  },
  faqs: [
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 24 hours ahead when possible. Same-day trips may be available depending on route, vehicle, and staffing."
    },
    {
      question: "Can a family member or caregiver ride along?",
      answer: "Yes. Please include caregiver details when booking so we can confirm seating and any facility pickup instructions."
    },
    {
      question: "Do you provide emergency transportation?",
      answer: "No. For emergencies or urgent medical symptoms, call 911. Our service is for scheduled, non-emergency medical trips."
    },
    {
      question: "What information do I need to book?",
      answer: "Pickup and drop-off addresses, appointment time, rider mobility needs, contact information, and any facility or access notes."
    }
  ],
  faqSection: {
    eyebrow: "FAQ",
    title: "Common questions before you schedule."
  },
  finalCta: {
    title: "Need help planning a ride?",
    text: "Call our local care team or book online. We will help you choose the right vehicle and timing."
  },
  testimonials: [
    {
      quote: "The driver was patient, on time, and helped my mother feel comfortable from the front door to the clinic.",
      name: "Family caregiver",
      detail: "Durham, NC"
    },
    {
      quote: "Scheduling recurring therapy rides was straightforward, and the confirmation calls gave our family peace of mind.",
      name: "Recurring rider",
      detail: "Outpatient therapy transportation"
    },
    {
      quote: "They coordinated clearly with our facility team and treated the discharge trip with real care.",
      name: "Care coordinator",
      detail: "Facility discharge support"
    }
  ],
  pages: {
    services: {
      eyebrow: "Services",
      title: "Transportation matched to the rider's mobility needs.",
      intro: "From routine clinic visits to carefully coordinated stretcher trips, each service is planned around safety, dignity, and timing.",
      detailTitle: "Service details",
      whoLabel: "Who it is for",
      includedLabel: "What is included",
      accommodationsLabel: "Equipment and accommodations"
    },
    book: {
      eyebrow: "Book a Ride",
      title: "Book a Ride",
      intro: "Submit a booking and we'll confirm with a tracking link instantly.",
      expectTitle: "Before you submit",
      expectItems: [
        "Have pickup and destination addresses ready.",
        "Include the appointment date, arrival time, and return trip needs.",
        "Tell us about wheelchairs, stretchers, stairs, facility access, or caregiver ride-alongs.",
        "Requests are reviewed during service hours, with confirmation calls as soon as possible."
      ],
      formTitle: "Ride request form",
      formFallback: "The booking form can also be opened in a new browser tab.",
      formFallbackLink: "Open Booking Form",
      callTitle: "Prefer to call?",
      callText: "Our team can take the same details by phone and help choose the right service."
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Kind words from riders, families, and care teams.",
      intro: "Every trip is personal. These stories reflect the calm, respectful support we aim to provide for non-emergency medical transportation."
    },
    about: {
      eyebrow: "About us",
      title: "Built for families, patients, and care teams who need dependable transportation.",
      intro: "We focus on the trips that make daily care possible: routine appointments, recurring treatment, facility discharges, and mobility-aware transportation.",
      missionTitle: "Our mission",
      missionText: "Care2Go Transportation LLC helps people reach essential care with less stress. We combine reliable scheduling, accessible vehicles, and respectful driver support so every trip feels clear and manageable.",
      serveTitle: "Who we serve",
      serveText: "We support older adults, people with disabilities, dialysis patients, therapy clients, hospital discharge planners, long-term care communities, and families coordinating recurring appointments.",
      areaTitle: "Service area",
      areaText: "Our team serves Durham, NC with advance and recurring medical transportation. Longer regional trips may be available by request.",
      trustTitle: "What riders can expect",
      trustItems: [
        "Licensed and insured transportation operations",
        "Experienced drivers trained in patient-centered assistance",
        "Clean, well-maintained vehicles with mobility accommodations",
        "Clear confirmation calls and practical trip planning"
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Talk with a local scheduling coordinator.",
      intro: "Call for the fastest help with today or tomorrow's ride. Use the form for general questions, recurring trips, and service planning.",
      phoneLabel: "Phone",
      emailLabel: "Email",
      hoursLabel: "Hours",
      areaLabel: "Service Area",
      formTitle: "Send a message",
      formAction: "mailto:info@care2go.com",
      fields: {
        name: "Full name",
        phone: "Phone number",
        email: "Email address",
        message: "How can we help?"
      }
    },
    thankYou: {
      eyebrow: "Request received",
      title: "We received your ride request.",
      intro: "Thank you for reaching out to Care2Go Transportation LLC. A scheduling coordinator will review the trip details and call within 2 hours during service hours.",
      nextTitle: "What happens next",
      nextItems: [
        "We confirm the rider's mobility needs and pickup details.",
        "We verify vehicle availability and appointment timing.",
        "We call with confirmation, pricing details, and any remaining questions."
      ],
      urgentText: "Need to update the request or speak with someone sooner?"
    }
  },
  forms: {
    jotformUrl: "https://form.jotform.com/000000000000000"
  },
  footer: {
    tagline: "Calm, reliable transportation for non-emergency medical care.",
    emergency: "For emergencies, call 911.",
    aboutText: "Care2Go Transportation LLC offers safe, reliable non-emergency medical transportation for seniors, people with mobility needs, and care teams coordinating appointments. Our accessible service helps riders reach medical visits with comfort, dignity, and dependable support.",
    servicesTitle: "Services",
    contactTitle: "Contact Information",
    copyright: "© 2026 Care2Go Transportation LLC. All rights reserved."
  }
};

window.SITE = SITE;
