import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

// import SkillIcon from "./SkillIcon";
// import Portfolio from "./Portfolio";
import Div from "./Div";
import SkillIcon from "./SkillIcon";

// IMAGES
import sk1 from "../../public/assets/nextjs-icon.png"
import sk2 from "../../public/assets/css_tailwind_logo_icon_214735.png";
import sk3 from "../../public/assets/react.png";
import sk7 from "../../public/assets/redux.png";
import sk4 from "../../public/assets/node.png";
import sk5 from "../../public/assets/ex.png";
import sk6 from "../../public/assets/sql.png";
import sk8 from "../../public/assets/mongo.png";
import sk9 from "../../public/assets/html.png";
import sk10 from "../../public/assets/css1.png";
import sk12 from "../../public/assets/js2.png";
import sk13 from "../../public/assets/typescript.png";
import sk14 from "../../public/assets/python.png";
import sk15 from "../../public/assets/git.png";
import sk16 from "../../public/assets/android.png";
import sk11 from "../../public/assets/solidity.png";
import sk17 from "../../public/assets/solana.png";
import sk18 from "../../public/assets/rust.jpg";


const Skills = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
    const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
    return (
        <div id="Skills" className="w-full  bg-black  relative overflow-hidden">

            {/* SKILL ICONS START */}
            <Div className=" mb-10 relative">
                <div className="flex text-center  justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald mb-10 text-[#f6f6f6]">
                    <h3 className=" text-center text-2xl  pt-6   text-zinc-300  font-display sm:text-3xl md:text-3xl mt-2  font-bold tracking-tight  md:text-center  ">
                        {/* My Arsenals */}
                        MY ARSENALS
                    </h3>
                </div>
                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-# text-start  mx-auto">
                    <p>
                        My main area of expertise centers around the MERN stack, and I have a special fondness for Next.js and Tailwind CSS. Additionally, I am actively engaged in rapidly learning and expanding my knowledge in the blockchain domain, exploring technologies such as Solana, Rust, and Ethereum.
                    </p>
                </div>
            </Div>
            <Div className="grid grid-cols-4 gap-3 md:grid-cols-6 lg:grid-cols-8 relative pb-2">
                <SkillIcon path={sk1} />
                <SkillIcon path={sk2} />
                <SkillIcon path={sk3} />
                <SkillIcon path={sk7} />
                <SkillIcon path={sk4} />
                <SkillIcon path={sk5} />
                <SkillIcon path={sk6} />
                <SkillIcon path={sk8} />
                <SkillIcon path={sk9} />
                <SkillIcon path={sk10} />
                <SkillIcon path={sk12} />
                <SkillIcon path={sk13} />
                <SkillIcon path={sk14} />
                <SkillIcon path={sk15} />
                <SkillIcon path={sk16} />
                {/* <SkillIcon path={sk11} /> */}
                <SkillIcon path={sk17} />
                <SkillIcon path={sk18} />
            </Div>
            {/* SKILL ICONS END */}


        </div>
    );
};

export default Skills;