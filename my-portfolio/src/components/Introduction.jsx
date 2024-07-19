import React from 'react';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function Introduction() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-primary">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={textVariants}
        className="text-6xl font-bold bg-gradient-to-r from-gray-700 via-dimgrey to-gray-900 bg-clip-text text-transparent"
      >
        Hi, I'm Samuel.
      </motion.h1>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={textVariants}
        className="mt-8 text-lg text-gray-900 flex items-center"
      >
        <div className="space-x-2 flex font-medium text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        <p>Frankfurt, Germany</p>
        </div>
      </motion.p>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={textVariants}
        className="mt-4 text-center text-gray-700 mb-0  max-w-xl"
      >
        <p>I'm currently finishing my bachelor in computer science, with main emphasis on programming and software development. </p>
      </motion.p>
    </div>
  );
}
