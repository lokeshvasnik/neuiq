import { useState } from "react";
import { icons } from "../Utils/icons";

import gsap from "gsap";
import Header from "../components/Header";
import ScrollTrigger from "gsap/ScrollTrigger";
import AccordionSection from "../components/AccordionSection";
import { advisoryMainPageData, qualtricsData } from "../Utils/data";
import Banner from "../components/Banner";

gsap.registerPlugin(ScrollTrigger);

const QualtricsXmService = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <Header className="sticky top-0 z-50" />
      <div className="qualtrics-herobanner advisory -mt-40 bg-cover bg-center bg-no-repeat h-auto sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[700px]">
        <div className="text-white">
          <div className="lg:px-10 px-4 sm:px-6 pt-40 max-w-full mx-auto">
            <Banner data={qualtricsData.banner} />
          </div>
        </div>
      </div>

      {/* Qualtrics Stats */}
      <section className="bg-gray-100 py-5 md:py-10">
        <div className="max-w-full mx-auto px-4 lg:px-10">
          {/* Main Content */}
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 md:gap-8">
            {/* Experience */}
            <div className="card relative before:absolute before:w-[30px] flex flex-col justify-between">
              <h2 className="text-4xl font-bold md:mb-4 mt-6">9+ Years</h2>
              <p className="text-black font-semibold mt-1 text-lg">Qualtrics Experience</p>
            </div>

            {/* Implementations */}
            <div className="card relative before:absolute before:w-[30px] flex flex-col justify-between">
              <h2 className="text-4xl font-bold md:mb-4 mt-6">300+</h2>
              <p className="text-black font-semibold mt-1 text-lg">XM Implementations</p>
            </div>


            {/* CX, EX, BX, Discover */}
            <div className="card relative before:absolute before:w-[30px] flex flex-col justify-between">
              <div className="flex items-center space-x-5 mt-6 md:mt-0">
                <div className="border-r border-black pr-3">
                  <img src={icons.qualtricspartnernetwork} alt="Qualtrics logo representing platform coverage" className="w-[65px] mb-2" />
                </div>
                <div>
                  <p className="text-xl font-semibold">Certified Partner</p>
                </div>
              </div>
              <p className="text-black font-semibold text-lg">
                Across CX, EX,
                BX, XM Discover
              </p>
            </div>

            {/* Global coverage */}
            <div className="card relative before:absolute before:w-[30px] my-0 md:mt-0">
              <img src={icons.earth} alt="Globe icon indicating global service regions" className="w-[85px] mb-2" />
              <p className="text-black font-semibold text-lg">
                Americas, APAC, EMEA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Cards Section */}
      <section className="bg-white text-black md:pb-10">
        <div className="pt-10 md:pt-20 md:pb-10">
          <div className="max-w-full mx-auto px-4 lg:px-10">
            <h1 className="text-2xl sm:text-4xl font-bold mb-4 uppercase tracking-wide">Our Capabilities</h1>
          </div>
        </div>
        <div className="max-w-full mx-auto px-4 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {qualtricsData.capabilities.cardData.map((item, index) => (
              <div
                key={index}
                className="p-[2px] rounded-[8px]  flex flex-col"
                style={{
                  background: "linear-gradient(180deg, #000014 0%, #00B6B6 50%, #00E5E5 100%)",
                }}
              >
                <div className="bg-white rounded-[8px] p-6 flex flex-col h-full">

                  {/* Top Section: Image/Icon */}
                  <div className="mb-4 min-h-[80px] flex items-center justify-center">
                    <img
                      className="w-full max-h-[200px] object-contain"
                      src={item.image || '/fallback.jpg'}
                      alt={item.title}
                    />
                  </div>

                  {/* Middle Section: Title + Desc */}
                  <div className="text-center mb-4 min-h-[70px] flex flex-col justify-center">
                    <h3 className="font-bold text-[19px] mb-3">{item.title}</h3>
                    <p className="font-bold text-md text-start">{item.desc.split('\n')[0]}</p>
                  </div>

                  {/* Bottom Section: Bullets */}
                  <ul className="text-sm list-disc ml-4">
                    {item.desc
                      .split('\n')
                      .slice(1)
                      .map((point, idx) => (
                        <li className="mb-1 text-base" key={idx}>{point.replace('-', '').trim()}</li>
                      ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualtrics + NeuIQ */}
      <section className="py-10">
        <div className="bg-white p-8 mx-auto text-center">

          <div className="flex items-center justify-center flex-col lg:flex-row mb-10">
            <img
              src={icons.qualtricsService}
              alt="Qualtrics Logo"
              className="h-20 mx-4"
            />
            <span className="text-5xl text-green-500 mx-8 mt-5 md:mt-0">+</span>
            <img
              src={icons.logoHorizontalQualtrics}
              alt="NeuIQ Logo"
              className="mx-4"
            />
          </div>
          <h2 className="text-3xl font-bold text-black mb-6">
            Turning Experience Data into Actionable Intelligence - Together
          </h2>
          <p className="  text-base sm:text-xl text-black-700 mt-4 w-full text-1xl max-w-2xl mx-auto leading-relaxed">
            Our expert advisory, implementation, and ongoing services amplify the impact of your XM program.
            Helping you maximize the full value of your Qualtrics investment.
          </p>
        </div>
      </section>

      {/* USE CASES Section */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-10 py-12 bg-[#eef0f3] lg:mt-10">
        <div className="flex flex-col lg:flex-row gap-5 md:gap-10">
          {/* Left Column */}
          <div className="lg:w-1/3 w-full">
            <h2 className="text-3xl font-bold text-gray-900">USE CASES</h2>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:w-2/3 w-full">
            {qualtricsData.useCases.useCaseData.map((item, index) => (
              <AccordionSection
                key={index}
                index={index}
                title={item.title}
                content={item.content}
                expandedIndex={expandedIndex}
                toggleAccordion={toggleAccordion}
              />
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default QualtricsXmService;
