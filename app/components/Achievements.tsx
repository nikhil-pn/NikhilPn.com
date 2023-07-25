import React from "react";

import NumInc from "./NumInc";
import dashedCircle from "../../public/assets/dashed-circle.svg";
import Div from "./Div";
import Image from "next/image";
import { achievements } from "@/utils/data";

const Achievements = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-[15px] md:gap-[25px] 2xl:gap-[50px] py-8 md:py-16 relative  ">
      {achievements.map((item):any => (
        <Div
          key={item.id}
          className="w-full aspect-square flex justify-center items-center relative bg-[#1A1A1A] md:bg-transparent rounded-[10px] "
        >
          <Image
            width={1000}
            height={500}
            alt="dashed circle icons"
            src={dashedCircle.src}
            className="hidden md:block absolute top-0 left-0"
          ></Image>
          <div className="flex items-center text-white relative">
            {/* START */}
            <div className="flex items-center justify-center text-center flex-col gap-3 lg:gap-6">
              <div className="text-[34px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] font-light flex">
                <NumInc num={item.year} />+
              </div>
              <div
                className="text-[14px] lg:text-[18px] leading-[18px] lg:leading-[22px] text-[#AAAAAA] md:text-white"
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}
              />
            </div>
            {/* END */}
          </div>
        </Div>
      ))}
    </div>
  );
};

export default Achievements;