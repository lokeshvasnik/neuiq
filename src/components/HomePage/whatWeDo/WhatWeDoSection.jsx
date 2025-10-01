
import { homePageData } from "../../../Utils/data";

import WhatWeDoCard from "./WhatWeDoCard";

const WhatWeDoSection = () => {

  return (
    <>
      <section
        id="what_we_do"
        className="px-4 py-10 lg:py-20 text-white bg-black"
      >
        <div className="max-w-full mx-auto lg:px-10">
          <div className="header lg:max-w-[80%] sm:mb-12 mb-8">
            <h1 className="sm:text-4xl text-2xl font-bold  mb-6">
              {homePageData.whatWeDoData.title}
            </h1>
          </div>

          <div className="capability-section">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 gap-6 justify-between">
              {
                homePageData.whatWeDoData?.cardData?.map((data, index) => {
                  return (<WhatWeDoCard data={data} key={index} />)
                })
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDoSection;
