document.addEventListener("DOMContentLoaded", () => {
  // ---------------------------
  // Scroll reveal
  // ---------------------------
  const elements = document.querySelectorAll("section, .project-card, .skill-card");
  elements.forEach((el) => el.classList.add("reveal"));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else if (entry.intersectionRatio === 0) {
          entry.target.classList.remove("active");
        }
      });
    },
    {
      threshold: [0, 0.15],
      rootMargin: "0px 0px -10% 0px",
    }
  );

  elements.forEach((el) => revealObserver.observe(el));

  // ---------------------------
  // Navbar active link on scroll
  // ---------------------------
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
  const sectionsForNav = Array.from(navLinks)
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((a) => a.classList.remove("active"));

        const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add("active");
      });
    },
    { threshold: 0.35 }
  );

  sectionsForNav.forEach((sec) => navObserver.observe(sec));

  // ---------------------------
  // Theme toggle (with saved preference)
  // ---------------------------
  const toggleBtn = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme");

  if (toggleBtn) {
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      toggleBtn.textContent = "☀️";
    } else {
      toggleBtn.textContent = "🌙";
    }

    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      toggleBtn.textContent = isDark ? "☀️" : "🌙";
    });
  }

  // ---------------------------
  // Font size controls (multi-step)
  // ---------------------------
  const increaseBtn = document.getElementById("increaseText");
  const decreaseBtn = document.getElementById("decreaseText");

  let currentSize = parseInt(getComputedStyle(document.documentElement).fontSize, 10) || 16;
  const minSize = 14;
  const maxSize = 22;

  if (increaseBtn && decreaseBtn) {
    increaseBtn.addEventListener("click", () => {
      if (currentSize < maxSize) {
        currentSize += 1;
        document.documentElement.style.fontSize = currentSize + "px";
      }
    });

    decreaseBtn.addEventListener("click", () => {
      if (currentSize > minSize) {
        currentSize -= 1;
        document.documentElement.style.fontSize = currentSize + "px";
      }
    });
  }
});
