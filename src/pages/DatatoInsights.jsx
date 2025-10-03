import { useState } from "react";
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
    label: "Objective & KPI Mapping",
    heading: "Tie analytics efforts to what really matters",
    description:
      "To generate meaningful insights, organizations must start by clearly defining business objectives and translating them into measurable, trackable KPIs across functions.",
  },
  {
    key: "maturity_scoring",
    label: "Data Ecosystem Assessment",
    heading: "Understand how your data flows, connects, and delivers value",
    description:
      "Before building dashboards or deploying models, organizations need a holistic understanding of where data resides, how it moves, and where bottlenecks or silos may be obstructing insight.",
  },
  {
    key: "use_case",
    label: "Design & Build IQ Boards",
    heading: "Deliver insights that are usable, beautiful, and relevant",
    description:
      "Static dashboards don’t cut it anymore. Organizations need dynamic, role-specific intelligence boards that surface real-time insights, support exploration, and drive frontline and leadership decisions.",
  },
  {
    key: "capability_buildout",
    label: "Data Querying & NLP Interfaces",
    heading: "Let business users ask better questions, faster",
    description:
      "Empowering decision-makers to query data using natural language, voice, or no-code tools accelerates insight consumption and reduces dependence on analyst teams.",
  },
];

const useCases = [
  {
    title: "Our teams don’t trust the dashboards. KPIs are inconsistent",
    content:
      "Inconsistent metric definitions across departments lead to multiple versions of the truth. Organizations must unify KPI definitions and align them to a central data model.",
  },
  {
    title: "We have too many tools and still lack clear insights",
    content:
      "Despite using top-tier BI and analytics platforms, many organizations struggle because data isn't well-integrated or dashboards are poorly designed. Rationalizing tools and rethinking dashboard design is critical.",
  },
  {
    title: "Decision-makers rely on gut feel, not data",
    content:
      "When insights are too slow or hard to access, business leaders revert to intuition. The solution lies in making insights timely, visual, and directly connected to decisions.",
  },
  {
    title: "Our analysts are overwhelmed with repetitive data pulls",
    content:
      "High-demand, low-value requests clog up analytics teams. Self-service NLQ tools and curated insight boards help redirect analyst time to more strategic analysis.",
  },
  {
    title: "We’ve invested in dashboards, but adoption remains low",
    content:
      "Dashboards fail when they don’t reflect the real needs of their users. Involving users in design and embedding boards into workflows boosts adoption.",
  },
  {
    title: "We can't trace where our numbers are coming from",
    content:
      "Without lineage, data consumers can't verify or validate the source of insights. Organizations must build transparent, traceable pipelines to boost confidence in analytics.",
  },
];

const scrollContentByTab = {
  ai_readiness: [
    "Align KPIs with strategic and operational goals",

    "Create an enterprise-wide KPI taxonomy",

    "Identify leading vs lagging indicators",

    "Prioritize metrics that drive decisions",
  ],
  maturity_scoring: [
    "Map source systems, warehouses, and marts",

    "Identify data lineage and access issues",

    "Assess gaps in real-time vs batch data availability",

    "Ensure semantic alignment across data layers",
  ],
  use_case: [
    "Co-design boards with business users",

    "Surface alerts, benchmarks, and trends",

    "Enable drilldowns and exploration",

    "Balance performance with usability",
  ],
  capability_buildout: [
    "Deploy NLQ (Natural Language Query) tools",

    "Train interfaces with domain context",

    "Connect queries to semantic layers or curated data",

    "Track and improve question-answer quality",
  ],
};

const DatatoInsights = () => {
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
      <div className="datatoinsight-herobanner h-auto sm:h-auto -mt-40">
        <div className="text-white">
          <div className="lg:px-10 px-4 sm:px-6 pt-40 max-w-full mx-auto">
            <div className="flex flex-col sm:flex-col items-start justify-center gap-4 lg:min-h-[500px]">
              <h1 className="text-3xl md:text-4xl lg:text-6xl sm:leading-[4.5rem] font-bold leading-tight">
                ACCELERATE DECISIONS <br /> WITH
                 CONNECTED, <br /> CONTEXTUAL INSIGHTS
              </h1>
              <p className="sm:mb-10 sm:text-base text-xs text-[#bfcadb]">
                Unify data, KPIs, and intelligence into a single source of
                actionable truth.
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
            Most organizations don’t lack data, they lack clarity.
          </p>
          <p className="text-gray-800 sm:text-xl">
            “Data to Insights” focuses on{" "}
            <strong>
              converting raw information into business intelligence{" "}
            </strong>
            that’s{" "}
            <strong>
              timely, trustworthy, and aligned with decision-making needs.
            </strong>{" "}
            This means grounding analytics in business objectives, designing
            insight systems for real-world use, and enabling teams to query and
            consume insights naturally. Whether through dashboards or natural
            language.
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
                                <h2 className="text-4xl md:text-4xl font-semibold text-black">
                                  Looking at the bigger picture? Return to {" "}
                                  <span className="text-[#00B2C6] font-bold">
                                    
                                    <Link className="font-bold" to={PATH.dataEngineering}>
                                       Data Engineering Services
                                    </Link>
                                  </span>{" "}
                                  to explore the full spectrum.
                                </h2>
                              </div>
                    
                              {/* Image Section */}
                              <div className="w-full md:w-[400px] lg:w-[350px]">
                                <Link to={PATH.dataEngineering}> <img
                                  src={icons.dataeng_hexafooter}
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

export default DatatoInsights;
