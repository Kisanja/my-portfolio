// src/components/Header.jsx
import React, { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certs", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const viewportMiddle = window.scrollY + window.innerHeight / 2;

      let closestId = NAV_ITEMS[0].id;
      let closestDistance = Infinity;

      NAV_ITEMS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const sectionMiddle = rect.top + window.scrollY + rect.height / 2;
        const distance = Math.abs(sectionMiddle - viewportMiddle);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = id;
        }
      });

      setActiveSection(closestId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on load so the correct tab is active initially
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id, e) => {
    e.preventDefault();

    setActiveSection(id); // highlight immediately

    const el = document.getElementById(id);
    if (!el || typeof window === "undefined") return;

    const headerOffset = 64; // px – adjust if your header height changes
    const elementTop = el.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementTop - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const linkClasses = (id) =>
    [
      "text-xs md:text-sm font-medium transition-colors px-3 py-1 rounded-full",
      activeSection === id
        ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/60"
        : "text-slate-100 hover:text-cyan-300",
    ].join(" ");

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo / name */}
        <a href="#home" onClick={(e) => handleScrollTo("home", e)}>
          <span className="text-lg font-semibold text-slate-50">
            <span className="text-cyan-400">Kisanja</span> Portfolio
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScrollTo(item.id, e)}
              className={linkClasses(item.id)}
            >
              {item.label}
            </a>
          ))}

          {/* "Let's talk" button → contact section */}
          <a
            href="#contact"
            onClick={(e) => handleScrollTo("contact", e)}
            className="rounded-full border border-cyan-400 px-4 py-1.5 text-xs md:text-sm font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Let&apos;s talk
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
