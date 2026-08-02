import React from "react";
import LearnHomeCard from "./LearnHomeCard";
import { TbCalendarWeekFilled } from "react-icons/tb";

export default function LearnHome() {
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-b from-[#f48a8a] to-[#f26d6d] transition-all hover:-translate-y-1">
            <TbCalendarWeekFilled className="text-3xl text-white transition-all hover:rotate-5 hover:scale-110" />
          </div>
        </div>

        <h2 className="mb-6 text-center text-3xl font-bold text-[#444444] sm:text-4xl lg:text-5xl">
          الحمل أسبوع بأسبوع
        </h2>

        <div className="mx-auto mb-8 max-w-3xl rounded-2xl bg-[#75b8b2] p-4 text-center text-white shadow-md sm:p-6">
          <p className="text-sm sm:text-base">
            يخطر ببالك الكثير من الأسئلة لما تسمعى كلمة مبرووك، أنتِ حامل. بداية من ماذا يحدث داخل جسمك وكيف ينمو طفلك والتوصيات والنصائح لكل حامل.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <LearnHomeCard
            title="الثلث الأول"
            weak="اسبوع 1-12"
            desc="أهلًا بكِ في الثلث الأول من حملك من أعراض الحمل المبكرة إلى مراحل نمو وتطور طفلك، ستجدين هنا كل ما تحتاجين إليه."
          />
          <LearnHomeCard
            title="الثلث الثاني"
            weak="اسبوع 13-27"
            desc="أنتِ الآن في الثلث الثاني من الحمل، ونأمل أن تكوني قد تجاوزتِ أسوأ الأعراض."
            coming={true}
          />
          <LearnHomeCard
            title="الثلث الثالث"
            weak="اسبوع 28-40"
            desc="أنتِ الآن في الثلث الأخير من الحمل، ولم يتبقَ على ولادتك سوى حوالي 12 أسبوعًا."
            coming={true}
          />
        </div>
      </div>
    </div>
  );
}
