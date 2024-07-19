import React, { useState } from 'react';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ videoSrc, techstack, title, description, id, github }) {
  const techItems = techstack.split(',');
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 3; // Sets the playback rate to 3x speed
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full max-w-4xl p-5 mt-24 mb-0  mx-auto font-sans bg-projectcard hover:bg-primary shadow-lg rounded-xl transition-transform transform hover:scale-105 overflow-x-auto" style={{ minHeight: '400px' }}>
      <div className="flex-1 flex-shrink-0 flex flex-col mt-12 items-start  md:mr-5 mb-5 md:mb-0" style={{ minWidth: '250px' }}>
        <Link to={`/casestudy/${id}`}>
          <video
            ref={videoRef}
            className="w-full h-auto object-cover rounded-3xl mb-2"
            style={{ minHeight: '200px' }}
            loop
            autoPlay
            muted
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </Link>
      </div>
      <div className="flex-1 flex-shrink-0 flex flex-col items-start mt-12" style={{ minWidth: '300px' }}>
        <p className='text-left text-sm font-semibold text-gray-700 mb-2 prose'>
          {techItems.map((tech, index) => (
            <span key={index} className="mr-2">
              {index !== techItems.length && <span>&bull;</span>}
              {tech}
            </span>
          ))}
        </p>
        <Link to={`/casestudy/${id}`}>
          <h1 className='text-4xl md:text-3xl lg:text-8xl font-bold text-left hover:ml-4 transition-all duration-500 ease-in-out transform hover:scale-110'>{title}</h1>
        </Link>
        <p className="text-gray-700 mt-4 text-left">{description}</p>
        <div className="flex space-x-4 mt-8">
          <Link to={`https://github.com/sam-abraha/${github}`} className="border-solid bg-white text-black text-lg py-4 px-8 rounded-lg hover:bg-gray-200 shadow-md transition duration-300 ease-in-out" target="_blank" rel="noopener noreferrer">Github</Link>
          <Link to={`/casestudy/${id}`} className="border-solid bg-white text-black text-lg py-4 px-8 rounded-lg hover:bg-gray-200 shadow-md transition duration-300 ease-in-out">Case Study</Link>
        </div>
      </div>
    </div>
  );
}
