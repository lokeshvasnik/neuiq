import { newsroomData } from "../Utils/data";

import CdoSection from "../components/NewsRoom/CdoSection";
import Header from "../components/Header";

const NewsRoom = () => {
  return (
    <>
      <Header className="sticky top-0 z-50" />
    
      <div className="newsroom-hero-banner -mt-40 bg-cover bg-center bg-no-repeat h-[450px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[700px]">
        <div className="text-white">
          <div className="lg:px-10 px-4 sm:px-6 pt-40 max-w-full mx-auto">
            <div className="lg:px-0 py-10 max-w-full mx-auto">
              <div className="flex sm:flex-row flex-col-reverse text-left md:items-center gap-4 lg:min-h-[500px]">
                <div className="sm:w-full">
                  {/* Title */}
                  <h1 className="text-3xl sm:text-6xl sm:leading-[4.5rem] lg:leading-[4.5rem] font-bold whitespace-pre-line">
                    NEWSROOM
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CdoSection data={newsroomData.cdoSectionData} />
    </>
  );
};

export default NewsRoom;
