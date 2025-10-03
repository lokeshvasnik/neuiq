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
    label: "Assessment & Architecting",
    heading: "Reassess foundations before scaling up",
    description:
      "To modernize effectively, organizations must assess their current data stack, performance gaps, and future demands. Then architect cloud-first, modular ecosystems that support automation, analytics, and ML workloads.",
  },
  {
    key: "maturity_scoring",
    label: "Methodologies",
    heading: "Apply the right modernization approach, not just new tools",
    description:
      "Lift-and-shift doesn’t equal modernization. Choose the right approach be it replatforming, refactoring, or rearchitecting. Based on workload complexity, data gravity, and long-term value.",
  },
  {
    key: "use_case",
    label: "Data Replication",
    heading: "Enable seamless migration without business disruption",
    description:
      "Reliable, low-latency replication is essential for moving to modern platforms while minimizing operational risk. Ensure continuity of data flows during hybrid or phased migrations.",
  },
  {
    key: "capability_buildout",
    label: "Pipeline Refactoring",
    heading: "Rebuild pipelines for today’s speed, scale, and flexibility",
    description:
      "Legacy ETL pipelines are often brittle and batch-heavy. Refactor them into modern, modular, and real-time data pipelines that can handle dynamic workloads and downstream AI/analytics needs.",
  },
];

const useCases = [
  {
    title: "Future-Proof Analytics by Moving to Real-Time Pipelines",
    content:
      "Upgrade from batch ETL jobs to streaming data architectures that feed dashboards, ML models, and customer-facing applications in real time. Unlocking smarter, faster decision-making.",
  },
  {
    title: "Simplify Data Stack with a Unified Cloud Platform",
    content:
      "Modernize siloed and redundant data tools into a scalable, centralized platform (e.g., Databricks, Snowflake, Microsoft Fabric) that supports storage, processing, and analytics in one place. Reducing complexity and TCO (Total cost of ownership).",
  },
  {
    title: "De-Risk AI Adoption with Modular Data Architecture",
    content:
      "Enable AI readiness by modernizing the underlying pipelines and governance models. A modular, clean architecture supports experimentation while staying scalable and secure.",
  },
  {
    title: "Improve Pipeline Performance and Observability",
    content:
      "Replace brittle, script-heavy workflows with orchestrated and observable pipelines. Refactored pipelines increase reliability, reduce outages, and improve transparency for operations teams.",
  },
  {
    title: "Accelerate Time-to-Insight for Business Teams",
    content:
      "Modern data pipelines reduce latency between data generation and analysis. Business teams get faster access to trusted data. Shortening cycles for decisions, campaigns, and innovations.",
  },
];

const scrollContentByTab = {
  ai_readiness: [
    "Technology Stack Evaluation",
    "Data Flow Analysis",

    "Defining Success Metrics",

    "Custom Architecture Design",

    "Strategic Planning with Risk Mitigation",
  ],
  maturity_scoring: [
    "Weigh rehosting vs refactoring vs replatforming",

    "Avoid “big bang” transformations",

    "Adopt agile and iterative transition models",

    "Prioritize quick wins and reuse",
  ],
  use_case: [
    "Set up source-to-target replication pipelines",
    "Maintain high availability and low latency",
    "Support parallel run environments",

    "Automate error handling and reconciliation",
  ],
  capability_buildout: [
    "Break monolithic pipelines into reusable components",

    "Enable event-driven or micro-batch processing",

    "Automate metadata management and orchestration",

    "Reduce pipeline failures and reruns",
  ],
};

const DataModernization = () => {
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
      <div className="data-mord-herobanner h-auto sm:h-auto -mt-40">
        <div className="text-white">
          <div className="lg:px-10 px-4 sm:px-6 pt-40 max-w-full mx-auto">
            <div className="flex flex-col sm:flex-col items-start justify-center gap-4 lg:min-h-[500px]">
              <h1 className="text-3xl md:text-4xl lg:text-6xl sm:leading-[4.5rem] font-bold leading-tight">
                MODERNIZE THE CORE TO <br /> POWER
                 WHAT’S NEXT
              </h1>
              <p className="sm:mb-10 sm:text-base text-xs text-[#bfcadb]">
                Re-architect legacy systems and pipelines to unlock agility,
                scale, and AI-readiness.
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
            Legacy data systems were never built for today’s pace of business.{" "}
            <strong>
              Modernization is no longer optional. It’s the baseline for
              automation, real-time analytics, and AI enablement.
            </strong>
          </p>
          <p className="text-gray-800 sm:text-xl">
            We help enterprises shift from slow, siloed, and hard-to-scale
            systems to cloud-native, event-driven, and future-ready
            architectures.
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
                    <p className="uppercase font-semibold text-lg text-gray-950 tracking-wide mb-4">
                      Explore
                    </p>
                    <h2 className="text-4xl md:text-4xl font-semibold text-black">
                      <span className="text-[#00B2C6] font-bold">
                        <Link className="font-bold" to={PATH.DataforAI}>
                          Data for AI
                        </Link>
                      </span>{" "}
                      to see how modernized data environments fuel intelligent models.
                    </h2>
                  </div>
        
                  {/* Image Section */}
                  <div className="w-full md:w-[400px] lg:w-[350px]">
                    <Link className="font-bold" to={PATH.DataforAI}>
                    <img
                      src={icons.dataforai_footer_hexa}
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

export default DataModernization;
