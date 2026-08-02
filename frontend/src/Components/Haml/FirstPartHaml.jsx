import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function FirstPartHaml() {
  const location = useLocation();
  const isDetailPage = location.pathname.includes("/HamlPart1/") && location.pathname.split("/HamlPart1/").length > 1;
  const [weeks, setWeeks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const loadWeeks = async () => {
      try {
        const response = await fetch("https://mohema.onrender.com/weeksdata");
        if (!response.ok) {
          throw new Error("Failed to fetch weeks data");
        }

        const data = await response.json();
        const normalizedWeeks = (Array.isArray(data) ? data : [])
          .map((item) => {
            const weekNumber = String(item?.weekNumber || "");
            const numericWeek = Number(weekNumber.replace(/^week_/, ""));

            return {
              ...item,
              numericWeek: Number.isNaN(numericWeek) ? null : numericWeek,
            };
          })
          .filter((item) => item.numericWeek !== null)
          .filter((item) => item.numericWeek >= 1 && item.numericWeek <= 41)
          .sort((a, b) => a.numericWeek - b.numericWeek)
          .filter((item, index, array) => array.findIndex((entry) => entry.numericWeek === item.numericWeek) === index);

        setWeeks(normalizedWeeks);
      } catch (error) {
        console.error("Error loading weeks:", error);
        setWeeks([]);
      } finally {
        setLoading(false);
      }
    };

    loadWeeks();
  }, []);

  useEffect(() => {
    if (location.pathname.includes("/HamlPart1/")) {
      setIsOpen(false);
    }
  }, [location.pathname]);

  return (
    <div className="sticky top-0 z-20 rounded-b-[32px] bg-white/90 px-3 py-4 shadow-[0_8px_30px_rgba(117,184,178,0.15)] backdrop-blur-sm sm:px-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-1 sm:px-3">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-full bg-[#75b8b2] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#5aa79e] sm:px-5 sm:text-base"
          aria-expanded={isOpen}
        >
          {isOpen ? "إخفاء الأسابيع" : "عرض الأسابيع"}
        </button>

        <div
          className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[60vh] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className={`mx-auto flex min-w-full max-h-[60vh] flex-col items-stretch justify-start gap-2 overflow-y-auto px-1 pb-2 text-center font-bold text-white sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 sm:px-3 sm:overflow-visible ${isDetailPage ? "sm:justify-center" : "sm:justify-start"}`}>
            {loading ? (
              <span className="text-[#75b8b2]">جاري تحميل الأسابيع...</span>
            ) : (
              weeks.map((item) => (
                <Link
                  key={item.weekNumber}
                  className="w-full rounded-full bg-[#75b8b2] px-4 py-2.5 text-sm transition hover:bg-[#5aa79e] sm:w-auto sm:px-5 sm:py-3 sm:text-base"
                  to={`/HamlPart1/${item.weekNumber}`}
                  onClick={() => setIsOpen(false)}
                >
                  الأسبوع {item.weekNumber.replace("week_", "")}
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
