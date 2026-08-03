import React from "react";
import PlansCard from "./PlansCard";

export default function Plans() {
  return (
    <div className="my-20">
      <h2 className="md:text-5xl text-4xl text-center px-5 font-bold flex justify-center text-[#444444] mb-7">
            اختاري الباقة المناسبة ليكي

      </h2>
        <p className="text-center opacity-65 my-4 text-lg px-5 mb-7">   ابدئي مجاناً أو احصلي على محتوى متقدم وحصري مع الباقة المميزة</p>
      <div className=" flex flex-col md:flex-row justify-center gap-14 mt-2 text-[#444444] ">
        <PlansCard
          
          planName="الخطة المميزة"
          To="للبداية وتجربة المنصة"
          cost={25}
          PayPer="شهريا"
          list={[
            "كل مميزات الباقة المجانية",
            "محتوى متقدم وحصري",
            "تتبع تفصيلي لنمو الطفل",
            "دورات تدريبية متخصصة",
            "نصائح يومية",
          ]}
        />
        <PlansCard
          planName="الخطة المجانية"
          To="للأمهات الباحثات عن المزيد"
          cost={0}
          PayPer=""
          list={["مقالات تعليمية أساسية", "متابعة أسبوعية للحمل"]}
        />
      </div>
    </div>
  );
}
