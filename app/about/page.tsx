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
                    <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-# text-start mx-auto ">
                        <p className="mb-2">
                            {/* I&#34;m Nikhil Pn, a Fullstack BlockChain developer based in Kochi, India. With a
                            passion for Technology and Entrepreneurship! In 2017, I
                            established a prominent brand on YouTube called &quot;Ntec Phones&quot;
                            which boasts an impressive subscriber base of over 32,000 and an
                            astounding total of 6 million plus views.Through this platform, I
                            have leveraged my expertise and knowledge in smartphones to engage
                            with a diverse audience. */}

                            add info about me only skip ntec
                        </p>
                        {/* <p className="mb-2">
                            I have guided individuals in selecting top-notch smartphones and
                            established partnerships with renowned sponsors like Xiaomi,
                            Alibaba, and Gearbest.com to offer these products through my
                            platform. Additionally, I have ventured into affiliate marketing
                            on Flipkart and Amazon to enhance revenue generation other than
                            Youtube ad revenue.
                        </p> */}
                        {/* <p>
                            I have guided individuals in selecting top-notch smartphones and
                            established partnerships with renowned sponsors like Xiaomi,
                            Alibaba, and Gearbest.com to offer these products through my
                            platform. Additionally, I have ventured into affiliate marketing
                            on Flipkart and Amazon to enhance revenue generation other than
                            Youtube ad revenue.
                        </p> */}
                    </div>
                    <div className="px-8 pt-6">

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