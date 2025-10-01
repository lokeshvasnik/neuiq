//* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { useLenis } from "lenis/react";

const WhatWeDoCard = ({ data }) => {
    const lenis = useLenis();

  const handleListLinkClick = () => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  return (
    <div className="rounded-[20px] px-2 py-4 md:py-8 text-white bg-[rgb(16,20,33)] border border-white w-full min-h-max flex flex-col justify-between hover:scale-105 duration-1000">
      <div className="top-section mb-5">
        <div className="image-container max-w-[350px] mx-auto">
          <Link to={data.navigation}>
            <img src={data.image} alt="" className="h-full w-full object-cover object-right scale-110" />
          </Link>
        </div>

        <div className="content text-center">
          <Link to={data.navigation} className="hover:underline ease-in-out">
            <h2 className="font-bold sm:text-2xl text-2xl mb-2 mt-5 capitalize text-[#A9B4C2]">{data.title}</h2>
          </Link>
          <ul className="list-none text-base font-normal">
            {
              data.list.map((listItem, index) => {
                return (
                  <li key={index} className="last-of-type:mb-0 mb-[2px] lg:text-base text-base">
                    <Link className="hover:underline ease-in-out"
                      to={listItem.navigation}
                       onClick={handleListLinkClick}
                    >{listItem.label}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoCard;
