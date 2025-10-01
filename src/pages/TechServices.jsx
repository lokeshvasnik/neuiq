import { techServicesMainPage } from "../Utils/data";

import ContactFooter from "../components/ContactFooter";
import Header from "../components/Header";
import CardStack from "../components/CardStack/CardStack";
import TechnologyStack from "../components/TechnologyStack/TechnologyStack";
import OurCapabilities from "../components/OurCapabilities";
import Banner from "../components/Banner";

const TechServices = () => {
  return (
    <>
      <Header className="sticky top-0 z-50" />
      <div className="tech-services-background -mt-40 bg-cover bg-center bg-no-repeat h-auto sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[700px]">
        <div className="text-white">
          <div className="lg:px-10 px-4 sm:px-6 pt-40 max-w-full mx-auto">
            <Banner data={techServicesMainPage.banner} />
          </div>
        </div>
      </div>
      <OurCapabilities capabilities={techServicesMainPage.capabilities} />
      <TechnologyStack />
      <CardStack />
      <ContactFooter data={techServicesMainPage.callToAction} />
    </>
  );
};

export default TechServices;
