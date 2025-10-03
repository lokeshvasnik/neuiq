import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";
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
    label: "Data Strategy & Governance",
    heading: "Establish control, clarity, and confidence",
    description:
      "Define a data vision aligned to your business goals. We help create governance models, policies, and data ownership structures that balance innovation with risk, enabling secure and compliant growth across teams.",
  },
  {
    key: "maturity_scoring",
    label: "Data Architecture & Platform Advisory",
    heading: "Design systems that scale with purpose",
    description:
      "Design resilient, scalable data platforms. Cloud, hybrid, or multi-cloud. We evaluate your existing architecture, recommend modernization paths, and ensure platforms are built to support advanced analytics and AI workloads.",
  },
  {
    key: "use_case",
    label: "Data Quality & Management",
    heading: "Trust your data. Every time",
    description:
      "Good data drives great decisions. We identify quality gaps, implement robust data management practices, and establish monitoring to ensure accuracy, consistency, and reliability across the board.",
  },
  {
    key: "capability_buildout",
    label: "Data Discovery & Enablement",
    heading: "Make data accessible and actionable",
    description:
      "Make your data visible, accessible, and usable. We help teams find, understand, and activate the right data using metadata frameworks, catalogs, and self-service tooling, so insights can scale with confidence.",
  },
  {
    key: "change_governance",
    label: "Analytics & Insights Readiness",
    heading: "Turn potential into performance",
    description:
      "Prepare your enterprise to turn data into action. We assess current capabilities, align KPIs, and guide on tooling and training to ensure that your teams are equipped to surface, trust, and act on insights.",
  },
];

const useCases = [
  {
    title: "Align Data Investments to Business Value",
    content:
      "Make sure every data initiative, from new platforms to tooling upgrades is tied to a specific business goal or KPI. Prioritize clarity over complexity, and ensure that data teams and business stakeholders are working toward the same outcomes.",
  },
  {
    title: "Build a Clear, Enforceable Data Governance Model",
    content:
      "Develop governance policies that go beyond documentation. Define roles, responsibilities, and data ownership to create accountability. Embed controls into workflows so governance is lived, not just written. Enabling both compliance and confidence.",
  },
  {
    title: "Modernize Legacy Data Architectures",
    content:
      "Rethink whether your current architecture is truly serving today’s needs. Eliminate brittle pipelines and siloed systems, and move toward a modern stack that supports scalability, integration with AI, and faster data delivery across the business.",
  },
  {
    title: "Elevate Data Quality as a Strategic Asset",
    content:
      "Treat data quality as a continuous, managed capability, not a one-time cleanup exercise. Identify critical data domains, implement automated monitoring, and instill data stewardship practices that ensure decisions are built on reliable ground.",
  },
  {
    title: "Enable Self-Service with Guardrails",
    content:
      "Empower analysts, business users, and domain teams to discover and work with data independently, while maintaining control. Balance accessibility with governance through catalogs, semantic layers, and clear usage guidelines that avoid chaos and sprawl.",
  },
  {
    title: "Ready Your Data for AI & Advanced Analytics",
    content:
      "Before scaling AI efforts, lay the groundwork with unified, high-quality, context-rich data. Identify gaps in availability, lineage, and labeling. Prioritize data preparation as a first-class citizen to enable high-impact use cases downstream.",
  },
];

const scrollContentByTab = {
  ai_readiness: [
    "Define data vision and operating model",
    "Establish ownership, access, and controls",
    "Set up policies for quality and compliance",
    "Enable data as a strategic asset",
  ],
  maturity_scoring: [
    "Assess current data stack and gaps",
    "Recommend scalable architecture (e.g., lakehouse, mesh)",
    "Support cloud/data platform selection (Snowflake, Databricks, Microsoft Fabric etc.)",
    "Guide migration and integration strategy",
  ],
  use_case: [
    "Evaluate data accuracy, completeness, and lineage",
    "Set up standards and monitoring frameworks",
    "Implement master and metadata management",
    "Drive consistent data across systems",
  ],
  capability_buildout: [
    "Improve data discoverability and access",
    "Enable self-service BI and analytics",
    "Build catalogs, dictionaries, and lineage tools",
    "Foster a data-driven culture",
  ],
  change_governance: [
    "Assess readiness for BI and advanced analytics",
    "Identify reporting/insight gaps and overlaps",
    "Align KPIs and data models to business needs",
    "Enable faster, richer decision-making",
  ],
};

const AdvisoryData = () => {
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
      <div className="advisory-data-herobanner h-auto sm:h-auto -mt-40">
        <div className="text-white">
          <div className="lg:px-10 px-4 sm:px-6 pt-40 max-w-full mx-auto">
            <div className="flex flex-col sm:flex-col items-start justify-center gap-4 lg:min-h-[500px]">
              <h1 className="text-3xl md:text-4xl lg:text-6xl sm:leading-[4.5rem] font-bold leading-tight">
                MAKE DATA A <br /> STRATEGIC ADVANTAGE
              </h1>
              <p className="sm:mb-10 sm:text-base text-xs text-[#bfcadb]">
                Design the Foundation for Scalable Data Intelligence
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
            Our Data Advisory services help you transform{" "}
            <strong>fragmented data assets into a strategic advantage</strong>
            From strategy and governance to architecture, quality, and
            enablement, <strong>we align your data</strong> foundation{" "}
            <strong>with business goals</strong>.
          </p>
          <p className="text-gray-800 sm:text-xl">
            Unlocking trusted, insight-ready data to fuel analytics, AI, and
            confident decision-making.
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
            <h2 className="text-4xl md:text-4xl font-semibold text-black">
              <span className="text-[#00B2C6] font-bold">
                <Link className="font-bold" to={PATH.AdvisoryCustomerExperience}>
                  Customer Experience Advisory
                </Link>
              </span>{" "}
              to see how data powers meaningful client interactions.
            </h2>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[400px] lg:w-[350px]">
            <Link to={PATH.AdvisoryCustomerExperience}>
            <img
              src={icons.advisorycustomer_footer_hexa}
              alt="Data Advisory"
              className="w-full h-auto"
            />
            </Link>
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

export default AdvisoryData;
