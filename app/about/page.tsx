"use client"
import Link from "next/link";
import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Image from "next/image";
import Div from "../components/Div";
import CallToAction from "../components/CallToAction";
import Skills from "../components/Skills";
import Ntec from "../components/Ntec";
import Connect from "../components/Connect";



const About = () => {
    return (
        <div
            id="About"
            className="w-full  md:py-[20px] bg-black"
        >
            <section className="px-8 md:px-16">

                <Div className=" mt-8  ">
                    <div className="flex text-center  justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald mb-10 text-[#f6f6f6]">
                        <h2 className=" text-center text-2xl  pt-8   text-zinc-200  font-display sm:text-6xl md:text-5xl mt-2  font-bold tracking-tight  md:text-center  ">
                            THE VOYAGE OF NIKHIL PN
                        </h2>
                    </div>
                    <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-# text-center mx-auto ">
                        <p className="mb-2">
                            Hello there! I am an enthusiastic FullStack Blockchain developer based in Kochi, India. My forte lies in developing robust web and Android applications, along with creating smart contracts on the Solana blockchain. My proficiency extends to several programming languages, including JavaScript, TypeScript, Python, and Rust.
                        </p>

                    </div>
                    <div className=" pt-6">

                        <CallToAction
                            icon={<AiOutlineCloudDownload />}
                            action={() => window.open("../download/nikhilpncv.pdf")}
                        ></CallToAction>
                    </div>
                </Div>

                <Skills></Skills>
                <Ntec></Ntec>
                <Connect></Connect>
            </section>
        </div>
    );
};

export default About;