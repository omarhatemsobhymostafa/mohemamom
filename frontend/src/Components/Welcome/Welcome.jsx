import React from 'react';
import Logo from './../../Assets/logo.png';
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <p className=" text-center text-3xl font-bold text-[#444444] sm:text-4xl lg:text-5xl">
        انتِ قد الــ
      </p>
      <img src={Logo} alt="شعار التطبيق" className="mx-auto h-24 w-52 object-contain sm:h-52 sm:w-52 md:h-52 md:w-52" />

    <div className='mx-auto mb-8 flex w-full max-w-3xl justify-center'>
      <div className=' space-y-3 rounded-[28px] bg-[#d5fffc80] p-8 font-bold shadow-lg sm:p-6 lg:p-8'>
              <Link to={'/HamlPart1'} className='rounded-2xl bg-[#75b8b2] p-4 text-center text-white shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-xl'>الحمل اسبوع بأسبوع</Link>

      </div>
    </div>


      <div className="mx-auto mt-8 flex w-full max-w-3xl justify-center">
        <ul className="w-full space-y-3 rounded-[28px] bg-[#d5fffc] p-4 font-bold shadow-lg sm:p-6 lg:p-8" dir="rtl">
          <li className="rounded-2xl bg-[#75b8b2] p-4 text-center text-white shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
            وضوح وثقة بدل العشوائية والتوتر<br />
            ستعرفين كيف تتعاملين مع الحمل أو مع طفلك خطوة بخطوة دون إضاعة الوقت في مصادر غير موثوقة
          </li>

          <li className="rounded-2xl bg-[#75b8b2] p-4 text-center text-white shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
            طمأنينة حقيقية بدل القلق <br />
            معلومات بسيطة، دقيقة، وموثوقة تمنحك الثقة في كل قرار
          </li>

          <li className="rounded-2xl bg-[#75b8b2] p-4 text-center text-white shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
            ارتباط أقوى بطفلك <br />
            أنك ستكونين على فهم أعمق لاحتياجاته، فتُصبح علاقتكما أهدأ وأفضل
          </li>
        </ul>
      </div>
    </div>
  );
}
