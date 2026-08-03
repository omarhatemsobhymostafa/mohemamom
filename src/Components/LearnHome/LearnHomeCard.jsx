import React from "react";
import { Link } from "react-router-dom";

export default function LearnHomeCard(props) {
  return (
    <div
      className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#f4d5d5] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
      style={{ animationDelay: `${props.index * 120}ms` }}
    >
      <img
        src={props.image}
        alt={props.title}
        className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h2 className="mb-3 text-center text-2xl font-bold text-[#444444] sm:text-3xl">{props.title}</h2>
        <p className="mx-auto mb-4 rounded-full border-2 border-[#F28482] px-4 py-2 text-center text-sm font-bold text-[#F28482] sm:text-base">
          {props.weak}
        </p>
        <p className="flex-1 text-center text-sm leading-8 text-[#555555] sm:text-base">{props.desc}</p>

        <div className="mt-6 text-center">
          {props.coming ? (
            <span className="inline-flex items-center rounded-full bg-[#fef2f2] px-4 py-2 text-sm font-bold text-[#f28482]">
              قريبًا
            </span>
          ) : (
            <Link
              to={props.link || "/HamlPart1"}
              className="inline-block rounded-full bg-[#F28482] px-5 py-2.5 font-bold text-white transition-all duration-300 hover:scale-105 hover:translate-y-[-2px]"
            >
              تعلمي المزيد
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
