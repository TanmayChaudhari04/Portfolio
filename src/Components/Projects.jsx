import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FaceRecognition from "../assets/FaceRecognition.png";
import NewsBite from "../assets/NewsBite.png";
import WeatherNow from "../assets/W.png";
import DoIt from "../assets/Do.png";
import WordFreq from "../assets/WordFreq.png";
import ProceduralIsland from "../assets/Island.png";
import ProjectCards from "./ProjectCards";
import WalletWhiz from "../assets/WalletWhiz.png";
import Movie from "../assets/Movie.png";

function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="Projects">
      <div>
        <h1
          data-aos="fade-right"
          className="text-white text-3xl ml-20 font-semibold mt-20"
        >
          Projects
        </h1>
        <hr data-aos="fade-right" className="w-80 h-1 ml-16 my-6" />
      </div>

      {/* Main grid - evenly spaced, same height cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-16 items-stretch">
        <ProjectCards
          className="h-full"
          title="Face Recognition using Edge Computing"
          content="Developed a distributed facial recognition system leveraging Python, AWS IoT Greengrass, and Lambda to enable fast, edge-based face detection with reduced cloud latency. Integrated MTCNN and FaceNet models with Flask APIs and AWS services for real-time recognition across video streams, achieving over 95% accuracy and supporting scalable, multi-device deployments."
          url={FaceRecognition}
          githubLinks="#"
        />

        <ProjectCards
          className="h-full"
          title="NewsBite - Personalized News Summarizer"
          content="Built a personalized news summarizer app in SwiftUI that customizes feeds based on user-selected topics or regions. Leveraged Firebase for authentication and storage, integrated summarization models, and added a map-based view for location-driven discovery."
          url={NewsBite}
          githubLinks="#"
        />

        <ProjectCards
          className="h-full"
          title="Wallet Whiz"
          content="Wallet Whiz is a personal finance tracker that enables users to log in with their Google account and manage their finances securely. Users will gain better control over their financial decisions by visualizing their spending habits through categorized charts, tracking income over time with a dynamic line chart, and reviewing all transactions in a detailed table."
          url={WalletWhiz}
          githubLinks="https://github.com/TanmayChaudhari04/WalletWhiz"
        />

        <ProjectCards
          className="h-full"
          title="Movie Recommendation System"
          content="Developed a movie recommendation system using the Python and Pandas and MovieLens 25M dataset, which includes millions of user ratings and reviews. The system allows users to input a movie title and receive recommendations for other movies they might enjoy."
          url={Movie}
          githubLinks="https://github.com/TanmayChaudhari04/Movie-Recommendation-System"
        />

        <ProjectCards
          className="h-full"
          title="Procedural Island Generator"
          content="Developed particle roll algorithm in C++ to create an island/continent. Implemented a drop zone feature within the program, allowing for easy placement and population of particles, leading to efficient and user-friendly interaction with the generated islands."
          url={ProceduralIsland}
          githubLinks="https://github.com/TanmayChaudhari04/Procedural-Island-Generator"
        />

        <ProjectCards
          className="h-full"
          title="Word Frequency Analysis"
          content="Developed and implemented a text parsing algorithm in C++ by using binary search tree to analyze a large text file, producing an exact word frequency count for each word in the file."
          url={WordFreq}
          githubLinks="https://github.com/TanmayChaudhari04/Word-Frequency-Analysis"
        />

        <ProjectCards
          className="h-full"
          title="Do-It"
          content="Do-it is a simple yet powerful To-Do List application designed to help you manage your tasks with ease. Built with JavaScript, HTML, and CSS, this web app ensures that your tasks are saved even if you close the tab, providing a seamless user experience. Whether you're organizing your daily schedule or planning a long-term project, Do-it offers a user-friendly interface to keep you on track."
          url={DoIt}
          githubLinks="https://github.com/TanmayChaudhari04/Do-It"
        />

        <ProjectCards
          className="h-full"
          title="WeatherNow"
          content="Developed a web application using JavaScript, HTML, and CSS to provide real-time weather updates for all cities around the world."
          url={WeatherNow}
          githubLinks="https://github.com/TanmayChaudhari04/WeatherNow"
        />
      </div>
    </div>
  );
}

export default Projects;
