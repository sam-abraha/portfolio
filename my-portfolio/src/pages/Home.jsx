import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub } from "react-icons/fa6";
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Footer from "../components/Footer";
import CurrentProjectCard from "../components/CurrentProjectCard";
import Introduction from "../components/Introduction";


export default function Home() {

  const [projects, setProject] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/projects.json')
    .then(response => response.json())
    .then(data => {
      setProject(data);
      setLoading(false);
    })
    .catch(error =>  {
      console.log("Error fetching projects", error);
      setLoading(false);
    })
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
      <div className="text-center bg-primary min-h-screen">
  {!loading ? (
    <>
      <Introduction />
      <section className="mb-16">
        <CurrentProjectCard
          title="Dorms"
          description="Dorms will be a web application designed to help students share and discover reviews about their dorms. It is the current project I'm tackling on, so development is still in progress."
          techstack={"angular, nestjs, prisma, postgres, typescript"}
        />
      </section>
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
    </>
  ) : (
    <div className='flex justify-center items-center min-h-screen'>
      <FontAwesomeIcon icon={faSpinner} spin size='3x'/>
    </div>
  )}
  <Footer/>
</div>

      </>
    );
  }