import React from "react";
import LearnHomeCard from "./LearnHomeCard";
import { TbCalendarWeekFilled } from "react-icons/tb";
import FirstTrimester from "./../../Assets/first-trimester.svg";
import SecondTrimester from "./../../Assets/second-trimester.svg";
import ThirdTrimester from "./../../Assets/third-trimester.svg";

export default function LearnHome() {
  const cards = [
    {
      title: "الثلث الأول",
      weak: "اسبوع 1-12",
      desc: "أهلًا بكِ في الثلث الأول من حملك، من أعراض الحمل المبكرة إلى نمو طفلك وتطورك، ستجدين هنا كل ما تحتاجين إليه.",
      image: 'https://i.ibb.co/pBSTyQgz/Dont-make-her-eyes-202608032241.jpg',
      link: "/HamlPart1",
      coming: false,
    },
    {
      title: "الثلث الثاني",
      weak: "اسبوع 13-27",
      desc: "أنتِ الآن في الثلث الثاني من الحمل، ونأمل أن تكوني قد تجاوزتِ أسوأ الأعراض، وبدأتِ تلمسين التغييرات الجميلة.",
      image: 'https://i.ibb.co/C5qq7rPD/Zoom-until-face-disappear-202608032251.jpg',
      link: "/HamlPart1",
      coming: false,
    },
    {
      title: "الثلث الثالث",
      weak: "اسبوع 28-40",
      desc: "أنتِ الآن في الثلث الأخير من الحمل، ولم يتبقَ على ولادتك سوى حوالي 12 أسبوعًا، استمتعي بكل خطوة.",
      image: 'https://i.ibb.co/hxsbkJVt/Pregnant-woman-sitting-on-sofa-202608032252.jpg',
      link: "/HamlPart1",
      coming: false,
    },
  ];

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8 mb-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-b from-[#f48a8a] to-[#f26d6d] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:rotate-3">
            <TbCalendarWeekFilled className="text-3xl text-white transition-all duration-300 hover:rotate-5 hover:scale-110" />
          </div>
        </div>

        <h2 className="mb-4 text-center text-3xl font-bold text-[#444444] sm:text-4xl lg:text-5xl">
          الحمل أسبوع بأسبوع
        </h2>

        <div className="mx-auto mb-8 max-w-3xl rounded-[24px] bg-gradient-to-r from-[#75b8b2] to-[#4fa39d] p-4 text-center text-white shadow-md sm:p-6">
          <p className="text-sm leading-8 sm:text-base">
            يخطر ببالك الكثير من الأسئلة لما تسمعى كلمة مبرووك، أنتِ حامل. بداية من ماذا يحدث داخل جسمك وكيف ينمو طفلك والتوصيات والنصائح لكل حامل.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <LearnHomeCard
              key={card.title}
              title={card.title}
              weak={card.weak}
              desc={card.desc}
              image={card.image}
              link={card.link}
              coming={card.coming}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
