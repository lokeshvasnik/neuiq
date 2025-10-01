import React, { useState } from "react";
import Header from "../components/Header";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ContactModal from "../components/ContactModal"; // import modal
import { icons } from "../Utils/icons";
import { PATH } from "../Utils/constants";
// Accordion Component
const AccordionSection = ({
  index,
  title,
  content,
  expandedIndex,
  toggleAccordion,
}) => {
  const isOpen = expandedIndex === index;

  return (
    <div
      className={`${
        index !== 0 ? "border-t-2 border-gray-400" : ""
      } py-4 sm:py-6`}>
      <button
        className="flex justify-between w-full text-left font-bold text-black-900 text-xl md:text-2xl"
        onClick={() => toggleAccordion(index)}>
        {title}
        <span>{isOpen ? "-" : "+"}</span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto", opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden">
            <p className="text-base sm:text-xl text-black-700 mt-4 w-full">
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const tabs = [
  {
    key: "ai_readiness",
    label: "Discovery",
    heading: "Uncover What Users Really Need",
    description:
      "Go beyond assumptions by deeply understanding user behaviors, motivations, and unmet needs. We apply Jobs to Be Done (JTBD) methodology, identify root problems, and benchmark against competitor experiences to reveal critical gaps and opportunities. This early clarity ensures the right problems are being solved and sets the direction for impactful UX design.",
  },
  {
    key: "maturity_scoring",
    label: "Definition",
    heading: "Shape the Experience with Precision",
    description:
      "Translate insights into actionable frameworks by defining key user personas and mapping their journeys across touchpoints. This phase distills complex behaviors into clear archetypes and narratives that guide design decisions, highlight friction points, and align the team on user needs, goals, and context.",
  },
  {
    key: "use_case",
    label: "Design",
    heading: "Turn Ideas into Intuitive Interfaces",
    description:
      "Bring concepts to life through structured design validation. We use information architecture, wireframes, and prototypes to test usability and flow early. Through iterative feedback and concept testing, we ensure the design resonates with users and supports seamless task completion.",
  },
  {
    key: "capability_buildout",
    label: "Development",
    heading: "Build with Confidence and User Validation",
    description:
      "Bridge the gap between design and release through real-user validation. Pre-launch usability testing and beta testing surface issues before they reach production. We help teams course-correct quickly, reducing rework and ensuring the experience is user-ready at go-live.",
  },
  {
    key: "change_governance",
    label: "Deployment",
    heading: "Sustain & Scale with Experience Intelligence",
    description:
      "Post-launch, we embed measurement and benchmarking into your UX processes. From tracking experience metrics and running competitive UX benchmarking to establishing rolling research programs, we ensure your user experience continuously evolves with business goals and user expectations.",
  },
];

const useCases = [
  {
    title: "Run Foundational UX Research for New Products",
    content:
      "Before building anything, invest in qualitative and quantitative UX research to deeply understand user context, behaviors, and needs. Ensuring your product solves the right problem from day one.",
  },
  {
    title: "Redesign Legacy Interfaces to Improve Usability",
    content:
      "Modernize outdated digital platforms by rethinking navigation, layout, and task flows. Improve efficiency, accessibility, and satisfaction by aligning with current UX best practices and user expectations.",
  },
  {
    title: "Streamline Complex Workflows into Simpler Interactions",
    content:
      "Break down complicated, multi-step tasks into intuitive, goal-driven user flows. Reduce cognitive load and interaction friction, especially in enterprise or technical products with complex user roles.",
  },
  {
    title: "Incorporate UX Testing into Agile Product Sprints",
    content:
      "Create an iterative feedback loop by embedding usability testing within sprint cycles. Validate designs before development to avoid costly rework and ensure features meet real user needs.",
  },
  {
    title: "Improve Mobile Experience for On-the-Go Users",
    content:
      "Redesign mobile touchpoints for better responsiveness, navigation, and performance. Prioritize thumb-friendly layouts, reduced latency, and offline access for mobile-first user scenarios.",
  },
  {
    title: "Bridge the Gap Between Design and Development",
    content:
      "Facilitate stronger collaboration between UX teams and engineering by creating shared design systems, documentation standards, and QA processes to maintain design integrity from concept to code.",
  },
];

const scrollContentByTab = {
  ai_readiness: [
    "Jobs-to-be-done",
    "Problem Identification",
    "Competitive UX Benchmarking",
  ],
  maturity_scoring: ["Persona Development", "Journey Mapping"],
  use_case: [
    "Concept Validation",
    "Usability Testing",
    "Information Architecture",
  ],
  capability_buildout: ["Pre-Launch Usability Testing", "Beta Testing"],
  change_governance: [
    "Competitive UX Benchmarking",
    "Experience Metrics",
    "Rolling User Research programs",
  ],
};

const AdvisoryUserExperience = () => {
  const [activeTab, setActiveTab] = useState("ai_readiness");
  const current = tabs.find((tab) => tab.key === activeTab);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // modal state

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}      
      <Header className="sticky top-0 z-50" />
      <div className="advisory-user-herobanner h-auto sm:h-auto -mt-40">
        <div className="text-white">
          <div className="lg:px-10 px-4 sm:px-6 pt-40 max-w-full mx-auto">
            <div className="flex flex-col sm:flex-col items-start justify-center gap-4 lg:min-h-[500px]">
              <h1 className="text-3xl md:text-5xl lg:text-6xl sm:leading-[4.5rem] font-bold leading-tight">
                TURN USER INSIGHT INTO <br /> PRODUCT ADVANTAGE
              </h1>
              <p className="sm:mb-10 sm:text-base text-xs text-[#bfcadb]">
                Turn clunky workflows into seamless interactions through UX
                strategy grounded in <br /> research, design, and real-world usage.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 mb-10 lg:mb-0 sm:px-5 text-xs sm:py-2 w-40 sm:w-40 rounded-md whitespace-nowrap bg-[#00CACF] text-black flex items-center sm:text-lg font-medium justify-center uppercase">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <div className="w-full mb-6">
          <p className="mb-4 text-gray-800 sm:text-xl">
            User Experience Advisory ensures that digital experiences are not
            just usable but intuitive, efficient, and delightful.
          </p>
          <p className="text-gray-800 sm:text-xl">
            We guide product and platform teams{" "}
            <strong>from discovery to deployment</strong>, helping{" "}
            <strong>build experiences </strong>that <strong>users love</strong>{" "}
            and<strong> businesses value.</strong>
          </p>
        </div>

        <div className="flex lg:w-[62%] mb-6 w-full">
          <div className="bg-[#000010] rounded-full px-3 py-2 my-6 flex gap-2 flex-nowrap relative overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <motion.button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold text-center leading-tight relative z-10 min-w-48 md:min-w-[120px] ${
                    isActive ? "text-black" : "text-white"
                  }`}>
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="tabHighlight"
                      className="absolute inset-0 rounded-full z-[-1]"
                      style={{
                        background:
                          "linear-gradient(to right top, rgb(248 236 193), rgb(124 234 255))",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 40,
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current?.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Left: Description */}
            <div className="lg:w-2/3 w-full">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 uppercase">
                {current?.heading}
              </h2>
              <p className="text-gray-700 text-base sm:text-xl">{current?.description}</p>
            </div>

            {/* Right: Auto-Scrolling Card Section */}
            <div className="lg:w-1/3 rounded-lg w-full py-5 overflow-hidden relative max-h-[15rem] lg:h-auto">
              <div
                className="scroll-container  px-3 rounded-xl"
                style={{
                  background:
                    "linear-gradient(to right top, rgb(248 236 193), rgb(124 234 255))",
                }}>
                {[...Array(2)].flatMap(() =>
                  (scrollContentByTab[current?.key] || []).map((text, idx) => (
                    <div
                      key={`${text}-${idx}`}
                      className="font-semibold shadow p-4 text-gray-900 text-base my-2 bg-white border-t-4 border-black rounded-md">
                      {text}
                    </div>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* USE CASES Section */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-10 py-12 bg-[#eef0f3]">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column */}
          <div className="lg:w-1/3 w-full">
            <h2 className="text-3xl font-bold text-gray-900">USE CASES</h2>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:w-2/3 w-full">
            {useCases.map((item, index) => (
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
     <section className="bg-white py-12 md:py-12 lg:pt-12 px-4">
                    <div className="max-w-full mx-auto sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-center gap-10">
                      {/* Text Section */}
                      <div className="max-w-xl text-center md:text-left">
                        {/* <p className="uppercase font-semibold text-lg text-gray-950 tracking-wide mb-4">
                          Explore
                        </p> */}
                        <h2 className="text-4xl md:text-3xl lg:text-4xl font-semibold text-black">
                          Looking at the bigger picture? Return to {" "}
                          <span className="text-[#00B2C6] font-bold">
                            
                            <Link className="font-bold" to={PATH.advisory}>
                               Advisory Services 
                            </Link>
                          </span>{" "}
                          to explore the full spectrum.
                        </h2>
                      </div>
            
                      {/* Image Section */}
                      <div className="w-full md:w-[400px] lg:w-[350px]">
                         <Link className="font-bold" to={PATH.advisory}>
                        <img
                          src={icons.advisory_hexafooter}
                          alt="Data Advisory"
                          className="w-full h-auto"
                        /></Link>
                      </div>
                    </div>
                  </section>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default AdvisoryUserExperience;
