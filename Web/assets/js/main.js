import "../css/styles.css";

lucide.createIcons();

const closeAllFaqItems = () => {
  document.querySelectorAll(".faq-content").forEach((content) => {
    content.style.maxHeight = null;
  });

  document.querySelectorAll(".faq-icon").forEach((icon) => {
    icon.textContent = "+";
  });
};

const toggleFaqItem = (item) => {
  const content = item.querySelector(".faq-content");
  const icon = item.querySelector(".faq-icon");

  if (!content || !icon) {
    return;
  }

  const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

  closeAllFaqItems();

  if (!isOpen) {
    content.style.maxHeight = `${content.scrollHeight}px`;
    icon.textContent = "−";
  }
};

document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", (event) => {
    const interactiveTarget = event.target.closest(
      "a, input, textarea, select, label",
    );

    if (interactiveTarget) {
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
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navInner.classList.remove("bg-transparent", "border-transparent");
      navInner.classList.add(
        "bg-brand-cream/80",
        "backdrop-blur-xl",
        "border-brand-dark/5",
        "shadow-sm",
      );
    } else {
      navInner.classList.add("bg-transparent", "border-transparent");
      navInner.classList.remove(
        "bg-brand-cream/80",
        "backdrop-blur-xl",
        "border-brand-dark/5",
        "shadow-sm",
      );
    }
  });
}
