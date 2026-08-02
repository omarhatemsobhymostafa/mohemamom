import React from "react";
import { Link } from "react-router-dom";

export default function LearnHomeCard(props) {
  return (
    <div className="flex h-full flex-col rounded-[24px] border border-[#f4d5d5] bg-white p-6 shadow-[0_4px_15px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)]">
      <h2 className="mb-4 text-center text-2xl font-bold text-[#444444] sm:text-3xl">{props.title}</h2>
      <p className="mx-auto mb-4 rounded-full border-2 border-[#F28482] px-4 py-2 text-center text-sm font-bold text-[#F28482] sm:text-base">
        {props.weak}
      </p>
      <p className="flex-1 text-center text-base leading-8 text-[#555555]">{props.desc}</p>

      <div className="mt-6 text-center">
        {props.coming ? null : (
          <Link
            to="/HamlPart1"
            className="inline-block rounded-full bg-[#F28482] px-5 py-2.5 font-bold text-white transition-all hover:scale-105 hover:translate-y-[-2px]"
          >
            تعلمي المزيد
          </Link>
        )}
      </div>
    </div>
  );
}
