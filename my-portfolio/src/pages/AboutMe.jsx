import React from 'react';
import { FaJava, FaJs, FaPython, FaGitAlt, FaReact, FaNode, FaFileExcel, FaFilePowerpoint, FaGit } from 'react-icons/fa';
import { DiPostgresql, DiMongodb } from 'react-icons/di';

const TailwindIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.026 6.077c-2.535 0-3.826 1.145-3.872 3.433 1.282-1.145 2.426-1.284 3.433-.414.53.45.887 1.095 1.322 1.704.725 1.018 1.516 2.127 3.153 2.127 2.534 0 3.825-1.145 3.872-3.433-1.283 1.145-2.427 1.283-3.433.413-.53-.45-.887-1.095-1.323-1.704-.724-1.017-1.516-2.126-3.152-2.126zm-6.075 6.074c-2.534 0-3.825 1.145-3.872 3.433 1.283-1.145 2.427-1.283 3.433-.413.53.45.888 1.095 1.323 1.704.724 1.018 1.516 2.127 3.152 2.127 2.535 0 3.826-1.145 3.872-3.433-1.283 1.145-2.426 1.283-3.433.413-.53-.45-.887-1.095-1.322-1.704-.725-1.017-1.516-2.126-3.153-2.126z" fill="#38B2AC"/>
  </svg>
);

export default function AboutMe() {
  return (
    <div className="container mx-auto mt-20 p-4">
      <div className="max-w-3xl mx-auto p-8 border border-transparent rounded-lg shadow-xl mb-8 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
        <h1 className="text-4xl font-extrabold mb-6 text-center">About Me</h1>
        <p className="text-lg leading-relaxed">
          I am a computer science student based near Frankfurt, passionate about solving problems and constantly seeking new knowledge,
          particularly in software engineering, software design and cloud. My goal is to enhance my skills and broaden my knowledge in these areas.
          When I'm not coding, I enjoy playing basketball and playing musical instruments.
        </p>
      </div>
      <div className="max-w-3xl mx-auto p-8 border border-transparent rounded-lg text-gray-700 shadow-xl mb-8 bg-white">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Skills</h1>
        <ul className="list-disc pl-5 space-y-4">
          <li className="text-lg flex justify-between items-center">
            <span className="font-semibold">Programming languages: Java, JavaScript, Python</span>
            <span className="flex items-center">
              <FaJava className="ml-2 text-blue-700" />
              <FaJs className="ml-2 text-yellow-300" />
              <FaPython className="ml-2 text-blue-500" />
            </span>
          </li>
          <li className="text-lg flex justify-between items-center">
            <span className="font-semibold">Frameworks / Libraries: React, Express</span>
            <span className="flex items-center">
              <FaReact className="ml-2 text-blue-500" />
              <FaNode className="ml-2 text-green-500" />
              <TailwindIcon className="ml-2" />
            </span>
          </li>
          <li className="text-lg flex justify-between items-center">
            <span className="font-semibold">Tools: Git, Excel, PowerPoint</span>
            <span className="flex items-center">
              <FaGitAlt className="ml-2 text-orange-500" />
              <FaFileExcel className="ml-2 text-green-600" />
              <FaFilePowerpoint className="ml-2 text-red-600" />
            </span>
          </li>
          <li className="text-lg flex justify-between items-center">
            <span className="font-semibold">Databases: MongoDB, PostgreSQL</span>
            <span className="flex items-center">
              <DiMongodb className="ml-2 text-green-700" />
              <DiPostgresql className="ml-2 text-blue-800" />
            </span>
          </li>
          <li className="text-lg flex justify-between items-center">
            <span className="font-semibold">Languages: German, English, Tigrinya</span>
          </li>
        </ul>
      </div>
      <div className="max-w-3xl mx-auto p-8 border border-transparent rounded-lg text-gray-700 shadow-xl bg-white">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Education</h1>
        <ul className="list-disc pl-5 space-y-4">
          <li className="text-lg">Computer Science, Frankfurt University of Applied Science</li>
        </ul>
      </div>
    </div>
  );
}
