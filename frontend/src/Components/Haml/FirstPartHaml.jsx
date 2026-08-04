import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { loadWeeksData } from "./weeksData";

export default function FirstPartHaml() {
  const location = useLocation();
  const [weeks, setWeeks] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  const pathWeek = location.pathname.split("/PregnancyWeekByWeek/").filter(Boolean).pop();
  const activeWeek = pathWeek && pathWeek !== "PregnancyWeekByWeek" ? pathWeek.replace("week_", "") : null;

  useEffect(() => {
    let ignore = false;

    const loadWeeks = async () => {
      try {
        const normalizedWeeks = await loadWeeksData();
        if (!ignore) {
          setWeeks(normalizedWeeks);
        }
      } catch (error) {
        console.error("Error loading weeks:", error);
        if (!ignore) {
          setWeeks([]);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    loadWeeks();

    return () => {
      ignore = true;
    };
  }, []);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: direction === "next" ? 220 : -220,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto mb-4 max-w-6xl rounded-[28px] border border-[#f4d7d9] bg-white/90 p-3 shadow-[0_16px_45px_rgba(117,184,178,0.12)] backdrop-blur sm:p-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <div>
          <h1 className="text-sm font-semibold text-[#f28482]"> الحمل اسبوع بأسبوع</h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollSlider("prev")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f4d7d9] bg-[#fff7f7] text-[#75b8b2] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#fef2f2]"
            aria-label="السابق"
          >
            <FiChevronRight className="text-lg" />
          </button>
          <button
            type="button"
            onClick={() => scrollSlider("next")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f4d7d9] bg-[#fff7f7] text-[#75b8b2] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#fef2f2]"
            aria-label="التالي"
          >
            <FiChevronLeft className="text-lg" />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {loading ? (
          <div className="w-full rounded-[20px] bg-[#fef2f2] px-4 py-3 text-center text-sm font-semibold text-[#75b8b2]">
            جاري تحميل الأسابيع...
          </div>
        ) : (
          weeks.map((item) => {
            const weekNumber = item.weekNumber.replace("week_", "");
            const isActive = activeWeek === weekNumber;

            return (
              <Link
                key={item.weekNumber}
                to={`/PregnancyWeekByWeek/${item.weekNumber}`}
                className={`min-w-[112px] rounded-[20px] px-3 py-3 text-center text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-[#75b8b2] text-white shadow-lg"
                    : "bg-[#fef2f2] text-[#4f6766] hover:-translate-y-1 hover:bg-[#fceaea]"
                }`}
              >
                <span className="block text-[11px] opacity-70">الأسبوع</span>
                <span className="mt-1 block text-base">{weekNumber}</span>
              </Link>
            );
          })
        )}
      </div>
    </section>
  );
}
