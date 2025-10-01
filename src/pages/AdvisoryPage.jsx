import { advisoryMainPageData } from '../Utils/data';

import Header from '../components/Header'
import StrategyHighlights from '../components/StrategyHighlights/StrategyHighlights';
import OurCapabilities from "../components/OurCapabilities";
import HexagonMake from "../components/HexagonCard/HexagonMake";
import CaseStudyHighlight from "../components/CaseStudyHighlight/CaseStudyHighlight";
import AdvisoryFormation from "../components/AdvisoryFormation/AdvisoryFormation";
import ContactFooter from "../components/ContactFooter";
import Banner from '../components/Banner';

const AdvisoryPage = () => {
  return (
    <>
      <Header className="sticky top-0 z-50" />
      <div className="hero-background advisory -mt-40 bg-cover bg-center bg-no-repeat h-auto sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[700px]">
        <div className="text-white">
          <div className="lg:px-10 px-4 sm:px-6 pt-40 max-w-full mx-auto">
            <Banner data={advisoryMainPageData.banner} />
          </div>
        </div>
      </div>
      <StrategyHighlights />
      <OurCapabilities capabilities={advisoryMainPageData.capabilities}/>
      <HexagonMake challenges={advisoryMainPageData.hexagonMake.data} />
      <CaseStudyHighlight/>
      <AdvisoryFormation/>
      <ContactFooter data={advisoryMainPageData.callToAction} />
    </>
  );
};

export default AdvisoryPage;
