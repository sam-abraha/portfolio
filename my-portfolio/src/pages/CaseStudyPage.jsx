// src/pages/CaseStudyPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CaseStudyTemplate from '../components/CaseStudyTemplate';
import { useSwipeable } from 'react-swipeable';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function CaseStudyPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState(null);
  const [projects, setProjects] = useState([]);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        const project = data.find(proj => proj.id === id);
        setCaseStudy(project);
        setDirection(null);
      })
      .catch(error => console.log("Error fetching projects", error));
  }, [id]);

  const findNextProject = (currentId) => {
    const currentIndex = projects.findIndex(proj => proj.id === currentId);
    return projects[(currentIndex + 1) % projects.length];
  };

  const findPrevProject = (currentId) => {
    const currentIndex = projects.findIndex(proj => proj.id === currentId);
    return projects[(currentIndex - 1 + projects.length) % projects.length];
  };

  const handleSwipeLeft = () => {
    const nextProject = findNextProject(id);
    if (nextProject) {
      setDirection('left');
      setTimeout(() => navigate(`/casestudy/${nextProject.id}`), 300);
    }
  };

  const handleSwipeRight = () => {
    const prevProject = findPrevProject(id);
    if (prevProject) {
      setDirection('right');
      setTimeout(() => navigate(`/casestudy/${prevProject.id}`), 300);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} className="bg-primary min-h-screen py-12 overflow-hidden font-sans">
      <div className={clsx(
        "transition-transform duration-300 transform",
        {
          "translate-x-full": direction === 'left',
          "-translate-x-full": direction === 'right',
          "translate-x-0": !direction,
        }
      )}>
        {caseStudy ? (
          <CaseStudyTemplate 
            id={caseStudy.id}
            title={caseStudy.title}
            createdAt={caseStudy.createdAt}
            videoSrc={caseStudy.videoSrc}
            idea={caseStudy.idea}
            implementation={caseStudy.implementation}
            deployment={caseStudy.deployment}
            videoSrc_2={caseStudy.videoSrc_2}
          />
        ) : (
        <div className='flex justify-center items-center min-h-screen'>
          <FontAwesomeIcon icon={faSpinner} spin size='3x'/>
        </div>
        )}
      </div>
    </div>
  );
}
