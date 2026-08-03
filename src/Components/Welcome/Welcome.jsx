import React from 'react';
import Logo from './../../Assets/logo.png';
import HeroIllustration from './../../Assets/hero-illustration.svg';
import { Link } from "react-router-dom";
import { FiHeart, FiStar, FiShield } from 'react-icons/fi';

export default function Welcome() {
  const highlights = [
    {
      title: 'وضوح وثقة',
      text: 'ستعرفين كيف تتعاملين مع الحمل أو مع طفلك خطوة بخطوة دون إضاعة الوقت في مصادر غير موثوقة.',
      icon: FiStar,
    },
    {
      title: 'طمأنينة حقيقية',
      text: 'معلومات بسيطة، دقيقة، وموثوقة تمنحك الثقة في كل قرار.',
      icon: FiShield,
    },
    {
      title: 'ارتباط أقوى',
      text: 'ستصبحين على فهم أعمق لاحتياجات طفلك، فتُصبح علاقتكما أهدأ وأفضل.',
      icon: FiHeart,
    },
  ];

  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[32px] border border-[#f2d7d9] bg-white/80 p-4 shadow-[0_20px_60px_rgba(117,184,178,0.14)] backdrop-blur sm:p-6 lg:flex-row lg:items-center lg:gap-10 lg:p-8">
        <div className="flex-1 text-center lg:text-right">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#fef2f2] px-3 py-1 text-sm font-semibold text-[#f28482]">
            <FiStar />
            رحلة حمل هادئة ومريحة
          </div>
          <p className="text-3xl font-black text-[#333333] sm:text-4xl lg:text-5xl">
            انتِ قد الــ
          </p>
          <img src={Logo} alt="شعار التطبيق" className="mx-auto h-24 w-52 object-contain sm:h-28 sm:w-56 lg:mx-0 lg:h-32 lg:w-64" />

          <div className="mx-auto mt-5 max-w-xl rounded-[24px] bg-gradient-to-r from-[#75b8b2] to-[#4fa39d] p-4 text-white shadow-lg lg:mx-0">
            <Link
              to="/HamlPart1"
              className="flex items-center justify-center gap-2 rounded-2xl bg-white/20 px-4 py-3 font-bold transition-all duration-300 hover:scale-[1.02] hover:bg-white/30"
            >
              <FiHeart />
              الحمل أسبوع بأسبوع
            </Link>
          </div>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-[#666666] sm:text-base lg:mx-0">
            كل ما تحتاجينه في مكان واحد: معلومات بسيطة، صور واضحة، وخطوات عملية تساعدك على متابعة حملك بثقة.
          </p>
        </div>

        <div className="flex-1">
          <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#fef2f2] via-[#fff7f1] to-[#dff8f4] p-3 shadow-inner sm:p-4">
            <img
              src={'https://i.ibb.co/qL8Gv7P6/Chat-GPT-Image-Aug-3-2026-07-19-34-PM.png'}
              alt="رسم توضيحي لحمل وطفل"
              className="w-full rounded-[24px] object-cover shadow-lg transition duration-500 hover:scale-[1.01]"
            />
            <div className="absolute bottom-5 left-4 rounded-2xl bg-white/90 px-3 py-2 text-sm font-bold text-[#4f7c78] shadow-md backdrop-blur sm:left-6 sm:px-4">
              دعم يومي، خطوة بخطوة
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-7xl">
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-[24px] border border-[#f5e4e4] bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fef2f2] text-[#f28482] transition duration-300 group-hover:scale-110">
                  <Icon className="text-xl" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#444444]">{item.title}</h3>
                <p className="text-sm leading-8 text-[#666666]">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
