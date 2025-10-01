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
    label: "Assessment & Strategy Development",
    heading: "Gain clarity on your data landscape before you unify",
    description:
      "Start by evaluating where your data lives, how fragmented it is, and how those silos impact decision-making. Develop a clear, prioritized strategy to bring your data together in a way that aligns with your business goals.",
  },
  {
    key: "maturity_scoring",
    label: "Data Integration & Consolidation",
    heading: "Break down barriers between systems and sources",
    description:
      "Work toward integrating data across platforms, applications, and departments. Aim to reduce duplication, align formats, and create consistent structures that enable cross-functional visibility.",
  },
  {
    key: "use_case",
    label: "Data  Governance",
    heading: "Establish trust, ownership, and responsible access",
    description:
      "Define clear policies and guardrails to ensure data integrity, security, and proper usage. Empower teams with guidelines that support self-service while minimizing risk.",
  },
  {
    key: "capability_buildout",
    label: "Data Operations",
    heading:
      "Build the reliability and performance backbone of your data strategy",
    description:
      "Ensure that your unified data ecosystem is continuously available, monitored, and improving. Focus on operational practices that keep your pipelines efficient, scalable, and resilient.",
  },
];

const useCases = [
  {
    title: "Eliminate Reporting Inconsistencies Across Business Units",
    content:
      "Help business teams move from conflicting reports to shared truths by consolidating data across CRM, ERP, and analytics systems into a single unified model.",
  },
  {
    title: "Power Personalization with Unified Customer Profiles",
    content:
      "Combine behavior, transaction, and support data into golden customer records that unlock real-time, personalized experiences across sales, marketing, and service.",
  },
  {
    title: "Harmonize Product Data Across Global Markets",
    content:
      "Merge and standardize product data from multiple regions and business units to ensure consistency in catalogs, pricing, and compliance reporting.",
  },
  {
    title: "Accelerate AI Readiness with Clean, Connected Data",
    content:
      "Enable AI/ML teams to access trustworthy training data by resolving duplication, standardizing structures, and integrating disparate sources into unified datasets.",
  },
  {
    title: "Simplify Compliance & Regulatory Reporting",
    content:
      "Unify key data sources to reduce the time, complexity, and risk of meeting audit and regulatory reporting requirements across jurisdictions.",
  },
  {
    title: "Optimize Operational Workflows with Unified Reference Data",
    content:
      "Break down the barriers between operations, finance, and logistics by unifying shared reference data to improve handoffs, reporting, and process automation.",
  },
];

const scrollContentByTab = {
  ai_readiness: [
    "System and source audits",
    "Data silos and fragmentation assessment",
    "Business-aligned unification strategy",
    "Tooling and platform recommendations",
  ],
  maturity_scoring: [
    "ETL/ELT pipeline design",

    "Real-time and batch ingestion",

    "Master data creation (golden records)",

    "Entity resolution and deduplication",
  ],
  use_case: [
    "Metadata and cataloging",

    "Data stewardship models",

    "Access and role management",

    "Compliance and audit frameworks",
  ],
  capability_buildout: [
    "Orchestration and scheduling",

    "Monitoring and alerting",

    "Data quality checkpoints",

    "Incident and pipeline management",
  ],
};

const DataUnification = () => {
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
      <div className="dataunification-herobanner h-auto sm:h-auto -mt-40">
        <div className="text-white">
          <div className="lg:px-10 px-4 sm:px-6 pt-40 max-w-full mx-auto">
            <div className="flex flex-col sm:flex-col items-start justify-center gap-4 lg:min-h-[500px]">
              <h1 className="text-3xl md:text-5xl lg:text-6xl sm:leading-[4.5rem] font-bold leading-tight">
                UNIFY TO AMPLIFY: BUILD A <br /> SINGLE SOURCE OF TRUTH
              </h1>
              <p className="sm:mb-10 sm:text-base text-xs text-[#bfcadb]">
                Break through data silos and fragmentation. Power enterprise
                decisions with connected, governed, and trustworthy data.
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
            Siloed systems, fragmented data, and duplicate records are holding
            enterprises back from realizing the true value of their data. Our
            Data Unification service helps assess your current landscape and
            build a roadmap to <strong>centralize, connect,</strong> and{" "}
            <strong> govern data across the enterprise.</strong>
          </p>
          <p className="text-gray-800 sm:text-xl">
            From strategy to execution, we bring alignment, consistency, and
            accessibility to your data foundation. Paving the way for analytics,
            automation, and AI.
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
              <p className="text-gray-700 text-base sm:text-xl">
                {current?.description}
              </p>
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
            <p className="uppercase font-semibold text-lg text-gray-950 tracking-wide mb-4">
              Explore
            </p>
            <h2 className="text-4xl md:text-3xl lg:text-4xl font-semibold text-black">
              <span className="text-[#00B2C6] font-bold">
                <Link className="font-bold" to={PATH.DataModernization}>
                  Data Modernization
                </Link>
              </span>{" "}
              to scale unified data on future-ready platforms.
            </h2>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[400px] lg:w-[350px]">
            <Link className="font-bold" to={PATH.DataModernization}>
            <img
              src={icons.datamod_footer_hexa}
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

export default DataUnification;
