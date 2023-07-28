"use client";
import React, { useState } from "react";

import Image from "next/image";
import Div from "../components/Div";
import { projects, filters } from "@/utils/data";
import { AiOutlineGithub } from "react-icons/ai"
import { CgLivePhoto } from "react-icons/cg"
import Link from "next/link";
import { it } from "node:test";

const Projects = () => {
    const [selectedTag, setSelectedTag] = useState("top");
    const [projectData, setProjectData] = useState(projects.filter((p) => p.tags.includes("top")));

    const filterHandler = (tag) => {
        setSelectedTag(tag);
        let filteredProjects = [];
        if (tag === "top") {
            filteredProjects = projects.filter((p) => p.tags.includes(tag));
        } else {
            filteredProjects = projects.filter((p) => p.tags.includes(tag));
        }
        setProjectData(filteredProjects);
    };
    return (
        <div
            id="Projects"
            className="w-full  md:py-[20px] bg-black  relative overflow-hidden"
        >
            {/* <Wrapper2> */}
            <section className="md:px-16 px-8">

                {/* SECTION HEADING START */}
                <Div className="mt-8 mb-10 relative">
                    <div className="flex text-center  justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald uppercase mb-10 text-[#f6f6f6]">
                        <h2 className=" text-center text-2xl  pt-8   text-zinc-200  font-display sm:text-6xl md:text-5xl mt-2  font-bold tracking-tight  md:text-center  ">
                            Projects
                        </h2>
                    </div>
                    <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] md:text-center text-start  mx-auto">
                        I take great pleasure in developing cutting-edge real-life
                        applications across various categories. Feel free to explore my
                        portfolio, categorized into frontend, backend, Android apps, and
                        blockchain projects. Your valuable feedback on these projects would
                        be highly appreciated.
                    </div>
                </Div>
                {/* SECTION HEADING END */}

                {/* FILTER TAGS START */}
                <Div className="flex justify-start md:justify-center gap-[10px] mb-[50px] overflow-auto">
                    {filters.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-[#252525]  py-[10px] px-[17px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] cursor-pointer whitespace-nowrap ${selectedTag === item.id ? "bg-[#f6f6f6] text-black" : ""
                                }`}
                            onClick={() => filterHandler(item.id)}
                        >
                            {item.name}
                        </div>
                    ))}
                </Div>
                {/* FILTER TAGS START */}

                {/* PROJECTS GRID START */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {projectData.map((item, index) => {
                        return (
                            <Div key={index} className="flex flex-col gap-4 ">
                                <div className="bg-black  aspect-video overflow-hidden md:hover:scale-105 md:duration-200">
                                    <Image
                                        height="800"
                                        width="1200"
                                        alt="project images"
                                        src={item.image.src}
                                        className="transition-transform hover:-translate-y-[40%]  hover:duration-1000 ease-linear"
                                    />
                                </div>
                                <div>
                                    <section className="flex justify-between px-2  items-center">

                                        <div className="text-[12px] md:text-[16px] 2xl:text-[18px] leading-[24px] 2xl:leading-[32px] hover:text-zinc-300  text-center">
                                            {item.name}
                                        </div>
                                        <div className=" flex flex-row gap-4 text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] hover:text-zinc-300  text-center">
                                            <div>
                                                {item.link && (
                                                    <Link target="_blank" href={item.link} className="flex flex-row gap-1 hover:cursor-pointer hover:scale-105">
                                                        <p className="md:text-sm text-xs text-blue-500">Live</p>
                                                        <CgLivePhoto className="text-blue-500"></CgLivePhoto>
                                                    </Link>
                                                )}
                                            </div>
                                            <div className="hover:cursor-pointer hover:scale-105">
                                                <a className="hover:text-white " href={item.github} target="_blank">
                                                    <AiOutlineGithub ></AiOutlineGithub>
                                                </a>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </Div>
                        );
                    })}
                </div>
                {/* PROJECTS GRID END */}
            </section >
            {/* </Wrapper2> */}
        </div >
    );

}

export default Projects