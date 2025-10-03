import React, { useState } from "react";
import Header from "../components/Header";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ContactModal from "../components/ContactModal";
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
    label: "AI Readiness Audits",
    heading: "Know where you stand before you scale",
    description:
      "We begin by conducting a comprehensive audit of your current data infrastructure, technology stack, team capabilities, and business processes. This gives a clear picture of where you stand today in terms of AI readiness and helps identify the foundational gaps that need to be addressed for scalable AI adoption.",
  },
  {
    key: "maturity_scoring",
    label: "Maturity Scoring & Road Mapping",
    heading: "Turn insight into a clear, actionable path forward",
    description:
      "Using industry-aligned maturity models, we score your organization across key AI-enablement dimensions. Such as data, tooling, skills, and culture. This informs the creation of a tailored, actionable roadmap that aligns AI ambition with business priorities and resource realities.",
  },
  {
    key: "use_case",
    label: "Use Case Prioritization",
    heading:
      "Focus on what matters. High-impact, high-velocity AI opportunities",
    description:
      "Not all AI opportunities are created equal. We help you surface, evaluate, and rank potential use cases based on business impact, data availability, technical feasibility, and implementation complexity. So you can focus on what truly moves the needle.",
  },
  {
    key: "capability_buildout",
    label: "Capability Buildout",
    heading: "Equip your teams, tools, and processes to drive AI success",
    description:
      "AI transformation isn’t just about tools. It’s about people, processes, and ways of working. We help build the internal capabilities and operating models needed to support AI initiatives, whether that means hiring, upskilling, designing new workflows, or rethinking team structures.",
  },
  {
    key: "change_governance",
    label: "Change Enablement & Governance",
    heading:
      "Create the structure and momentum needed for lasting transformation",
    description:
      "AI-driven change must be managed intentionally. We design and embed the right change enablement practices, governance structures, and accountability frameworks to help drive adoption, manage risk, and ensure responsible AI use across the organization.",
  },
];

const useCases = [
  {
    title: "Assess AI-Tool Fit & Integration Readiness",
    content:
      "Evaluate how well existing AI tools align with your current systems, data pipelines, and business workflows. Identify architectural gaps, integration friction, and missing prerequisites that block value realization. Build a plan to connect AI tools to the right data sources, decision points, and outcomes turning shelfware into business impact.",
  },
  {
    title: "Evaluate Build vs Buy Decisions for AI",
    content:
      "Assess internal capabilities, data assets, and time-to-value needs to determine whether building custom AI models or leveraging third-party solutions makes more sense. We guide the decision based on cost, scalability, control, and alignment with long-term AI strategy. Ensuring you invest in what drives real business value.",
  },
  {
    title: "Enable Change & Strengthen AI Governance",
    content:
      "Uncover why adoption is lagging. From lack of trust and training to poor alignment with real workflows. We help define governance structures, empower internal AI champions, and build org-wide readiness through education, incentives, and clear accountability. Drive sustainable change by aligning people, policy, and purpose.",
  },
  {
    title: "Operationalize and Scale AI Across the Enterprise",
    content:
      "Many AI pilots show early promise but stall before reaching scale. We assess what’s needed to move from prototype to production. Including process redesign, infrastructure scaling, capability alignment, and stakeholder buy-in. Build a clear path to enterprise-wide deployment that delivers repeatable, measurable impact.",
  },
  {
    title: "Map Interdependencies Across Data, Tools & Teams",
    content:
      "Identify where disconnected systems, fragmented ownership, or inconsistent data handling slow down AI progress. Create a clear view of dependencies that need to be aligned before scaling AI.",
  },
  {
    title: "Surface Data Quality & Availability Issues",
    content:
      "Analyze key data domains to uncover gaps in completeness, accuracy, consistency, and freshness. This helps determine whether the current state of data is viable for training models or enabling real-time AI experiences.",
  },
];

const scrollContentByTab = {
  ai_readiness: [
    "Assess data, infrastructure, and tools",
    "Use-Case Identification & Success Metrics",
    "Process, Infra, Governance & Team Maturity Assessment",
    "Identify critical gaps that hinder AI scaling and success",
  ],
  maturity_scoring: [
    "Score AI readiness across key pillars",
    "Benchmark vs. industry best practices",
    "Prioritize critical improvement areas",
    "Build a stepwise AI adoption roadmap",
  ],
  use_case: [
    "Map business needs to AI potential",
    "Evaluate data fit and technical viability",
    "Score use cases by value and effort",
    "Build quick wins and long-term pipeline",
  ],
  capability_buildout: [
    "Recommend team structure and skills",
    "Guide platform/tooling decisions",
    "Enable cross-functional collaboration",
    "Support partner/vendor selection",
  ],
  change_governance: [
    "Define policies for ethics and bias",
    "Establish AI governance structures",
    "Plan org-wide training and rollout",
    "Set up model monitoring and audits",
  ],
};

const Aireadiness = () => {
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
      <div className="ai-readiness-background h-auto sm:h-auto -mt-40">
        <div className="text-white">
          <div className="lg:px-10 px-4 sm:px-6 pt-40 max-w-full mx-auto">
            <div className="flex flex-col sm:flex-col items-start justify-center gap-4 lg:min-h-[500px]">
              <h1 className="text-3xl md:text-4xl lg:text-6xl sm:leading-[4.5rem] font-bold leading-tight">
                LAYING THE <br /> FOUNDATION FOR <br /> SCALABLE AI SUCCESS
              </h1>
              <p className="sm:mb-10 sm:text-base text-xs text-[#bfcadb]">
                Start where it matters. With clarity, alignment, and readiness
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
            We help organizations prepare for AI with a clear, structured
            approach, starting with <strong>readiness audits</strong> and{" "}
            <strong>maturity assessments</strong> to understand current
            capabilities.
          </p>
          <p className="text-gray-800 sm:text-xl">
            From there, we define a tailored <strong>roadmap</strong>, guide{" "}
            <strong>use case prioritization</strong>, and support{" "}
            <strong>capability building</strong> across teams. To ensure lasting
            impact, we embed <strong>change enablement</strong> and{" "}
            <strong>governance</strong> practices from day one.
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
              <h2 className="text-2xl md:text-2xl md:text-3xl font-bold mb-4 text-gray-900 uppercase">
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
                <Link className="font-bold" to={PATH.AdvisoryData}>
                  Data Advisory
                </Link>
              </span>{" "}
              to turn AI strategies into executable data foundations.
            </h2>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[400px] lg:w-[350px]">
            <Link className="font-bold" to={PATH.AdvisoryData}>
            <img
              src={icons.advisorydata_footer_hexa}
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

export default Aireadiness;
