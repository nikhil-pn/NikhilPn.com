import React from "react";
import Div from "./Div";
import Form from "./Form";

const Contact = () => {
    return (
        <div
            id="Contact"
            className="w-full pb-16 bg-[#F2F2F2] "
        >

            {/* SECTION HEADING START */}
            <Div className="mb-10 relative">
                <div className="flex text-center  justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald mb-10 text-[#f6f6f6]">
                    <h3 className=" text-center text-2xl  pt-8   text-zinc-700  font-display sm:text-6xl md:text-7xl mt-2  font-bold tracking-tight  md:text-center  ">
                        LETS TALK
                    </h3>
                </div>
                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center max-w-[1200px] mx-auto">
                    We love hearing from you! If you have any questions or
                    would like to place a custom order&#44; please don&#39;t hesitate to get in
                    touch with us. You can drop us an enquiry or message using our
                    contact form&#44; and we&#39;ll get back to you as soon as possible. We are
                    committed to providing excellent customer service and look forward
                    to the opportunity to serve you!
                </div>
            </Div>
            {/* SECTION HEADING END */}
            <Form></Form>

        </div>
    );
};

export default Contact;