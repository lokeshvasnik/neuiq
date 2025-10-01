import { useLayoutEffect, useState } from "react";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { icons } from "../../Utils/icons";
import gsap from "gsap";
import Lenis from "lenis";

import imagesLoaded from "imagesloaded";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const teamMembersAI = [
  {
    name: "AI Strategist",
    // role: "AI Strategy Consultant",
    description:
      "Conducts AI maturity assessments, defines adoption roadmap, prioritizes high-impact use cases.",
    image: icons.ai_strategy_consultant,
  },
  {
    name: "Functional AI Champions",
    // role: "Functional AI Champions",
    description:
      "Represent Product, Marketing, Ops, etc., tailoring AI applications to each domain’s needs.",
    image: icons.functional_ai_champions,
  },
  {
    name: "Technical Solutions Architect", // added role
    // role: "Technical Solutions Architect",
    description:
      "Designs scalable frameworks for integrating AI tools with internal systems and data pipelines.",
    image: icons.technical_solutions_architect,
  },
  {
    name: "AI Engineer",
    // role: "AI Engineer",
    description:
      "Focuses on designing and developing AI models and algorithms to solve specific problems.",
    image: icons.ai_engineer,
  },
  {
    name: "Data Scientist",
    // role: "Data Scientist",
    description:
      "Analyzes complex data sets to extract insights and inform decision-making, utilizing statistical and machine learning techniques.",
    image: icons.data_scientist,
  },
  {
    name: "MLOps Engineer", // added role
    // role: "MLOps Engineer",
    description:
      "Bridges the gap between development and operations, ensuring the smooth deployment, monitoring, and maintenance of machine learning models in production.",
    image: icons.mlops_engineer,
  },
  {
    name: "Business Systems Analyst/Project Manager (BSA/PM)", // added role
    // role: "Business Systems Analyst/Project Manager (BSA/PM)",
    description:
      "Serves as a liaison between technical teams and stakeholders, managing project timelines and ensuring that business requirements are met throughout the project lifecycle.",
    image: icons.business_systems_analyst_project_manager,
  },
];

const teamMembersData = [
  {
    name: "Data Architect",
    // role: "AI Strategy Consultant",
    description:
      "Design the overall data infrastructure and architecture. Define data storage, processing frameworks, and system integrations.- Ensure scalability, security, and compliance.",
    image: icons.dataExpertOne,
  },
  {
    name: "ETL Engineer",
    // role: "Functional AI Champions",
    description:
      "Design, implement, and maintain ETL pipelines. Transform and load data from various sources into data warehouses. Optimize ETL processes for performance.",
    image: icons.dataExpertTwo,
  },
  {
    name: "Data Engineer", // added role
    // role: "Technical Solutions Architect",
    description:
      "Build and maintain data lakes. Develop solutions for data integration and automation. Ensure data quality and integrity.",
    image: icons.dataExpertThree,
  },
  {
    name: "QA Lead",
    // role: "AI Engineer",
    description:
      "Develop testing strategy and enforce quality standards for data processes. Implement automated testing frameworks for data pipelines. Oversee QA activities to ensure defect-free deployments.",
    image: icons.dataExpertFour,
  },
  {
    name: "Scrum Master",
    // role: "Data Scientist",
    description:
      "Facilitate Agile ceremonies (stand-ups, retrospectives, sprint planning). Ensure adherence to Agile principles and remove team roadblocks. Track and report progress on deliverables.",
    image: icons.dataExpertFive,
  },
  {
    name: "DevOps Engineer", // added role
    // role: "MLOps Engineer",
    description:
      "Implement CI/CD pipelines for data engineering workflows. Automate deployment processes and manage infrastructure. Monitor system performance and reliability.",
    image: icons.dataExpertSix,
  },
  {
    name: "BI Analyst", // added role
    // role: "Business Systems Analyst/Project Manager (BSA/PM)",
    description:
      "Develop dashboards and reports for end-users. Translate business requirements into actionable data insights. Collaborate with stakeholders to ensure the usability of data products.",
    image: icons.dataExpertSeven,
  },
];

const teamMembersTechAndXM = [
  {
    name: "Platform Specialist",
    // role: "AI Strategy Consultant",
    description:
      "Implement and configures platforms (Qualtrics, ServiceNow, Hyper Science etc.)",
    image: icons.techExpertOne,
  },
  {
    name: "Integration & Automation Engineer",
    // role: "Functional AI Champions",
    description:
      "Builds bridges across systems using APIs and middleware. Also, Implements bots and process automations",
    image: icons.techExpertTwo,
  },
  {
    name: "CX & UX Consultants", // added role
    // role: "Technical Solutions Architect",
    description:
      "Maps current-state vs. ideal-state journeys, design VOC programs, Leads qualitative and quantitative user testing etc",
    image: icons.techExpertThree,
  },
  {
    name: "Customer Insights Analyst",
    // role: "AI Engineer",
    description:
      "Analyzes behavior, feedback, and journey data (Qualtrics, UserTesting, Dscout etc.)",
    image: icons.techExpertFour,
  },
];

// --- Reusable Component ---
const MemberSection = ({ title, description, members }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % members.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [members.length]);

  const activeMember = members[activeIndex];

  return (
    <div className="custom-card">
      <div className="flex flex-col lg:flex-row gap-4 p-3 md:p-8 rounded-xl bg-[#3A3A3A]">
        {/* Left Side */}
        <div className="flex-1 bg-[#1e1e1e] rounded-xl p-4 md:p-6">
          <h2 className="text-xl md:text-3xl font-bold mb-4">{title}</h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">{description}</p>
        </div>

        {/* Right Side */}
        <div className="md:flex-[2] bg-[#1e1e1e] rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 md:gap-6 h-[450px] md:h-auto">
          {/* Auto-Scroll Members */}
          <div className="w-full max-w-md mx-auto overflow-hidden relative group h-[250px] md:h-[350px]">
            <div className="flex flex-col gap-4 animate-scroll-up group-hover:[animation-play-state:paused]">
              {[...members, ...members].map((member, index) => {
                const actualIndex = index % members.length;
                const isActive = activeIndex === actualIndex;
                return (
                  <button
                    key={index}
                    onMouseEnter={() => setActiveIndex(actualIndex)}
                    className={`relative flex items-center gap-4 p-1 md:p-4 pr-8 rounded-xl border transition-all duration-300
                      ${isActive ? "bg-white shadow-md border-cyan-500" : "bg-gray-100 border-gray-300"}`}
                  >
                    <img src={member.image} alt={member.name} className="w-12 h-12 rounded-full object-cover" />
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-800 text-sm md:text-base">{member.name}</h4>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Description */}
          <div className="bg-[#3A3A3A]/80 text-gray-200 rounded-xl p-3 md:p-6 flex items-center">
            <p className="text-sm md:text-base">{activeMember.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardStack = () => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    // Check if the screen width is 800px or less
    const checkScreen = () => setIsMobile(window.innerWidth <= 800);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useLayoutEffect(() => {
    if (isMobile) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    let ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Desktop view starts only on screens wider than 800px
        "(min-width: 801px)": function () {
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".cards",
              pin: true,
              pinSpacing: true,
              start: "top-=50px top",
              end: "+=1800",
              scrub: 1,
            },
          });

          tl.to(document.querySelector(".site-header"), { y: -50, opacity: 0, duration: 0.5, ease: "power2.inOut" });
          tl.addLabel("card1");
          tl.to(".card1", { scale: 0.925, yPercent: -1.5, opacity: 0.9, duration: 1 }, "-=0.6");
          tl.from(".card2", { yPercent: 75, opacity: 0, duration: 1.2 });
          tl.addLabel("card2");
          tl.to(".card2", { scale: 0.95, yPercent: -1.125, opacity: 0.9, duration: 1 }, "-=0.6");
          tl.to(".card2", { yPercent: 0, opacity: 1, duration: 1 });
          tl.from(".card3", { yPercent: 75, opacity: 0, duration: 1.2 });
          tl.addLabel("card3");
          tl.to(".card3", { yPercent: 0, opacity: 1, duration: 1 });
        },
      });
    });

    const refreshScrollTrigger = () => requestAnimationFrame(() => ScrollTrigger.refresh());
    const cardsContainer = document.querySelector(".cards");

    const imgLoadInstance = cardsContainer ? imagesLoaded(cardsContainer, refreshScrollTrigger) : null;

    window.addEventListener("load", refreshScrollTrigger);
    const timeout = setTimeout(refreshScrollTrigger, 1000);

    return () => {
      ctx.revert();
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      window.removeEventListener("load", refreshScrollTrigger);
      timeout && clearTimeout(timeout);
      imgLoadInstance && imgLoadInstance.off("done", refreshScrollTrigger);
    };
  }, [isMobile]);

  return (
    <section className="bg-black">
      <div className="text-white py-5 md:pt-20 md:pb-10">
        <div className="max-w-full mx-auto px-4 lg:px-10">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">
            THE EXPERTS BEHIND <br /> THE EXECUTION
          </h1>
        </div>
      </div>

      <div className="max-w-full mx-auto px-2 lg:px-10">
        {isMobile ? (
          // ✅ Mobile & Tablet: Swiper Carousel
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="news-swiper md:!py-12"
            modules={[Pagination]}
          >
            <SwiperSlide>
              <MemberSection
                title="AI"
                description="Our AI solutions are powered by a team of seasoned data scientists, engineers, and domain experts who turn bold ideas into real-world results."
                members={teamMembersAI}
              />
            </SwiperSlide>
            <SwiperSlide>
              <MemberSection
                title="DATA"
                description="Our Data Engineering services are driven by a skilled team of architects, engineers, and analysts who build the foundations for intelligent enterprise data."
                members={teamMembersData}
              />
            </SwiperSlide>
            <SwiperSlide>
              <MemberSection
                title="TECH & XM"
                description="Our Tech & Experience Management specialists bring together platform expertise, seamless integration, and deep customer understanding."
                members={teamMembersTechAndXM}
              />
            </SwiperSlide>
          </Swiper>
        ) : (
          // ✅ Desktop: GSAP Stacked Cards
          <div className="cards">
            <div className="custom-card card1">
              <MemberSection
                title="AI"
                description="Our AI solutions are powered by a team of seasoned data scientists, engineers, and domain experts who turn bold ideas into real-world results."
                members={teamMembersAI}
              />
            </div>
            <div className="custom-card card2">
              <MemberSection
                title="DATA"
                description="Our Data Engineering services are driven by a skilled team of architects, engineers, and analysts who build the foundations for intelligent enterprise data."
                members={teamMembersData}
              />
            </div>
            <div className="custom-card card3">
              <MemberSection
                title="TECH & XM"
                description="Our Tech & Experience Management specialists bring together platform expertise, seamless integration, and deep customer understanding."
                members={teamMembersTechAndXM}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CardStack;