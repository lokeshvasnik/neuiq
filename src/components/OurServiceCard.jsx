import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CardContent = ({ item }) => (
  <>
    {/* Icon Placeholder */}
    <div className="absolute -top-8 left-8">
      <div className="bg-[#008B9B] rounded-full transition-colors duration-300">
        <img src={item.image} className="lg:size-[92px] size-[80px]" />
      </div>
    </div>

    {/* Card Content */}
    <div className="mt-8 flex flex-col justify-between h-[calc(100%-32px)]">
      <div>
        <h2 className="lg:text-2xl text-xl font-bold mb-4 text-center text-black">
          {item.title}
        </h2>

        {item.description.map((desc, index) => (
          <p
            key={index}
            className="lg:text-[16px]/[22px] text-left  text-sm pb-2 text-black"
            dangerouslySetInnerHTML={{ __html: desc }}
          ></p>
        ))}
      </div>

      {item.Link && (
        <div className="text-[#FF6E5F] flex justify-center text-2xl">
          <FaChevronRight />
        </div>
      )}
    </div>
  </>
);

const OurServiceCard = ({ item }) => {
  return (
    <div
      className={`bg-[#EEEEEE] rounded-3xl p-8 relative transition-transform duration-300 hover:scale-105`}
    >
      {item.Link ? (
        <Link to={item.Link}>
          <CardContent item={item} />
        </Link>
      ) : (
        <div>
          <CardContent item={item} />
        </div>
      )}
    </div>
  );
};

export default OurServiceCard;
