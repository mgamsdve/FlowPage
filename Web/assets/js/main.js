import "../css/styles.css";

const initLucideIcons = () => {
  if (!globalThis.lucide?.createIcons) {
    return false;
  }

  globalThis.lucide.createIcons({
    attrs: {
      "aria-hidden": "true",
      focusable: "false",
    },
  });

  return true;
};

if (!initLucideIcons()) {
  window.addEventListener("load", initLucideIcons, { once: true });
}

const closeAllFaqItems = () => {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const content = item.querySelector(".faq-content");
    const icon = item.querySelector(".faq-icon");
    const button = item.querySelector(".faq-toggle");

    if (!content || !icon || !button) {
      return;
    }

    content.style.maxHeight = null;
    content.setAttribute("aria-hidden", "true");
    icon.textContent = "+";
    button.setAttribute("aria-expanded", "false");
  });
};

const toggleFaqItem = (item) => {
  const content = item.querySelector(".faq-content");
  const icon = item.querySelector(".faq-icon");
  const button = item.querySelector(".faq-toggle");

  if (!content || !icon || !button) {
    return;
  }

  const isOpen = button.getAttribute("aria-expanded") === "true";

  closeAllFaqItems();

  if (!isOpen) {
    content.style.maxHeight = `${content.scrollHeight}px`;
    content.setAttribute("aria-hidden", "false");
    icon.textContent = "−";
    button.setAttribute("aria-expanded", "true");
  }
};

document.querySelectorAll(".faq-item").forEach((item) => {
  const button = item.querySelector(".faq-toggle");
  const content = item.querySelector(".faq-content");

  if (!button || !content) {
    return;
  }

  content.setAttribute("aria-hidden", "true");
  button.setAttribute("aria-expanded", "false");

  button.addEventListener("click", (event) => {
    if (event.target.closest("a, input, textarea, select, label")) {
      return;
    }

    toggleFaqItem(item);
  });
});

const revealItems = document.querySelectorAll(".reveal");

if (revealItems.length) {
  const revealObserver = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        // Ensure hidden state is painted before reveal, especially for above-the-fold hero content.
        window.setTimeout(() => {
          entry.target.classList.add("is-visible");
        }, 30);
        revealObserver.unobserve(entry.target);
      }),
    {
      threshold: 0.12,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  window.requestAnimationFrame(() => {
    revealItems.forEach((item) => revealObserver.observe(item));
  });
}

const exempleItems = document.querySelectorAll("#impact .ex-item");

if (exempleItems.length) {
  const obs = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      }),
    { threshold: 0.15 },
  );

  exempleItems.forEach((item) => obs.observe(item));
}

const finalTextarea = document.querySelector("#contact textarea");

if (finalTextarea) {
  const MAX_CONTACT_MESSAGE_HEIGHT = 240;

  const resizeContactTextarea = () => {
    finalTextarea.style.height = "auto";
    const nextHeight = Math.min(
      finalTextarea.scrollHeight,
      MAX_CONTACT_MESSAGE_HEIGHT,
    );
    finalTextarea.style.height = `${nextHeight}px`;
    finalTextarea.style.overflowY =
      finalTextarea.scrollHeight > MAX_CONTACT_MESSAGE_HEIGHT ? "auto" : "hidden";
  };

  const resizeTextarea = () => {
    resizeContactTextarea();
  };

  finalTextarea.style.overflowY = "hidden";
  resizeTextarea();
  finalTextarea.addEventListener("input", resizeTextarea);
}

const scrollIndicator = document.getElementById("scroll-indicator");

if (scrollIndicator) {
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 50) {
        scrollIndicator.style.opacity = "0";
        scrollIndicator.style.pointerEvents = "none";
      } else {
        scrollIndicator.style.opacity = "1";
      }
    },
    { passive: true },
  );
}

const mainNav = document.getElementById("main-nav");
const navInner = mainNav ? mainNav.querySelector("nav") : null;
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuBtn = document.getElementById("close-menu-btn");

if (mainNav && navInner) {
  const updateNavStyles = () => {
    if (window.scrollY > 20) {
      navInner.classList.add(
        "bg-brand-cream",
        "border-brand-soft-border",
        "shadow-sm",
      );
      navInner.classList.remove("bg-transparent", "border-transparent");
      if (window.innerWidth < 768) {
        navInner.classList.remove("rounded-3xl");
        navInner.classList.add("rounded-none");
      }
    } else {
      navInner.classList.remove(
        "bg-brand-cream",
        "border-brand-soft-border",
        "shadow-sm",
        "rounded-none",
      );
      navInner.classList.add("bg-transparent", "border-transparent", "rounded-3xl");
    }
  };

  let isTicking = false;
  const onScroll = () => {
    if (isTicking) {
      return;
    }

    isTicking = true;
    window.requestAnimationFrame(() => {
      updateNavStyles();
      isTicking = false;
    });
  };

  updateNavStyles();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function openMenu() {
  if (!hamburgerBtn || !mobileMenu) {
    return;
  }

  mobileMenu.classList.add("menu-open");
  mobileMenu.setAttribute("aria-hidden", "false");
  hamburgerBtn.classList.add("is-open");
  hamburgerBtn.setAttribute("aria-expanded", "true");
  document.body.classList.add("menu-open");
  if (mainNav) mainNav.style.opacity = "0";
  if (mainNav) mainNav.style.pointerEvents = "none";
}

function closeMenu() {
  if (!hamburgerBtn || !mobileMenu) {
    return;
  }

  mobileMenu.classList.remove("menu-open");
  mobileMenu.setAttribute("aria-hidden", "true");
  hamburgerBtn.classList.remove("is-open");
  hamburgerBtn.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
  if (mainNav) mainNav.style.opacity = "1";
  if (mainNav) mainNav.style.pointerEvents = "";
}

if (hamburgerBtn) hamburgerBtn.addEventListener("click", openMenu);
if (closeMenuBtn) {
  closeMenuBtn.addEventListener("click", closeMenu);
  closeMenuBtn.addEventListener("touchend", (event) => {
    event.preventDefault();
    closeMenu();
  });
}

document.querySelectorAll(".mobile-nav-link").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  const contactMessage = document.getElementById("contact-message");

  const resizeContactMessage = () => {
    if (!contactMessage) {
      return;
    }

    contactMessage.style.height = "auto";
    const nextHeight = Math.min(
      contactMessage.scrollHeight,
      240,
    );
    contactMessage.style.height = `${nextHeight}px`;
    contactMessage.style.overflowY =
      contactMessage.scrollHeight > 240 ? "auto" : "hidden";
  };

  if (contactMessage) {
    resizeContactMessage();
    contactMessage.addEventListener("input", resizeContactMessage);
  }

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = new FormData(contactForm);

    const response = await fetch(contactForm.action, {
      method: contactForm.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      contactForm.reset();
      const successMessage = document.getElementById("form-success");
      if (successMessage) {
        successMessage.classList.remove("hidden");
      }
      resizeContactMessage();
    } else {
      alert("Une erreur s'est produite.");
    }
  });
}
