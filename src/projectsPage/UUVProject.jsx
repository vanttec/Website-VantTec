import HeroUUV from '../components/subPage/HeroUUV.jsx';
// import SubsystemsUUV from '../components/subPage/SubsystemsUUV.jsx';  // TODO: build next
// import TestingUUV from '../components/subPage/TestingUUV.jsx';         // TODO: build next
import TeamUUV from '../components/subPage/TeamUUV.jsx';
import SponsorsUUV from '../components/subPage/SponsorsUUV.jsx';
// import TDRDownloadUUV from '../components/subPage/TDRDownloadUUV.jsx'; // TODO: build next

const UUVProject = () => {
  return (
    <div className="min-h-screen bg-[#041820] text-white">
      <HeroUUV />
      {/* <SubsystemsUUV /> */}
      {/* <TestingUUV /> */}
      <TeamUUV />
      <SponsorsUUV />
      {/* <TDRDownloadUUV /> */}
    </div>
  );
};

export default UUVProject;
