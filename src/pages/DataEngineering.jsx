import { icons } from "../Utils/icons";
import { dataengineeringPage } from "../Utils/data";

import Banner from "../components/Banner";
import Header from "../components/Header";
import OurCapabilities from "../components/OurCapabilities";
import WhyItMatters from "../components/WhyItMatters/WhyItMatters";
import TransformationLayer from "../components/TransformationLayer/TransformationLayer";
import ContactFooter from "../components/ContactFooter";

const DataEngineering = () => {
  return (
    <>
      <Header className="sticky top-0 z-50" />
      <div className="data-engineering-background -mt-40 bg-cover bg-center bg-no-repeat h-auto sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[700px]">
        <div className="text-white">
          <div className="lg:px-10 px-4 sm:px-6 pt-40 max-w-full mx-auto">
            <Banner data={dataengineeringPage.banner} />
          </div>
        </div>
      </div>
      <OurCapabilities capabilities={dataengineeringPage.capabilities} />
      <WhyItMatters />
      <section className="relative overflow-hidden bg-white text-black lg:px-10 py-10">
        <div className="max-w-full mx-auto px-4">
          {/* Top Headings - Center Aligned */}
          <div className="text-center mb-12">
            <h4 className="uppercase text-gray-400 text-lg mb-2">
              Data Modernization & Monetization
            </h4>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold lg:leading-0 uppercase">
              FROM DISCONNECTED DATA <br className="hidden sm:block" />
              TO UNIFIED INTELLIGENCE
            </h2>
          </div>

          {/* Content Section */}
          <div className="md:flex md:flex-row flex-col items-center">
            {/* Left Side: Angled Image */}
            <div className="md:w-1/2 relative flex justify-center items-center mb-10 md:mb-0">
              <div className="w-[90%] max-w-[40rem] relative">
                <div className="clip-polygon w-full h-full overflow-hidden">
                  <img
                    src={icons.unified_intelligence} // your image source here
                    alt="AI Adoption"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Side: Text Content */}
            <div className="md:w-1/2 px-4">
              <p className="mb-4 text-gray-700 text-base md:text-xl">
                A leading enterprise client sits on a goldmine of customer data.
                Spanning surveys, CRM, ERP, external sources, and internal
                files. But insights are slow, fragmented, and inaccessible to
                many business teams.
              </p>
              <p className="mb-4 text-gray-700 text-base md:text-xl sm:mb-12">
                We are helping them unify and modernize their data into a
                centralized platform using Snowflake, Databricks, or Microsoft
                Fabric. 
              </p>
              <h4 className="font-bold my-2 text-lg md:text-2xl mb-5">
                On top of this, we're layering:
              </h4>
              <ul className="list-disc ml-5 space-y-4 text-gray-700 text-base md:text-xl">
                <li>
                  <b>Interactive Reporting</b> for self-service access
                </li>
                <li>
                  <b>Conversational AI Dashboards</b> for real-time decision
                  support
                </li>
                <li>
                  <b>Automated Data Publishing</b> to monetize insights through
                  marketplace distribution
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <TransformationLayer />
      <ContactFooter data={dataengineeringPage.callToAction} />
    </>
  );
};

export default DataEngineering;
