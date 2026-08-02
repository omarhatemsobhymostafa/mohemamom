import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FirstPartHaml from "./FirstPartHaml";
import { loadWeeksData } from "./weeksData";

export default function WeekHamlPart1() {
  const { id } = useParams();
  const [weeks, setWeeks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    const fetchWeeks = async () => {
      try {
        const data = await loadWeeksData();
        if (!ignore) {
          setWeeks(Array.isArray(data) ? data : []);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error loading weeks:", error);
        if (!ignore) {
          setWeeks([]);
          setLoading(false);
        }
      }
    };

    fetchWeeks();

    return () => {
      ignore = true;
    };
  }, []);

  const normalizedId = id?.startsWith("week_") ? id : `week_${id}`;
  const weekData = weeks.find((week) => week.weekNumber === normalizedId) || null;
  const weekNumber = Number(weekData?.weekNumber?.replace("week_", "") || 0);

  const getDynamicOptionBlocks = () => {
    if (!weekData) return [];

    return Object.keys(weekData)
      .filter((key) => key.match(/^option\d+$/))
      .map((key) => ({
        title: "",
        text: weekData[key],
      }))
      .filter((block) => block.text);
  };

  const renderTextBlock = (title, text) => {
    const safeText = String(text || "").trim();

    const paragraphs = safeText
      .split(/\n{2,}/)
      .map((paragraph) => paragraph.replace(/\r/g, "").trim())
      .filter(Boolean);

    return (
      <div className="mb-6">
        <h2 className="mb-3 text-xl font-black text-[#f48a8a] sm:text-2xl">{title}</h2>

        <div className="rounded-[24px] bg-gradient-to-br from-[#75b8b2] to-[#5aa79e] p-4 text-white shadow-[0_12px_30px_rgba(117,184,178,0.25)] sm:p-5">
          {paragraphs.length ? (
            <div className="space-y-3 whitespace-pre-line text-right leading-relaxed">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          ) : (
            <p className="text-right">لا يوجد محتوى متاح حاليًا.</p>
          )}
        </div>
      </div>
    );
  };

  if (loading) {
    return <div className="px-4 py-10 text-center">جاري تحميل البيانات...</div>;
  }

  if (!weekData) {
    return <div className="px-4 py-10 text-center">الأسبوع غير موجود</div>;
  }

  const dynamicBlocks = getDynamicOptionBlocks();

  const fruitImages = [
    { week: 4, url: "https://i.ibb.co/vxmQpkdD/pregnancy-fruit-2021-week-4.png" },
    { week: 5, url: "https://i.ibb.co/B2YtnB2m/pregnancy-fruit-2021-week-5.png" },
    { week: 6, url: "https://i.ibb.co/v48RrkGd/pregnancy-fruit-2021-week-6.png" },
    { week: 7, url: "https://i.ibb.co/kVccdpCw/pregnancy-fruit-2021-week-7.png" },
    { week: 8, url: "https://i.ibb.co/fVz79vzd/pregnancy-fruit-2021-week-8.png" },
    { week: 9, url: "https://i.ibb.co/G4mgTg0Z/pregnancy-fruit-2021-week-9.png" },
    { week: 11, url: "https://i.ibb.co/5xxkGCp6/pregnancy-fruit-2021-week-11.png" },
    { week: 12, url: "https://i.ibb.co/C3966QXF/pregnancy-fruit-2021-week-12.png" },
    { week: 13, url: "https://i.ibb.co/sdXrqm5H/pregnancy-fruit-2021-week-13.png" },
    { week: 14, url: "https://i.ibb.co/Fc9XX50/pregnancy-fruit-2021-week-14.png" },
    { week: 15, url: "https://i.ibb.co/q3YL6DZn/pregnancy-fruit-2021-week-15.png" },
    { week: 16, url: "https://i.ibb.co/9kCspgVf/pregnancy-fruit-2021-week-16.png" },
    { week: 17, url: "https://i.ibb.co/RT1QdLNd/pregnancy-fruit-2021-week-17.png" },
    { week: 18, url: "https://i.ibb.co/jvpJcQG6/pregnancy-fruit-2021-week-18.png" },
    { week: 19, url: "https://i.ibb.co/tMMd6D1S/pregnancy-fruit-2021-week-19.png" },
    { week: 20, url: "https://i.ibb.co/BV76q8QF/pregnancy-fruit-2021-wk-20.png" },
    { week: 21, url: "https://i.ibb.co/hxvj6Cm9/pregnancy-fruit-2021-wk-21.png" },
    { week: 22, url: "https://i.ibb.co/bjvZhtNZ/pregnancy-fruit-2022-week-22.png" },
    { week: 23, url: "https://i.ibb.co/RGnW8c2S/pregnancy-fruit-2022-week-23.png" },
    { week: 24, url: "https://i.ibb.co/Y7bty7Yx/pregnancy-fruit-2022-week-24.png" },
    { week: 25, url: "https://i.ibb.co/C3V4Khmc/pregnancy-fruit-2021-week-25.png" },
    { week: 26, url: "https://i.ibb.co/DPYfMq7S/pregnancy-fruit-2022-week-26.png" },
    { week: 27, url: "https://i.ibb.co/21N70sKY/pregnancy-fruit-2021-week-27.png" },
    { week: 28, url: "https://i.ibb.co/Mkhb6S82/pregnancy-fruit-2021-week-28.png" },
    { week: 29, url: "https://i.ibb.co/39RHWKpq/pregnancy-fruit-2021-week-29.png" },
    { week: 30, url: "https://i.ibb.co/5gmSgDkf/pregnancy-fruit-2022-wk-30.png" },
    { week: 31, url: "https://i.ibb.co/fdkNbTp4/pregnancy-fruit-2021-week-31.png" },
    { week: 32, url: "https://i.ibb.co/jPs1wcvz/pregnancy-fruit-2022-week-32.png" },
    { week: 33, url: "https://i.ibb.co/GQNfTmWn/pregnancy-fruit-2021-week-33.png" },
    { week: 34, url: "https://i.ibb.co/v6vwpgNW/pregnancy-fruit-2021-week-34.png" },
    { week: 35, url: "https://i.ibb.co/LDN91djM/pregnancy-fruit-2022-week-35.png" },
    { week: 36, url: "https://i.ibb.co/W4hGNNJy/pregnancy-fruit-2022-week-36.png" },
    { week: 37, url: "https://i.ibb.co/zWmRLCPH/pregnancy-fruit-2021-week-37.png" },
    { week: 38, url: "https://i.ibb.co/Nnm4LsQQ/pregnancy-fruit-2021-week-38.png" },
    { week: 39, url: "https://i.ibb.co/LdrhCMyX/pregnancy-fruit-2022-week-39.png" },
    { week: 40, url: "https://i.ibb.co/0yLgqnpF/pregnancy-fruit-2021-week-40.png" },
    { week: 41, url: "https://i.ibb.co/xt9wypxV/pregnancy-fruit-2022-week-41.png" },
  ];
  const babyImages = [
    { week: 4, url: "https://i.ibb.co/qMyyPyyG/wbw-your-baby-2021-alt-w04-1200x1200.jpg" },
    { week: 5, url: "https://i.ibb.co/mCJ8p59k/wbw-your-baby-2021-alt-w05-1200x1200.jpg" },
    { week: 6, url: "https://i.ibb.co/WWjh0jvn/wbw-your-baby-2021-alt-w06-1200x1200.jpg" },
    { week: 7, url: "https://i.ibb.co/JwDRLSx4/wbw-your-baby-2021-alt-w07-1200x1200.jpg" },
    { week: 8, url: "https://i.ibb.co/RGqcLCKj/wbw-your-baby-2021-alt-w08-1200x1200.jpg" },
    { week: 9, url: "https://i.ibb.co/spL3H4tk/wbw-your-baby-2021-alt-w09-1200x1200.jpg" },
    { week: 11, url: "https://i.ibb.co/SwC8zh19/wbw-your-baby-2021-alt-w11-1200x1200.jpg" },
    { week: 12, url: "https://i.ibb.co/JgJbbyr/wbw-your-baby-2021-alt-w12-1200x1200.jpg" },
    { week: 13, url: "https://i.ibb.co/vvddv3LT/wbw-your-baby-2021-alt-w13-1200x1200.jpg" },
    { week: 14, url: "https://i.ibb.co/yFyFfRJK/wbw-your-baby-2021-alt-w14-1200x1200.jpg" },
    { week: 15, url: "https://i.ibb.co/9mSfDF3C/wbw-your-baby-2021-alt-w15-1200x1200.jpg" },
    { week: 16, url: "https://i.ibb.co/LdHgkV3m/wbw-your-baby-2021-alt-w16-1200x1200.jpg" },
    { week: 17, url: "https://i.ibb.co/6066W3tP/wbw-your-baby-2021-alt-w17-1200x1200.jpg" },
    { week: 18, url: "https://i.ibb.co/4Z1HCb7Y/wbw-your-baby-2021-alt-w18-1200x1200.jpg" },
    { week: 19, url: "https://i.ibb.co/93Nk9xjb/wbw-your-baby-2021-alt-w19-1200x1200.jpg" },
    { week: 20, url: "https://i.ibb.co/8D1kcXZK/wbw-your-baby-2021-alt-w20-1200x1200.jpg" },
    { week: 21, url: "https://i.ibb.co/fzkgfnY1/wbw-your-baby-2021-alt-w21-1200x1200.jpg" },
    { week: 22, url: "https://i.ibb.co/39H958VS/wbw-your-baby-2021-alt-w22-1200x1200.jpg" },
    { week: 23, url: "https://i.ibb.co/Hf7nTCfZ/wbw-your-baby-2021-alt-w23-1200x1200.jpg" },
    { week: 24, url: "https://i.ibb.co/RXyJb9P/wbw-your-baby-2021-alt-w24-1200x1200.jpg" },
    { week: 25, url: "https://i.ibb.co/gxLYcND/wbw-your-baby-2021-alt-w25-1200x1200.jpg" },
    { week: 26, url: "https://i.ibb.co/ZRtvPnws/wbw-your-baby-2021-alt-w26-1200x1200.jpg" },
    { week: 27, url: "https://i.ibb.co/JJDM9ff/wbw-your-baby-2021-alt-w27-1200x1200.jpg" },
    { week: 28, url: "https://i.ibb.co/SwwrDXQh/wbw-your-baby-2021-alt-w28-1200x1200.jpg" },
    { week: 29, url: "https://i.ibb.co/BKcfwnh7/wbw-your-baby-2021-alt-w29-1200x1200.jpg" },
    { week: 30, url: "https://i.ibb.co/qFsYvg6Q/wbw-your-baby-2021-alt-w30-1200x1200.jpg" },
    { week: 31, url: "https://i.ibb.co/WNv96Txh/wbw-your-baby-2021-alt-w31-1200x1200.jpg" },
    { week: 32, url: "https://i.ibb.co/bjKVMvSs/wbw-your-baby-2021-alt-w32-1200x1200.jpg" },
    { week: 33, url: "https://i.ibb.co/tTgTMvpg/wbw-your-baby-2021-alt-w33-1200x1200.jpg" },
    { week: 34, url: "https://i.ibb.co/5XCG3b7X/wbw-your-baby-2021-alt-w34-1200x1200.jpg" },
    { week: 35, url: "https://i.ibb.co/5XGGDJZ8/wbw-your-baby-2021-alt-w35-1200x1200.jpg" },
    { week: 36, url: "https://i.ibb.co/C39yjtqP/wbw-your-baby-2021-alt-w36-1200x1200.jpg" },
    { week: 37, url: "https://i.ibb.co/Z64CJ13q/wbw-your-baby-2021-alt-w37-1200x1200.jpg" },
    { week: 38, url: "https://i.ibb.co/5Xr8YW5k/wbw-your-baby-2021-alt-w38-1200x1200.jpg" },
    { week: 39, url: "https://i.ibb.co/XftFvx7m/wbw-your-baby-2021-alt-w39-1200x1200.jpg" },
    { week: 40, url: "https://i.ibb.co/G32w15D9/wbw-your-baby-2021-alt-w40-1200x1200.jpg" },
    { week: 41, url: "https://i.ibb.co/gF9xjt2g/wbw-your-baby-2021-alt-w41-1200x1200.jpg" },
  ];

  const fruitImage = fruitImages.find((item) => item.week === weekNumber)?.url;
  const babyImage = babyImages.find((item) => item.week === weekNumber)?.url;

  return (
    <div className="px-3 py-4 sm:px-4 lg:px-6">
      <FirstPartHaml />

      <div className="mx-auto max-w-6xl px-1 py-5 sm:px-2 lg:px-4">
        <div className="text-center">
          <h2 className="text-xl font-black text-[#f48a8a] sm:text-2xl">
            الأسبوع {weekNumber}
          </h2>

          <div className="mx-auto mt-4 flex gap-4 justify-center">
            {fruitImage ? (
              <div className="flex justify-center overflow-hidden rounded-full bg-gradient-to-br p-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:p-3">
                <img src={fruitImage} alt={`الفاكهة في الأسبوع ${weekNumber}`} className="aspect-square w-full max-w-[220px] rounded-full object-cover" />
              </div>
            ) : null}

            {babyImage ? (
              <div className="flex justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#fff8f8] to-[#fefefe] p-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:p-3">
                <img src={babyImage} alt={`الطفل في الأسبوع ${weekNumber}`} className="aspect-square w-full max-w-[220px] rounded-full object-cover" />
              </div>
            ) : null}
          </div>

          <div className="mx-auto w-full py-5 text-right">
            {renderTextBlock("حجم الجنين", weekData.babySize)}
            {renderTextBlock("ماذا يحدث في جسمي", weekData.WhappenInBody)}
            {renderTextBlock("كيف يبدو طفلي", weekData.babyLooks)}
            {renderTextBlock("اعراض الحمل", weekData.sympotyms)}
            {dynamicBlocks.map((block, index) => (
              <div key={index}>{renderTextBlock(block.title, block.text)}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}