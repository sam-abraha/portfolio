import React from 'react';
import { FaJava, FaGitAlt, FaReact, FaNode } from 'react-icons/fa';
import { DiPostgresql } from 'react-icons/di';
import { SiTypescript, SiMicrosoftexcel, SiMicrosoftpowerpoint, SiPostman, SiPostgresql} from 'react-icons/si'
import { motion } from 'framer-motion';

const TailwindIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.026 6.077c-2.535 0-3.826 1.145-3.872 3.433 1.282-1.145 2.426-1.284 3.433-.414.53.45.887 1.095 1.322 1.704.725 1.018 1.516 2.127 3.153 2.127 2.534 0 3.825-1.145 3.872-3.433-1.283 1.145-2.427 1.283-3.433.413-.53-.45-.887-1.095-1.323-1.704-.724-1.017-1.516-2.126-3.152-2.126zm-6.075 6.074c-2.534 0-3.825 1.145-3.872 3.433 1.283-1.145 2.427-1.283 3.433-.413.53.45.888 1.095 1.323 1.704.724 1.018 1.516 2.127 3.152 2.127 2.535 0 3.826-1.145 3.872-3.433-1.283 1.145-2.426 1.283-3.433.413-.53-.45-.887-1.095-1.322-1.704-.725-1.017-1.516-2.126-3.153-2.126z" fill="#38B2AC"/>
  </svg>
);

const icons = [
  <FaJava className="text-6xl text-blue-700" />,
  <SiTypescript className="text-6xl text-blue-700" />,
  <FaReact className="text-6xl text-blue-500" />,
  <FaNode className="text-6xl text-green-500" />,
  <TailwindIcon className="text-6xl" />,
  <FaGitAlt className="text-6xl text-orange-500" />,
  <DiPostgresql className="text-6xl text-blue-800" />,
];

export default function AboutMe() {
  return (
    <div className="bg-primary min-h-full flex flex-col items-center mt-10 py-16">
      <div className="prose lg:prose-gray mx-auto p-4 text-gray-700">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r py-2 from-pink-500 via-yellow-500 to-red-500 bg-clip-text text-transparent">Hi again, I'm Samuel.</h1>
          <p className="text-lg leading-relaxed text-justify">
            I am a computer science student based near Frankfurt, excited about solving problems and constantly seeking new knowledge,
            particularly in software engineering, software design and cloud. My goal is to enhance my skills and broaden my knowledge in these areas.
            When I'm not coding, I enjoy playing basketball and playing musical instruments passionately.
          </p>
        </div>
        <div className="mb-8">
          <h1 className="text-xl font-bold mb-6 text-gray-900">Skills</h1>
          <ul className="list-disc pl-5 space-y-4">
            <li className="text-lg flex justify-between items-center">
              <span className="font-semibold">Programming languages: Java, Type/JavaScript</span>
              <span className="flex items-center">
                <FaJava className="ml-2 text-orange-700" />
                <SiTypescript className="ml-2 text-blue-700" />
              </span>
            </li>
            <li className="flex justify-between items-center text-lg">
              <span className="font-semibold">Frameworks: React, Express</span>
              <span className="flex items-center">
                <FaReact className="ml-auto text-blue-500" />
                <FaNode className="ml-2 text-green-500" />
                <TailwindIcon className="ml-2" />
              </span>
            </li>
            <li className="flex justify-between items-center text-lg">
              <span className="font-semibold">Tools: Git, Postman, Excel, PowerPoint</span>
              <span className="flex items-center">
                <FaGitAlt className="ml-2 text-orange-500" />
                <SiPostman className="ml-2 text-orange-500" />
                <SiMicrosoftexcel className="ml-2 text-green-600" />
                <SiMicrosoftpowerpoint className="ml-2 text-red-600" />
              </span>
            </li>
            <li className="flex justify-between items-center text-lg">
              <span className="font-semibold">Databases: PostgreSQL</span>
              <span className="flex items-center">
                <SiPostgresql className="ml-2 text-blue-800" />
              </span>
            </li>
          </ul>
        </div>
        <div className="relative overflow-hidden mt-6 h-20">
            <motion.div
              className="flex space-x-6"
              animate={{ x: ['0%', '-100%'] }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            >
              {icons.map((icon, index) => (
                <div key={index} className="flex-none">
                  {icon}
                </div>
              ))}
              {icons.map((icon, index) => (
                <div key={index + icons.length} className="flex-none">
                  {icon}
                </div>
              ))}
            </motion.div>
          </div>
        <div>
          <h1 className="text-xl font-bold mb-6 text-gray-900">Education</h1>
          <ul className="list-disc pl-5 space-y-4">
            <li className="text-lg">Computer Science, Frankfurt University of Applied Science</li>
          </ul>
        </div>
      </div>
    </div>
  );
}