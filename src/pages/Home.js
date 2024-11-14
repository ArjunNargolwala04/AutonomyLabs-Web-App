// src/pages/Home.js

import React from 'react';
import Main from '../components/Main';
import MissionSection from '../components/MissionSection';
import WorkSection from '../components/WorkSection';

const Home = () => {
  return (
    <div>
      <Main />
      <MissionSection/>
      <WorkSection />
    </div>
  );
};

export default Home;
