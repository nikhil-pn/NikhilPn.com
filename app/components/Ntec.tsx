import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Div from "./Div";


const Ntec = () => {
    const videoRef = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        const videoElement: any = videoRef.current;

        const handleVideoClick = () => {
            if (videoElement.paused) {
                videoElement.muted = false; // Unmute the video
                videoElement.play();
            } else {
                videoElement.pause();
                videoElement.currentTime = 0; // Reset the video to the beginning
            }
        };

        const handleMouseEnter = () => {
            if (!videoElement.paused) {
                videoElement.pause();
                videoElement.currentTime = 0; // Reset the video to the beginning
            }
        };

        videoElement.addEventListener('click', handleVideoClick);
        videoElement.addEventListener('mouseleave', handleMouseEnter);

        return () => {
            videoElement.removeEventListener('click', handleVideoClick);
            videoElement.removeEventListener('mouseleave', handleMouseEnter);
        };
    }, []);

    return (
        <div
            id="contact"
            className="w-full  bg-black  relative overflow-hidden"
        >

            <Div className="">
                <div className="flex text-center  justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald mb-10 text-[#f6f6f6]">
                    <h3 className=" text-center text-2xl  pt-6   text-zinc-300  font-display sm:text-3xl md:text-3xl mt-2  font-bold tracking-tight  md:text-center  ">
                        PART OF THE JOURNEY IS THE END
                    </h3>
                </div>
                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-# text-start  mx-auto ">
                    <p>
                        It is with heavy hearts that we announce the closure of our
                        YouTube channel & Affiliate services, Ntec Phone, on June 10,
                        2020. We are deeply grateful for the overwhelming support and love
                        that our community has shown us over the years. It has been an
                        incredible journey, and we could not have done it without you.
                        Thank you for being a part of the Ntec Phone family, and we hope
                        that our content has brought value to your shopping experience.
                    </p>
                </div>
            </Div>

            <section className="flex justify-center items-center w-full py-4">
                <div className="cursor-pointer bg w-full">
                    <div className=" md:w-[500px] w-full bg-black mx-auto hover:scale-105 duration-200">
                        <motion.video
                            ref={videoRef}
                            loop

                            playsInline
                            animate={controls}
                        >
                            <source src="/ntecend.mp4" type="video/mp4" />
                        </motion.video>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Ntec;