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
    label: "Data Collection & Integration",
    heading: "Capture the right data and connect the dots",
    description:
      "Organizations need to gather the right types of data. Structured, unstructured, real-time, or historical from relevant sources. And streamline the process of preparing data for your AI applications, ensuring consistency, accuracy, and scalability across your datasets. ",
  },
  {
    key: "maturity_scoring",
    label: "Data Architecture & Storage",
    heading:
      "Design infrastructure that supports scale, speed, and experimentation",
    description:
      "AI workloads demand a flexible and scalable architecture that enables high-speed access, version control, reproducibility, and experimentation. All while keeping costs manageable and governance intact.",
  },
  {
    key: "use_case",
    label: "Data Labeling & Annotation",
    heading: "Make your data learnable and useful for AI",
    description:
      "Supervised models rely on labeled data to learn accurately. Organizations must prioritize high-quality, domain-relevant annotations. Especially for text, images, speech, and proprietary content types.",
  },
  {
    key: "capability_buildout",
    label: "Monitoring & Improvement",
    heading: "Treat data as a living asset that evolves with AI",
    description:
      "Even the best-trained models degrade over time. To sustain performance, organizations need feedback loops to monitor data drift, re-label datasets, and continuously improve training data pipelines.",
  },
];

const useCases = [
  {
    title: "Prepare Enterprise Text Data for Generative AI Use",
    content:
      "Organizations are sitting on massive volumes of unstructured documents, from emails and PDFs to chats and reports. Structuring, cleaning, and tagging this data unlocks its value for use in RAG systems, chatbots, and internal copilots.",
  },
  {
    title: "Enable Responsible AI Through Transparent Data Lineage",
    content:
      "Traceable data flows and labeled datasets are essential for model explainability, auditability, and bias mitigation. Organizations must prioritize lineage, annotation, and documentation to build trustworthy AI systems.",
  },
  {
    title: "Modernize Data Infrastructure to Support Model Training",
    content:
      "AI workloads especially training and fine-tuning require scalable, parallel-access storage and performant data pipelines. Rebuilding infrastructure to serve AI-native formats and compute needs is key to scalability.",
  },
  {
    title: "Build a Feedback Loop for Continuous Data Refresh",
    content:
      "As user behavior changes, so does model performance. A feedback loop that connects model output to user input, re-labels edge cases, and retrains with updated data ensures AI stays useful and accurate over time.",
  },
  {
    title: "Label Domain-Specific Data to Fine-Tune Pretrained Models",
    content:
      "Generic models often lack industry or context-specific accuracy. Labeling internal call transcripts, images, or support tickets enables fine-tuning to increase relevance and reduce hallucination in model outputs.",
  },
  {
    title: "Detect and Resolve Data Drift Across AI Pipelines",
    content:
      "As new data flows in, distribution shifts can erode model performance. Detecting data drift across input features or target variables helps preempt model decay and supports proactive data quality interventions.",
  },
];

const scrollContentByTab = {
  ai_readiness: [
    "Identify high-value internal and external data sources",
    "Automate ingestion pipelines",

    "Ensure format consistency and metadata tagging",

    "Integrate across legacy and modern systems",
  ],
  maturity_scoring: [
    "Use lakehouse or hybrid storage models",

    "Enable data versioning for ML workflows",

    "Ensure support for batch and streaming data",

    "Optimize for access patterns (e.g., training vs inference)",
  ],
  use_case: [
    "Define clear labeling guidelines",

    "Use a mix of human and assisted labeling",

    "Establish annotation quality checks",

    "Maintain task-specific annotation schemas",
  ],
  capability_buildout: [
    "Set up data drift detection mechanisms",

    "Track model performance against data changes",

    "Incorporate user feedback into datasets",

    "Schedule re-labeling and pipeline retraining",
  ],
};

const DataforAI = () => {
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
      <div className="dataforai-herobanner h-auto sm:h-auto -mt-40">
        <div className="text-white">
          <div className="lg:px-10 px-4 sm:px-6 pt-40 max-w-full mx-auto">
            <div className="flex flex-col sm:flex-col items-start justify-center gap-4 lg:min-h-[500px]">
              <h1 className="text-3xl md:text-5xl lg:text-6xl sm:leading-[4.5rem] font-bold leading-tight">
                BUILD DATA FOUNDATIONS <br /> THAT MAKE AI WORK
              </h1>
              <p className="sm:mb-10 sm:text-base text-xs text-[#bfcadb]">
                Make your data AI-ready through clean pipelines, smart
                architecture, high-quality <br /> labels, and continuous
                feedback loops.
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
            Great AI outcomes start with great data. But raw, fragmented, or
            unlabeled data can’t fuel intelligent systems.
          </p>
          <p className="text-gray-800 sm:text-xl">
            “Data for AI” focuses on{" "}
            <strong>
              preparing data assets so they’re structured, contextualized, and
              scalable.
            </strong>{" "}
            Enabling AI models to learn better, perform reliably, and evolve
            over time. This is where most AI efforts break and where success
            quietly begins.
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
                <Link className="font-bold" to={PATH.DatatoInsights}>
                  Data to Insights
                </Link>
              </span>{" "}
              to see how AI-ready data translates into real business outcomes.
            </h2>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[400px] lg:w-[350px]">
            <Link className="font-bold" to={PATH.DatatoInsights}>
            <img
              src={icons.datainsight_footer_hexa}
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

export default DataforAI;
