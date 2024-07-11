import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'

function Contact(){

    useEffect(()=>{
        AOS.init()
    },[]);

    return (
        <>
            <div id="Contact">
            <div>
                <div data-aos="fade-right">
                    <h1 className="text-white text-3xl ml-20 font-semibold mt-20">Contact</h1>
                    <hr className="w-80 h-1 ml-16 my-6"></hr>
                </div>
                <div className="flex mt-6 gap-2 ml-16">
                        <div className="flex items-center justify-center">
                            <div className="flex space-x-4">
                                <a href="mailto:tanmayschaudhari@gmail.com" target={"_blank"} className="text-sky-400 hover:text-sky-500 rounded-full p-2">
                                    <TbMail className="text-[36px]"></TbMail>
                                </a>
                                <a href="https://www.linkedin.com/in/tanmaychaudhari04/" target={"_blank"} className="text-sky-400 hover:text-sky-500 rounded-full p-2">
                                    <FaLinkedinIn className="text-[36px]"></FaLinkedinIn>
                                </a>
                                <a href="https://github.com/TanmayChaudhari04" target={"_blank"} className="text-sky-400 hover:text-sky-500 rounded-full p-2 mb-6">
                                    <AiFillGithub className="text-[36px]"></AiFillGithub>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact