import { useEffect, useState } from "react";

const titles = [
  {
    title: <>WHY IT<br />MATTERS</>,
    points: [
      "Powers real-time insights and automation",
      "Enables scalable AI and ML pipelines",
      "Critical to CX, operations, and personalization",
      "Unlocks business agility through trusted data",
      "No AI success without data readiness"
    ]
  },
  {
    title: <>BARRIERS TO <br /> TRANSFORMATION</>,
    points: [
      "Fragmented data sources and legacy systems",
      "High technical debt, low automation",
      "Poor data quality and governance gaps",
      "Talent shortage in modern data tooling",
      "Lack of agility to support business velocity"
    ]
  },
  {
    title: <>MAKING DATA <br /> IMPACTFUL</>,
    points: [
      "Deliver analytics and AI at scale",
      "Align data products to business needs",
      "Enable faster decisions with trusted data",
      "Automate ingestion, transformation, and orchestration",
      "Build a future-ready, modular data stack",
    ]
  },
];

const WhyItMatters = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Auto-advance only when not hovering
  useEffect(() => {
    if (hoveredIndex === null) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % titles.length);
      }, 2200);
      return () => clearInterval(interval);
    }
  }, [hoveredIndex]);

  const currentActiveIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  return (
    <section className="relative w-full overflow-hidden text-white bg-black py-10 lg:pt-20">
      <section className="">
        <div className="max-w-full mx-auto px-4 lg:px-10">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">
            ENGINEERING DATA <br /> FOR BUSINESS IMPACT
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <div className="relative z-20 flex flex-col sm:flex-row place-content-center mt-16">
          {titles.map((item, index) => (
            <div
              key={index}
              className={`sm:flex-1 flex items-center justify-center 
          py-2 sm:py-0 sm:pb-14
          ${index < titles.length - 1 ? "vertical-gradient-border after:h-full" : ""} 
          group relative overflow-hidden transition-all duration-500`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transition: "transform 0.5s, box-shadow 0.5s",
              }}
            >
              {/* Hover Glow */}
              <div
                className={`absolute inset-0 transition duration-500 z-0
            ${currentActiveIndex === index ? "opacity-100 bg-[radial-gradient(circle_at_bottom,#1ce3dcb5_0%,#0C0C2C_60%,#01010A_100%)]" : "opacity-0"}
            group-hover:opacity-100 group-hover:bg-[radial-gradient(circle_at_bottom,#1ce3dcb5_0%,#0C0C2C_60%,#01010A_100%)]`}
              />

              {/* Content */}
              <div className="flex flex-col items-start text-left transition-colors duration-300 relative z-10 w-full px-6">
                <h3 className={`mb-6 w-full text-center text-lg font-bold sm:text-xl lg:text-2xl xl:text-3xl text-gray-400 group-hover:text-white ${currentActiveIndex === index ? "text-white" : "text-gray-400"} transition-colors duration-300`}>
                  {item.title}
                </h3>

                <div className="overflow-hidden h-[120px] sm:h-[180px] relative w-full">
                  <ul className="group-hover:animate-none space-y-4 pl-5">
                    {[...item.points, ...item.points].map((point, i) => (
                      <li
                        key={i}
                        className={`list-disc transition-colors duration-300
                  ${currentActiveIndex === index ? "text-white" : "text-gray-400"}
                  group-hover:text-white`}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyItMatters