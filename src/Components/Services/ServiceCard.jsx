import React from "react";
export default function ServiceCard(props) {
  return (
    <div className=" items-center gap-3 md:px-16 px-0 border-b-[#F28482] border-4 ">
      <div className=" flex-col md:flex-row items-center gap-3">
        <div className=" h-16 w-16 rounded-xl m-auto mb-3 content-center bg-gradient-to-b from-[#f48a8a] to-[#f26d6d] hover:translate-y-[-3px] transition-all">
            {props.icon}
        </div>

        <h2 className="text-4xl ">{props.title}</h2>
      </div>
      <p className="my-2">  {props.desc} </p>
    </div>
  );
}
