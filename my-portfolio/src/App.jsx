import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import AboutMe from './pages/AboutMe';
import CaseStudyPage from './pages/CaseStudyPage';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/aboutme" element={< AboutMe />} />
        <Route path="/casestudy/:id" element={<CaseStudyPage />} />
      </Route>
    </Routes>
  );
};

export default App;
