import React from "react";
import { useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'

function Experience() {
    
    useEffect(()=>{
        AOS.init()
    },[]);

    return (
        <>
            <div id="Experience">
                <div>
                    <div>
                        <h1 data-aos="fade-right" className="text-white text-3xl ml-20 font-semibold mt-20">
                            Experience
                        </h1>
                        <hr data-aos="fade-right" className="w-80 h-1 ml-16 my-6"></hr>
                        <ol className="ml-16 relative border-s border-gray-200 dark:border-gray-700">
                            <li className="mb-10 ms-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </span>
                                <h3
                                    className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
                                    data-aos="fade-right">
                                    Tutorbot Content Curator
                                </h3>
                                <time
                                    className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                    data-aos="fade-right">
                                    January 2024
                                </time>
                                <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                    <li data-aos="fade-right">
                                        Developing content for an AI bot on various subjects like Computer Science, Math, Physics, and Economics.
                                    </li>
                                    <li data-aos="fade-right">
                                        Creating short concept videos and tips and tricks posts for various subjects to put on Inscribe.
                                    </li>
                                    <li data-aos="fade-right">
                                        Regularly practicing agile methodologies in the workplace to increase productivity.
                                    </li>
                                </ul>
                            </li>
                            <li className="mb-10 ms-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </span>
                                <h3
                                    className="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
                                    data-aos="fade-right">
                                    Teaching Assistant (Principles of Programming with C++)
                                </h3>
                                <time
                                    className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                    data-aos="fade-right">
                                    August 2023
                                </time>
                                <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                    <li data-aos="fade-right">
                                        Managed a class of 180+ students and held office hours for doubts, reviews and discussions.
                                    </li>
                                    <li data-aos="fade-right">
                                        Hosting Exam Review sessions and teaching important topics, improving student understanding and engagement.
                                    </li>
                                    <li data-aos="fade-right">
                                        Meeting with students individually to discuss in class assessments and activities.
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experience