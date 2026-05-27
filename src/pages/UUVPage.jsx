import UUVHero from "../components/UUV/UUVHero";
import UUVStrategy from "../components/UUV/UUVStrategy";
import SubsystemTabs from "../components/UUV/SubsystemTabs";
import TestingSection from "../components/UUV/TestingSection";
import TDRDownload from "../components/UUV/TDRDownload";

const UUVPage = () => (
  <div className="bg-uuv-darker min-h-screen overflow-x-hidden">
    <UUVHero />
    <UUVStrategy />
    <SubsystemTabs />
    <TestingSection />
    <TDRDownload />
  </div>
);

export default UUVPage;
