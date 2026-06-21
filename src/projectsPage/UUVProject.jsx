import HeroUUV from '../components/subPage/HeroUUV.jsx';
import SubsystemsUUV from '../components/subPage/SubsystemsUUV.jsx';
import TestingUUV from '../components/subPage/TestingUUV.jsx';
import TeamUUV from '../components/subPage/TeamUUV.jsx';
import SponsorsUUV from '../components/subPage/SponsorsUUV.jsx';
import TDRDownloadUUV from '../components/subPage/TDRDownloadUUV.jsx';

const UUVProject = () => {
  return (
    <div className="min-h-screen bg-[#041820] text-white">
      <HeroUUV />
      <SubsystemsUUV />
      <TestingUUV />
      <TDRDownloadUUV />
      <TeamUUV />
      <SponsorsUUV />
    </div>
  );
};

export default UUVProject;
