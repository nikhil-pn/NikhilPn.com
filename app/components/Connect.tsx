"use client"; import React from "react";
import Div from "./Div";
import Link from "next/link";
import Image from "next/image";

const Connect = () => {
    return (
        <div className="w-full justify-center flex items-center flex-col bg-black  ">

            <Div className=" relative mb-10  ">
                <div className="flex text-center  justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald mb-10 ">
                    <h3 className=" text-center text-2xl  pt-6   text-zinc-300  font-display sm:text-3xl md:text-3xl mt-2  font-bold tracking-tight  md:text-center  ">
                        CONNECT WITH ME
                    </h3>
                </div>
                <div className=" text-[#f6f6f6] text-[16px] 2xl:text-[20px]  leading-[24px] 2xl:leading-[32px] text-start  mx-auto">
                    We would love for you to connect with us on our social media handles
                    and stay up-to-date with the latest news and updates.
                    Follow us on
                    <Link href="https://instagram.com/h3liosdesign" target="_blank">
                        <span className="text-blue-500 cursor-pointer"> Instagram</span>
                    </Link>{" "}
                    <Link href="https://linkedin.com/in/nikhilpn" target="_blank">
                        <span className="text-blue-500 cursor-pointer"> LinkedIn</span>
                    </Link>{" "}
                    <Link href="https://twitter.com/nikhileth" target="_blank">
                        <span className="text-blue-500 cursor-pointer"> Twitter</span>
                    </Link>{" "}
                    to join our community and be a part of the conversation.
                </div>
            </Div>

            <Link href="https://instagram.com/h3liosdesign" target="_blank">
                <Image
                    alt="connect with nikhil pn social media instagram"
                    width="1700"
                    height="800"
                    className="hover:scale-105 duration-200"
                    src="/713shots_so.webp"
                ></Image>
            </Link>

        </div>
    );
};
export default Connect;