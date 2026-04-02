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
  const resizeTextarea = () => {
    finalTextarea.style.height = "auto";
    finalTextarea.style.height = `${finalTextarea.scrollHeight}px`;
  };

  finalTextarea.style.overflowY = "hidden";
  resizeTextarea();
  finalTextarea.addEventListener("input", resizeTextarea);
}

// Navbar Scroll Logic
const mainNav = document.getElementById("main-nav");
const navInner = mainNav ? mainNav.querySelector("nav") : null;

if (mainNav && navInner) {
  const updateNavStyles = () => {
    if (window.scrollY > 50) {
      navInner.classList.remove("bg-transparent", "border-transparent");
      navInner.classList.add(
        "bg-brand-cream/80",
        "backdrop-blur-xl",
        "border-brand-dark/10",
        "shadow-sm",
      );
    } else {
      navInner.classList.add("bg-transparent", "border-transparent");
      navInner.classList.remove(
        "bg-brand-cream/80",
        "backdrop-blur-xl",
        "border-brand-dark/10",
        "shadow-sm",
      );
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
