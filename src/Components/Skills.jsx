import React from "react";
import { useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'

function Skills(){

    useEffect(()=>{
        AOS.init()
    },[]);

    return (
        <>
            <div id="Skills">
                <div>
                    <div>
                        <h1 data-aos="fade-right" className="text-white text-3xl ml-20 font-semibold">Skills</h1>
                        <hr data-aos="fade-right" className="w-80 h-1 ml-16 my-6"></hr>
                    </div>
                    <div className="px-16">  
                        <button class="cursor-default bg-transparent hover:bg-sky-500 text-white font-semibold hover:text-black py-2.5 px-16 ml-16 border border-sky-500 hover:border-transparent rounded" data-aos="fade-right">C++</button>
                        <button class="cursor-default bg-transparent hover:bg-sky-500 text-white font-semibold hover:text-black py-2.5 px-16 ml-16 border border-sky-500 hover:border-transparent rounded" data-aos="fade-right">Python</button>
                        <button class="cursor-default bg-transparent hover:bg-sky-500 text-white font-semibold hover:text-black py-2.5 px-16 ml-16 border border-sky-500 hover:border-transparent rounded" data-aos="fade-right">C#</button>
                        <button class="cursor-default bg-transparent hover:bg-sky-500 text-white font-semibold hover:text-black py-2.5 px-16 ml-16 border border-sky-500 hover:border-transparent rounded" data-aos="fade-right">Javascript</button>
                        <button class="cursor-default bg-transparent hover:bg-sky-500 text-white font-semibold hover:text-black py-2.5 px-16 ml-16 border border-sky-500 hover:border-transparent rounded" data-aos="fade-right">React</button>                        
                    </div>
                    <div className="px-16 pt-6">  
                        <button class="cursor-default bg-transparent hover:bg-sky-500 text-white font-semibold hover:text-black py-2.5 px-16 ml-16 border border-sky-500 hover:border-transparent rounded" data-aos="fade-right" data-aos-duration="500">SQL</button>
                        <button class="cursor-default bg-transparent hover:bg-sky-500 text-white font-semibold hover:text-black py-2.5 px-16 ml-16 border border-sky-500 hover:border-transparent rounded" data-aos="fade-right" data-aos-duration="500">Firebase</button>
                        <button class="cursor-default bg-transparent hover:bg-sky-500 text-white font-semibold hover:text-black py-2.5 px-16 ml-16 border border-sky-500 hover:border-transparent rounded" data-aos="fade-right" data-aos-duration="500">Tailwind CSS</button>
                        <button class="cursor-default bg-transparent hover:bg-sky-500 text-white font-semibold hover:text-black py-2.5 px-16 ml-16 border border-sky-500 hover:border-transparent rounded" data-aos="fade-right" data-aos-duration="500">Node.js</button>
                        <button class="cursor-default bg-transparent hover:bg-sky-500 text-white font-semibold hover:text-black py-2.5 px-16 ml-16 border border-sky-500 hover:border-transparent rounded" data-aos="fade-right" data-aos-duration="500">AWS</button>                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;