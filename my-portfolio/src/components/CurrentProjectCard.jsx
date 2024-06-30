import React, { useState } from 'react';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ techstack, title, description}) {
  const techItems = techstack.split(',');
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 3; // Sets the playback rate to 3x speed
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl p-5 my-10 bg-transparent shadow-lg rounded-xl transition-transform transform hover:scale-105 overflow-x-auto">
    <div className="flex-1 flex-shrink-0 flex flex-col md:items-start sm:items-start lg:items-end md:mr-5 mb-5 md:mb-0" style={{ minWidth: '100px' }}>
      <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-3xl mb-2 h-64 w-64 flex flex-col text-white p-4">
        <h1 className="font-bold text-2xl text-right">
          <span className="block">Current</span>
          <span className="block">Code</span>
          <span className="block">Project</span>
        </h1>
        <p className="font-semibold text-right mt-2">Angular application to help students discover and create dorm reviews.</p>
      </div>
    </div>
    <div className="flex-1 flex-shrink-0 flex flex-col items-start" style={{ minWidth: '300px' }}>
      <p className='text-left text-sm font-semibold text-gray-700 mb-2 prose'>
        {techItems.map((tech, index) => (
          <span key={index} className="mr-2">
            {index !== techItems.length && <span>&bull;</span>}
            {tech}
          </span>
        ))}
      </p>
      <h1 className='text-4xl md:text-3xl lg:text-9xl font-bold text-left hover:ml-4 transition-all duration-500 ease-in-out transform hover:scale-110'>{title}</h1>
      <p className="text-gray-700 mt-4 text-left">{description}</p>
    </div>
  </div>
    );
}
