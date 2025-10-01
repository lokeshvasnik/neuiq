import { homePageData } from "../Utils/data";

import NeuliqEdgeCard from "./HomePage/NeuliqEdgeCard/NeuliqEdgeCard";

const NeuIQEdgeSection = () => {
  return (
    <section
      id="neuliq_edge"
      className="px-4 bg-[#F9FBFD] relative overflow-hidden py-10 lg:py-10"
    >
      <div className="max-w-full mx-auto lg:px-10">
        <div className="header lg:max-w-[70%] sm:mb-12 mb-8">
          <p className="sm:text-xl text-xl lg:mb-4 md:mb-2 text-[#A9B4C2]">{homePageData.neuiqEdgeData.title}</p>
          <h1 className="sm:text-4xl text-2xl  font-bold sm:mb-6 mb-3 sm:w-[600px]">{homePageData.neuiqEdgeData.description}</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:gap-8">
          {homePageData.neuiqEdgeData.cardData.map((data, index) => {
            return <NeuliqEdgeCard key={index} data={data} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default NeuIQEdgeSection;
