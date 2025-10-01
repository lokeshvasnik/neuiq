import React from "react";
import { icons } from "../Utils/icons";

const PerformanceTribe = ({bgColor="#c3c3c3", data }) => {
  return (
    <>
      <section id="role_looking" className={` relative overflow-hidden ${bgColor == "#c3c3c3" ? 'text-black' : 'text-white'}`} style={{background:  bgColor}}>
      <div className="lg:py-10 lg:px-10 px-2 max-w-full mx-auto lg:min-h-[650px] sm:min-h-[400px] min-h-[300px]">
        <div className="md:flex md:flex-row flex-col  ">
          {/* bg-[#194DBE] */}
          <div className="  md:w-[50%] ">
          

            {/* left: -96px  bottom: -64px*/}
            <div
              className="xl:size-[700px] lg:size-[600px] md:size-[450px]  size-36  absolute  left-0 md:-top-20 top-0  "  
            >
              <img src={icons.performancetribe} alt="" className="w-full h-full md:object-contain object-cover"/>
            </div>
          </div>

          {/* <div className="md:w-[55%]  md:absolute md:right-40 right-20 py-4 "> */}
          <div className="md:w-[45%] w-[86%]  ml-auto pt-32 pb-8">
            <div className="  w-full ">
              <h3 className="lg:text-5xl sm:text-2xl text-2xl font-bold  mb-4">
                {data.title}
              </h3>
              <h4
                className="lg:text-xl sm:text-xl text-lg font-semibold lg:mb-4 mb-0"
                dangerouslySetInnerHTML={{ __html: data.description }}
              ></h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default PerformanceTribe;
