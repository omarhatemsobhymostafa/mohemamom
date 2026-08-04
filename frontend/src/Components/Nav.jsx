import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiCalendar, FiHeart } from "react-icons/fi";

export default function Nav() {
  const items = [
    { label: "الرئيسية", to: "/", icon: FiHome },
    { label: "الحمل", to: "/PregnancyWeekByWeek", icon: FiCalendar },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/20 bg-[#75b8b2]/95 px-3 py-2 shadow-[0_-8px_30px_rgba(0,0,0,0.1)] backdrop-blur">
      <div className="mx-auto flex max-w-md items-center justify-around">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              to={item.to}
              className="flex flex-col items-center rounded-2xl px-3 py-2 text-[11px] font-bold text-white transition hover:bg-white/20"
            >
              <Icon className="mb-1 text-lg" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
