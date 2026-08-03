import React from "react";
import { FaBookBookmark } from "react-icons/fa6";
import { BsCameraVideoFill } from "react-icons/bs";
import { FaCalendarWeek } from "react-icons/fa6";
import ServiceCard from "./ServiceCard";
export default function Service() {
  return (
    <div className=" py-5 mb-44 px-6  text-center ">

   




      <div className=" flex flex-col gap-9 md:flex-row justify-center mt-2 text-[#444444] ">
        <ServiceCard icon={<FaBookBookmark className="text-white m-auto text-3xl hover:scale-110  hover:rotate-5 transition-all" />} title="تعليم شامل" desc="مقالات مفصلة عن كل مراحل الحمل والولادة ونمو الطفل" />
        <ServiceCard icon={<BsCameraVideoFill className="text-white m-auto text-3xl hover:scale-110 hover:rotate-5 transition-all" />} title="كورسات" desc="كورسات عن الام والطفل والحنين الخ" />
        <ServiceCard icon={<FaCalendarWeek className="text-white m-auto text-3xl hover:scale-110 hover:rotate-5 transition-all" />} title="متابعة أسبوعية" desc="تحديثات أسبوعية عن تطور الجنين ونمو الطفل" />
      </div>
    </div>
  );
}
