import React from "react";

export default function PlansCard({ planName, To, cost, PayPer, list }) {
  return (
    <div className="w-full sm:w-[80%] md:w-[30%] lg:w-[30%] content-center text-center bg-white border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out p-6 rounded-2xl hover:-translate-y-1">
      
      <h2 className="text-2xl font-bold text-gray-700 mb-1">{planName}</h2>
      <p className="text-gray-500 mb-3">{To}</p>

      <div className="text-4xl font-extrabold text-gray-900 mb-1">{cost}EGP</div>
      <p className="text-gray-400 text-sm mb-6">{PayPer}</p>

      <ul className="text-gray-600 text-md mb-6 space-y-1">
        {list.map((item, index) => (
          <li key={index} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>

      <button className="w-2/3 bg-[#F28482] hover:bg-[#e77371] hover:scale-105 hover:-translate-y-[2px] text-white font-semibold py-1 rounded-full transition-all duration-200">
        اختر الخطة
      </button>
    </div>
  );
}
