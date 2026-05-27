import React from 'react';
import HeroUUV from '../components/subPage/HeroUUV.jsx';
import TeamUUV from '../components/subPage/TeamUUV.jsx';
import SponsorsUUV from '../components/subPage/SponsorsUUV.jsx';

const SubmarineProject = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroUUV />
      <TeamUUV />
      <SponsorsUUV />
    </div>
  );
};

export default SubmarineProject;
