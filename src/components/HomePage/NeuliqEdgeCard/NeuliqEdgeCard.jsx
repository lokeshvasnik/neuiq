/* eslint-disable react/prop-types */
// import './neuliqEdgeCard.css'

const NeuliqEdgeCard = ({ data }) => {
  const { title, description } = data
  return (
    <div className="neuliq_edge_card py-5 pt-0 md:pt-5 px-0 relative overflow-hidden lg:min-h-[300px]">
        <div className="neuliq_edge_card_content bg-transparent relative">
          {/* First row: hexagon + title */}
        <div className="flex items-center gap-8 mb-4 md:mb-8">
          {/* Hexagon */}
          <div className="hexagon-card-layout"></div>

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-bold sm:w-[250px]">
            {title}
          </h2>
        </div>

        {/* Second row: description spans full width */}
        <p className="text-gray-700 text-base md:text-xl sm:w-full">
          {description}
        </p>
      </div>
    </div>

  );
};

export default NeuliqEdgeCard;
