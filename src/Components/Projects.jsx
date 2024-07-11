import React from "react";
import { useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import tPic from '../assets/sample.jpg';
import WeatherNow from '../assets/WeatherNow.png';
import DoIt from '../assets/DoIt.png';
import WordFreq from '../assets/WordFreq.png';
import ProceduralIsland from '../assets/Island.png';
import ProjectCards from "./ProjectCards";

function Projects(){
    
    useEffect(()=>{
        AOS.init()
      },[]);
    
    return (
        <>
        <div id="Projects">
            <div>
                <div>
                    <h1 data-aos="fade-right" className="text-white text-3xl ml-20 font-semibold mt-20">Projects</h1>
                    <hr data-aos="fade-right" className="w-80 h-1 ml-16 my-6"></hr>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-16">
                <div className="grid gap-4">
                    <div>
                        <ProjectCards title="WeatherNow"
                        content="Developed a web application using JavaScript, HTML, and CSS to provide real-time weather updates for all cities around the world."
                        url={WeatherNow}
                        githubLinks="https://github.com/TanmayChaudhari04/WeatherNow">
                        </ProjectCards>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <ProjectCards title="Do-It"
                        content="Developed a To-Do List web application using JavaScript, HTML, and CSS that helps you manage your task with ease and it also stores your tasks."
                        url={DoIt}
                        githubLinks="https://github.com/TanmayChaudhari04/Do-It">
                        </ProjectCards>
                    </div>
                    <div>
                        <ProjectCards title="Procedural Island Generator"
                        content="Developed particle roll algorithm in C++ to create an island/continent. Implemented a drop zone feature within the program, allowing for easy placement and population of particles, leading to efficient and user-friendly interaction with the generated islands."
                        url={ProceduralIsland}
                        githubLinks="https://github.com/TanmayChaudhari04/Procedural-Island-Generator">
                        </ProjectCards>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <ProjectCards title="Word Frequency Analysis"
                        content="Developed and implemented a text parsing algorithm in C++ by using binary search tree to analyze a large text file, producing an exact word frequency count for each word in the file."
                        url={WordFreq}
                        githubLinks="https://github.com/TanmayChaudhari04/Word-Frequency-Analysis">
                        </ProjectCards>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default Projects