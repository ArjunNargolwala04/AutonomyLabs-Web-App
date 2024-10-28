// src/pages/Home.js

import React from 'react';
import Main from '../components/Main';
import FeatureSection from '../components/FeatureSection';
import InfoTabsSection from '../components/InfoTabsSection';
import ProcessSection from '../components/ProcessSection';
import MissionSection from '../components/MissionSection';
import WorkSection from '../components/WorkSection';

const Home = () => {
  return (
    <div>
      <Main />
      <MissionSection/>
      <InfoTabsSection />
      <WorkSection />
    </div>
  );
};

export default Home;
