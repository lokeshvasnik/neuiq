import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ item }) => {
  return (
    <Link
      to={item.Link || "/"}
      className="relative block lg:before:content-[''] lg:before:absolute before:bg-transparent hover:before:bg-[#156082] before:h-1 before:top-0 before:left-0 before:right-0 before:w-full">
      <div className="relative w-full lg:max-h-[450px] max-h-[350px] overflow-hidden rounded-lg shadow-lg group mt-14">
        <img src={item.image} className="w-full h-full object-cover" />

        <div className="absolute inset-0 flex justify-center px-3 bg-black/50 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
          <h1 className="text-xl  items-center text-center  text-white font-bold m-auto">
            {item.title}
          </h1>
        </div>
        <div
          className="flex flex-col justify-between absolute bottom-0  left-0 right-0 w-full bg-black bg-opacity-100 text-white text-center p-4  h-full  
                                                        translate-y-full transition-transform duration-[1000ms] ease-in-out group-hover:translate-y-0"
        >
          <div className="h-[calc(100%-30px)] overflow-auto custom-scroll">
            <h3 className="font-bold text-lg mb-4">{item.title}</h3>
            {item.description.map((desc, index) => (
              <div
                key={index}
                className="text-base text-left pb-2"
                dangerouslySetInnerHTML={{
                  __html: desc || "",
                }}
              >
                {/* {desc} */}
              </div>
            ))}
          </div>

          {item.Link && (
            <div className="text-[#FF6E5F] flex justify-center items-center text-2xl h-[24px] py-2">
              <FaChevronRight />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
