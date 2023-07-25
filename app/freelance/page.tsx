"use client"
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import Div from '../components/Div';
import Achievements from '../components/Achievements';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Freelance = () => {
    return (
        <>
            <div
                id="hireme"
                className="w-full md:py-[20px] bg-black"
            >
                <section className="px-4 md:px-16">

                    <Div className="my-8 relative">
                        <div className="flex text-center  justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald mb-10 text-[#f6f6f6]">
                            <h2 className=" text-center text-2xl  pt-8   text-zinc-200  font-display sm:text-6xl md:text-5xl mt-2  font-bold tracking-tight  md:text-center  ">
                                HIRE ME
                            </h2>
                        </div>
                        <div className="text-[16px] pb-8 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-# text-center mx-auto ">
                            <p>
                                In 2019&#44; I ventured into freelancing&#44; exploring new
                                opportunities and broadening my horizons. If you&#39;re interested in
                                hiring me&#44; please visit my{" "}
                                <Link href="https://www.fiverr.com/h3liosdesign" target="_blank">
                                    <span className="font-semibold text-green-300  cursor-pointer">
                                        Fiverr.com
                                    </span>
                                </Link>{" "}
                                profile&#44; where you&#44;ll find a diverse range of high-quality
                                services tailored to your needs. Whether it&#39;s software
                                development or graphic design, I provide comprehensive solutions
                                for your satisfaction. Feel free to discuss custom orders or
                                unique projects with me. Let&#39;s collaborate and bring your
                                ideas to life&#44; creating something truly remarkable together.
                            </p>
                        </div>
                        <Link target="_blank" href="https://www.h3lios.in">
                            <Image
                                width="1400"
                                height="800"
                                alt="h3liosdesign fiverr image "
                                className="hover:scale-105 duration-200"
                                src="/533shots_so.webp"
                            ></Image>
                        </Link>
                        <Achievements></Achievements>
                        <Testimonials></Testimonials>
                    </Div>

                </section>
            </div>
            <Contact></Contact>
        </>
    )
}

export default Freelance