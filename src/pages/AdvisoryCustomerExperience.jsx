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
            <p className="text-sm sm:text-base text-black-700 mt-4 max-w-3xl">
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
    heading: "Uncover what truly drives customer decisions",
    description:
      "Gain a deep understanding of your customers’ evolving needs, expectations, and pain points across every interaction. We help you identify high-impact journeys and untapped opportunities that drive loyalty and growth.",
  },
  {
    key: "maturity_scoring",
    label: "Design",
    heading: "Craft intentional journeys with empathy at the core",
    description:
      "Translate insights into intentional experience design. We co-create journey maps, personas, and service blueprints that bring consistency, personalization, and empathy across all channels.",
  },
  {
    key: "use_case",
    label: "Measure",
    heading: "Track what matters, not just what’s easy",
    description:
      "Establish CX metrics and governance models that align with business goals. From NPS and CSAT to operational KPIs, build measurement frameworks that track performance, value, and ROI.",
  },
  {
    key: "capability_buildout",
    label: "Analyze",
    heading: "Connect signals to root causes",
    description:
      "Go beyond scores to uncover the “why” behind customer behavior. Leverage text analytics, sentiment mapping, and voice-of-customer insights to identify what to fix and what to double down on.",
  },
  {
    key: "change_governance",
    label: "Elevate",
    heading: "Continuously improve and differentiate through CX",
    description:
      "Move from reactive to proactive CX management. Prioritize strategic initiatives, embed experience principles in operations, and scale what delights.",
  },
];

const useCases = [
  {
    title: "Redesign Key Journeys to Improve Retention",
    content:
      "Audit and redesign high-impact customer journeys, such as onboarding, support, or renewals. To reduce friction, close experience gaps, and foster long-term loyalty in a competitive market.",
  },
  {
    title: "Build a Unified Voice of Customer Program",
    content:
      "Move beyond isolated feedback tools. Design an integrated VoC system that aggregates insights from surveys, support tickets, social listening, and CRM to uncover deeper patterns and guide CX improvements.",
  },
  {
    title: "Define a CX Measurement Framework Across Channels",
    content:
      "Establish a consistent and business-aligned approach to measure CX across digital, physical, and service touchpoints. Move from vanity metrics to actionable KPIs tied to outcomes like churn reduction and increased share-of-wallet.",
  },
  {
    title: "Link Customer Experience to Business Value",
    content:
      "Connect the dots between improved customer satisfaction and financial impact. Attribute business results like revenue growth, cost savings, or reduced acquisition costs directly to CX initiatives.",
  },
  {
    title: "Improve Consistency Across Multi-Channel Experiences",
    content:
      "Assess and resolve inconsistencies in how customers experience your brand across web, app, contact center, and in-person channels. Ensure a seamless and coherent journey, no matter where the interaction starts.",
  },
  {
    title: "Operationalize Customer Centricity at Scale",
    content:
      "Embed CX thinking into daily operations, governance, and culture. Design playbooks, training modules, and cross-functional workflows that empower every team to deliver better experiences continuously.",
  },
];

const scrollContentByTab = {
  ai_readiness: [
    "Identify Customer Pain points",
    "Define goals for engagement and loyalty",
    "Build CX frameworks aligned with business goals",
    "Establish governance for program success",
  ],
  maturity_scoring: [
    "Omnichannel Listening ",
    "Map key customer journeys",
    "Design programs across touchpoints",
    "Track KPIs via live dashboards",
  ],
  use_case: [
    "Structured data insights (NPS, CSAT etc.) ",
    "Set up closed-loop feedback systems",
    "Trigger real-time alerts and actions",
    "Track resolution outcomes",
  ],
  capability_buildout: [
    "Decode unstructured customer feedback",
    "Apply sentiment and emotion analytics",
    "Combine data for holistic insights",
  ],
  change_governance: [
    "Assess and optimize digital touchpoints",
    "Manage brand reputation proactively",
    "Use insights to enhance service delivery",
  ],
};

const AdvisoryCustomerExperience = () => {
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
      <div className="advisory-customer-herobanner h-auto sm:h-auto -mt-40">
        <div className="text-white">
          <div className="lg:px-10 px-4 sm:px-6 pt-40 max-w-full mx-auto">
            <div className="flex flex-col sm:flex-col items-start justify-center gap-4 lg:min-h-[500px]">
              <h1 className="text-3xl md:text-4xl lg:text-6xl sm:leading-[4.5rem] font-bold leading-tight">
                DESIGN THE <br /> EXPERIENCES YOUR <br /> CUSTOMERS REMEMBER
              </h1>
              <p className="sm:mb-10 sm:text-base text-xs text-[#bfcadb]">
                Turn moments into momentum by intentionally shaping every
                customer interaction, from first touch to lifelong loyalty.
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
        <div className="w-full lg:w-[65%] mb-6">
          <p className="mb-4 text-gray-800 sm:text-xl">
            Our Customer Experience Advisory helps enterprises{" "}
            <strong>decode</strong> what their{" "}
            <strong>
              customers value, identify friction across journeys, and transform
              insights into impact.{" "}
            </strong>
          </p>
          <p className="text-gray-800 sm:text-xl">
            We guide CX leaders from discovery to design, measurement, and
            continuous optimization. Turning customer interactions into growth
            levers.
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
              <h2 className="text-3xl font-bold mb-4 text-gray-900 uppercase">
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
                       <Link className="font-bold" to={PATH.AdvisoryUserExperience}>
                         User Experience Advisory
                       </Link>
                     </span>{" "}
                     to bring seamless design into customer journeys.
                   </h2>
                 </div>
       
                 {/* Image Section */}
                 <div className="w-full md:w-[400px] lg:w-[350px]">
                  <Link className="font-bold" to={PATH.AdvisoryUserExperience}>
                   <img
                     src={icons.advisoryuser_footer_hexa}
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

export default AdvisoryCustomerExperience;
