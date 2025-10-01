import { Link } from "react-router-dom";
import { icons } from "../Utils/icons";
import { useState } from "react";

import AboutUsCardStack from "../components/CardStack/AboutUsCardStack";
import Header from "../components/Header";
import WeBuiltNewIQ from "../components/WeBuiltNewIQ/WeBuiltNewIQ";
import AdvisoryBoardSection from "../components/AdvisoryBoardSection";
import LeadershipSection from '../components//LeadershipSection';
import ContactModal from "../components/ContactModal";
import OurFutureStatic from "../components/OurFuture/OurFutureStatic";

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // modal state
  return (
    <>
      <Header className="sticky top-0 z-50" />
      
      <div className="aboutus-hero-banner -mt-40 bg-cover bg-center bg-no-repeat h-auto sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[700px]">
        <div className="text-white">
          <div className="lg:px-10 px-4 pt-40 max-w-full mx-auto">
            <div className="flex flex-col sm:flex-col items-start justify-center gap-4 lg:min-h-[500px]">
              <h1 className="text-2xl md:text-4xl sm:text-6xl sm:leading-[4.5rem]">
                <span className="font-bold">THE WORLD DOESN’T HAVE A < br /> DATA OR AI SHORTAGE</span>
              </h1>
              <p className="sm:text-5xl mb-10">
                <span className="">"IT HAS AN EXECUTION GAP"</span>
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 sm:px-5 text-base sm:py-2 w-40 sm:w-40 rounded-md whitespace-nowrap bg-[#00CACF] text-black flex items-center sm:text-lg font-medium justify-center uppercase">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Static Text Section */}
      <div className="bg-white text-black lg:px-10 px-4 py-10 lg:py-20 max-w-full mx-auto">
        <p className="text-base sm:text-xl mb-4 w-full">
          Across industries, leaders are investing in data platforms and AI
          capabilities yet struggling to translate that investment into
          meaningful outcomes.
        </p>
        <p className="font-bold mb-2 sm:text-xl">We saw this gap firsthand.</p>
        <p className="text-base sm:text-xl">
          In disjointed customer experiences, inefficient operations, and
          underutilized technology ecosystems.
        </p>
      </div>

      {/* Heading + 3 Columns Section */}
      <div className=" bg-white text-black sm:py-5 md:py-14 lg:py-20 px-4 max-w-full mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-10 text-center">
          THE PROMISE OF TRANSFORMATION WAS <br />
          THERE. BUT THE PATH TO GET THERE...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 */}
          <div className="flex flex-col items-center">
            <div className="mb-4 w-44">
              <img src={icons.Fragmented_icon} alt="Fragmented" className="" />
            </div>
            <p className="font-bold sm:text-xl">Fragmented</p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center">
            <div className="mb-4 w-44">
              <img src={icons.Slow_icon} alt="Slow" className="" />
            </div>
            <p className="font-bold sm:text-xl">Slow</p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center">
            <div className="mb-4 w-44">
              <img src={icons.Unclear_icon} alt="Unclear" className="" />
            </div>
            <p className="font-bold sm:text-xl">Unclear</p>
          </div>
        </div>
      </div>

      <WeBuiltNewIQ />

      <OurFutureStatic />
      
      <div className="bg-white text-black lg:px-10 px-4 pt-10 md:pt-0 max-w-full mx-auto leadership-section">
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">OUR LEADERSHIP</h2>

        {/* Subheading */}
        <p className="text-base sm:text-lg mb-5 mt-8">
          At NeuIQ, our strength lies in the people who lead us. Each member of our leadership team brings <b>decades of global experience</b> across data, AI, technology, operations, people, and growth. 
        </p>
        <p className="text-base sm:text-lg mb-5 md:mb-5 md:mt-8">
          Having <b>worked together for 15–20 years at the leading analytics firm, Ugam</b>. Where they <b>built and scaled a world-class global organization of nearly 4,000 people</b>. They now bring that experience to power NeuIQ’s next chapter.
        </p>
        <p className="text-base sm:text-lg md:mb-6 md:mt-8">
          More than executives, they are <b>builders, mentors, and partners</b>, shaping NeuIQ’s culture of curiosity, collaboration, and innovation. Ensuring our clients and people thrive in an AI-driven world.
        </p>

      </div>

      <LeadershipSection />
      
      <AdvisoryBoardSection />

      <div className="bg-white text-black lg:px-10 px-4 md:pb-16 max-w-full mx-auto py-5 md:py-0">
        <p className="text-base sm:text-xl mb-4">
          We’ve worked with Fortune 500 clients, led global teams, and driven
          innovation across
          sectors. Always anchored in{" "}
          <strong> data, AI, and enterprise platforms.</strong>
        </p>
      </div>

      <AboutUsCardStack />

      <div className="about-us-footer-background">
        <div className="lg:px-10 px-4 py-10 max-w-full mx-auto">
          <div className="flex flex-col lg:flex-col justify-center gap-10 lg:min-h-[500px] tablet-view">
            <div className="flex lg:w-1/2 w-full">
              <h1 className="text-2xl sm:text-6xl font-bold sm:leading-[4.5rem] text-white">
                READY TO BUILD <br /> WHAT’S NEXT?
              </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-5">
              <div className="sm:flex-row items-start sm:items-center gap-6">
                <p className="w-full md:w-[75%] lg:w-full text-base sm:text-xl font-semibold text-white mb-6">
                  LET’S EXPLORE HOW WE CAN HELP YOU MOVE FASTER AND SMARTER.
                </p>

                {/* Left Contact Us Button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 sm:px-5 text-xs sm:py-2 w-40 sm:w-40 rounded-md whitespace-nowrap bg-white text-black flex items-center sm:text-lg justify-center uppercase"
                >
                  Contact Us
                </button>
              </div>

              <div className="sm:flex-row items-start sm:items-center gap-6">
                <p className="w-full md:w-full text-base sm:text-xl font-semibold text-white my-5 md:mt-0 md:text-left mb-6">
                  LOOKING TO DO THE BEST WORK OF YOUR CAREER.
                </p>

                {/* Right Contact Us Button (left aligned with text) */}
                <Link
                  to="/careers"
                  className="px-4 py-2 sm:px-5 text-xs sm:py-2 w-40 sm:w-40 rounded-md whitespace-nowrap bg-white text-black flex items-center sm:text-lg justify-center uppercase"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </>
  );
};

export default AboutUs;
