import React, { useState } from "react";
import Logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "الحمل", to: "/HamlPart1" },
    { label: "النمو التطور", soon: true },
    { label: "التربية الإيجابية", soon: true },
    { label: " كورسات ", soon: true },
    { label:  " ماذا تشتري ", soon: true },
    { label:  " خدمات ", soon: true },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/20 bg-[#75b8b2] shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link className="h-14 w-24 shrink-0 sm:h-16 sm:w-28 md:h-20 md:w-32" to="/">
          <img src={Logo} alt="Mohma logo" className="h-full w-full object-contain" />
        </Link>

        <div className="hidden items-center gap-2 font-bold text-black md:flex md:gap-3 lg:gap-4">
          {navItems.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className="rounded-2xl border-2 border-white bg-white px-3 py-2 text-sm transition duration-200 hover:-translate-y-1 hover:scale-[1.02] lg:px-4"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                type="button"
                className="rounded-2xl border-2 border-white bg-white px-3 py-2 text-sm transition duration-200 hover:-translate-y-1 hover:scale-[1.02] lg:px-4"
              >
                {item.label}
                <span className="mx-2 rounded-md bg-[#75b8b2] px-2 py-1 text-[11px] text-white">
                  قريبا
                </span>
              </button>
            )
          )}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg border border-white p-2 text-white transition hover:bg-white/10 md:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
          </div>
        </button>
      </div>

      <div className={`${menuOpen ? "block" : "hidden"} border-t border-white/20 bg-[#75b8b2] px-4 pb-4 md:hidden`}>
        <div className="mx-auto flex max-w-7xl flex-col gap-3 pt-4 font-bold text-black">
          {navItems.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className="rounded-2xl border-2 border-white bg-white px-4 py-3 text-center transition hover:scale-[1.01]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                type="button"
                className="rounded-2xl border-2 border-white bg-white px-4 py-3 text-center transition hover:scale-[1.01]"
              >
                {item.label}
                <span className="mx-2 rounded-md bg-[#75b8b2] px-2 py-1 text-[11px] text-white">
                  قريبا
                </span>
              </button>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
