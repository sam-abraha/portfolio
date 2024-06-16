import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub } from "react-icons/fa6";
import { motion } from 'framer-motion'


export default function Home() {

  const [projects, setProject] = useState([]);
  useEffect(() => {
    fetch('/projects.json')
    .then(response => response.json())
    .then(data => setProject(data))
    .catch(error => console.log("Error fetching projects", error))
  }, [])

  const hoverVariants = {
    hover: {
      scale: 1.3,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  const renderHoverLetters = (text) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        className="inline-block"
        variants={hoverVariants}
        whileHover="hover"
      >
        {char}
      </motion.span>
    ));
  };

    return (
      <>
        <div className="mt-8 min-h-screen p-2 flex flex-col items-center bg-neutral-50">
        <header className="w-full mx-auto md:px-8 my-10">
              <div className="lowercase font-light ml-8 mb-4 mt-4 text-gray-500 text-9xl">
                <h1 className="text-sm tracking-wider text-gray-500 mb-4">
                Fullstack Projects
                </h1>
                <h1>{renderHoverLetters("Some")}</h1>
                <h2>{renderHoverLetters("Projects")}</h2>
              </div>
              <div className="flex justify-center items-center md:justify-start  space-x-4 mt-8  ml-8">
                <Link to={"https://github.com/sam-abraha"} className="flex items-center border-solid bg-transparent text-black text-lg py-4 px-8 rounded hover:bg-gray-200 shadow-md transition duration-300 ease-in-out" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="mr-2"/> Github
                </Link>
                <Link to={"mailto:samuelabrh@gmail.com"} className="flex items-center border-solid bg-transparent text-black text-lg py-4 px-8 rounded hover:bg-gray-200 shadow-md transition duration-300 ease-in-out">
                    <FaEnvelope className="mr-2"/> Email
                </Link>
            </div>
        </header>
        <div className="text-center mb-4">
          {projects.map((project, index) => (
            <section key={index} className="mb-16">
              <ProjectCard 
              id={project.id}
              videoSrc={project.videoSrc}
              title={project.title}
              description={project.description}
              techstack={project.techstack}
              github={project.github}
              /> 
            </section>
          ))}
        </div>
        </div>
      </>
    );
  }