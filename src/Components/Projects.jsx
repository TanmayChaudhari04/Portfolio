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
import WalletWhiz from "../assets/FinanceTracker.png";
import Movie from "../assets/Movie.png";

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
                        <ProjectCards title="Wallet Whiz"
                        content="Wallet Whiz is a personal finance tracker that enables users to log in with their Google account and manage their finances securely. Users will gain better control over their financial decisions by visualizing their spending habits through categorized charts, tracking income over time with a dynamic line chart, and reviewing all transactions in a detailed table."
                        url={WalletWhiz}
                        githubLinks="https://github.com/TanmayChaudhari04/WalletWhiz">
                        </ProjectCards>
                    </div>
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
                        <ProjectCards title="Movie Recommendation System"
                        content="Developed a movie recommendation system using the Python and Pandas and MovieLens 25M dataset, which includes millions of user ratings and reviews. The system allows users to input a movie title and receive recommendations for other movies they might enjoy."
                        url={Movie}
                        githubLinks="https://github.com/TanmayChaudhari04/Movie-Recommendation-System">
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
                    <div>
                        <ProjectCards title="Do-It"
                        content="Do-it is a simple yet powerful To-Do List application designed to help you manage your tasks with ease. Built with JavaScript, HTML, and CSS, this web app ensures that your tasks are saved even if you close the tab, providing a seamless user experience. Whether you're organizing your daily schedule or planning a long-term project, Do-it offers a user-friendly interface to keep you on track."
                        url={DoIt}
                        githubLinks="https://github.com/TanmayChaudhari04/Do-It">
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