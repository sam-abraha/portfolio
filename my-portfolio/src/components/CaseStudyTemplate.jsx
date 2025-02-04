import React, { useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function CaseStudyTemplate({ id, title, createdAt, videoSrc,videoSrc_2, idea, implementation, deployment }) {
  const videoRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 3;
    }
  }, [id]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const convertNewlinesToBreaks = (text) => {
    return text.split('\n').map((str, index) => (
      <React.Fragment key={index}>
        {str}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div>
      <div className="flex justify-between mx-auto mt-10 max-w-screen-lg font-sans">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faArrowLeft} className="animate-bounce-left text-gray-500" />
          <div>
            <h1 className="font-semibold text-gray-700">Previous Project</h1>
            <h2 className="font-bold text-gray-900">Swipe right</h2>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <h1 className="font-semibold text-gray-700">Next Project</h1>
            <h2 className="font-bold text-gray-900">Swipe left</h2>
          </div>
          <FontAwesomeIcon icon={faArrowRight} className="animate-bounce-right text-gray-500" />
        </div>
      </div>
      <div className="prose lg:prose-gray mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-700">{title}</h1>
          <p className="text-sm text-gray-700">{format(new Date(createdAt),'yyyy')}</p>
        </header>
        <section className="mb-8">
          <video
            key={id}
            ref={videoRef}
            onClick={openModal}
            className="max-w-full h-auto object-cover rounded-3xl mb-2 cursor-pointer"
            style={{ minHeight: '350px' }}
            loop autoPlay muted
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Idea</h2>
          <p className='text-justify'>{idea}</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Implementation</h2>
          <p className="text-justify">{convertNewlinesToBreaks(implementation)}</p>
        </section>
        {deployment && (
            <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700">Deployment</h2>
            <p>
              Visit the deployment on{' '}
              <Link to={deployment.split('\n')[0]}>{deployment.split('\n')[0]}</Link>
            <br/>
            {deployment.split('\n')[1]}
            </p>
          </section>
          )}
          {videoSrc_2 && (
            <section className="mb-8">
              <video
                key={id}
                ref={videoRef}
                onClick={openModal}
                className="max-w-full h-auto object-cover rounded-3xl mb-2 cursor-pointer"
                style={{ minHeight: '350px'}}
                loop autoPlay muted
              >
                <source src={videoSrc_2} type="video/mp4" />
              </video>
            </section>
      )}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="relative w-full max-w-4xl p-4 bg-primary rounded-lg shadow-lg">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  onClick={closeModal}
                >
                <FontAwesomeIcon icon={faTimes} size="2x" className="text-gray-700" />
                </button>
                <video
                  key={id}
                  ref={videoRef}
                  loop autoPlay muted
                  style= {{minHeight : '350px'}}
                  className="max-w-full object-cover"
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            </div>
        </div>
      )}

    </div>
  );
}
