import {Link} from "react-scroll";
import React, { useState } from 'react'
import { useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { FaTimes } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

function Nav(){
    
    useEffect(()=>{
        AOS.init()
    },[]);

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const content = <>
        <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition'>
            <ul className="text-center text-xl p-20">
                <Link spy={true} smooth={true} to="About">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
                </Link>
                <Link spy={true} smooth={true} to="Experience">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Experience</li>
                </Link>
                <Link spy={true} smooth={true} to="Projects">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Projects</li>
                </Link>
                <Link spy={true} smooth={true} to="Contact">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <>
            <nav>
                <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1" data-aos="fade-down" data-aos-duration="1000">
                    <div className="flex items-center flex-1">
                        <span className="text-3xl font-bold">Tanmay</span>
                    </div>
                    <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                        <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <Link spy={true} smooth={true} to="About">
                                <li className="hover:text-sky-500 transition border-b-2 border-slate-900 hover:border-sky-500 cursor-pointer">About</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Experience">
                                <li className="hover:text-sky-500 transition border-b-2 border-slate-900 hover:border-sky-500 cursor-pointer">Experience</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Projects">
                                <li className="hover:text-sky-500 transition border-b-2 border-slate-900 hover:border-sky-500 cursor-pointer">Projects</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Contact">
                                <li className="hover:text-sky-500 transition border-b-2 border-slate-900 hover:border-sky-500 cursor-pointer">Contact</li>
                            </Link>
                        </ul>
                        </div>
                    </div>
                    <div>
                        {click && content}
                    </div>
                    <button className="block sm:hidden transition text-3xl" onClick={handleClick}>
                        {click ? <FaTimes/> : <IoMenu/>}
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Nav;