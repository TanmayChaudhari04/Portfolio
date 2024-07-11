import {Link} from "react-scroll";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import tPic from '../assets/TanmayMemoji.png';
import tResume from "../assets/Tanmay'sResume.pdf";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function About(){
    const te = useRef(null);

    useEffect(() => {
        const typed = new Typed(te.current, {
        strings: ['Tanmay Chaudhari'],
        typeSpeed: 100,
        loop: true,
        loopCount: 1,
        cursorChar: "|"
        });
        return () => {
        typed.destroy();
        };
    }, []);

    return (
        <>
            <div id="About" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
                <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                    <h1 className="text-white text-[52px] font-semibold mb-8 leading-normal">
                        Hello, My name is <span className="text-sky-500" ref={te} />
                    </h1>
                    <p>I am a passionate Software Engineer.</p>
                    <div className="flex mt-8 gap-2">
                        <div className="flex items-center justify-center">
                            <div className="flex space-x-4">
                                <button className="text-black rounded bg-sky-500 py-2 px-4 hover:bg-sky-400 font-bold border-b-4 border-blue-700 hover:border-sky-500">
                                    <a href={tResume} target={"_blank"}>Résumé</a>
                                </button>
                                <a href="https://www.linkedin.com/in/tanmaychaudhari04/" target={"_blank"} className="text-sky-400 hover:text-sky-500 rounded-full p-2">
                                    <FaLinkedinIn className="text-[28px]"></FaLinkedinIn>
                                </a>
                                <a href="https://github.com/TanmayChaudhari04" target={"_blank"} className="text-sky-400 hover:text-sky-500 rounded-full p-2">
                                    <AiFillGithub className="text-[28px]"></AiFillGithub>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={tPic} width={340} height={340} className="rounded-full"></img>
            </div>
        </>
    );
}

export default About