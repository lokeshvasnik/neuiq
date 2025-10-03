import { gsap } from "gsap";
import { icons } from "../../Utils/icons";
import { useLayoutEffect, useState,useEffect  } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowDown } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const AdvisoryFormation = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [isTabletLandscape, setIsTabletLandscape] = useState(false);

  useEffect(() => {
    const checkTabletLandscape = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      return width >= 800 && width <= 1600 && width > height; // tablet width + landscape
    };

    const handleResize = () => setIsTabletLandscape(checkTabletLandscape());

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // GSAP animations only for desktop
  useLayoutEffect(() => {

    if (isMobile) {
      gsap.utils.toArray(".mobile-step").forEach((step) => {
        gsap.from(step, {
          opacity: 0,
          y: 50,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: step,
            start: "top 90%", // animate when step comes near bottom of viewport
            toggleActions: "play none none none",
          },
        });
      });

      const tlTablet = gsap.timeline({
          scrollTrigger: {
            trigger: ".mobile-step",
            start: "top 80%", 
            end: "top top",
          }
        });

        // 1️⃣ Header fade-in
        tlTablet.to(".insights-header", { opacity: 1, y: 0, duration: 0 });
    }

    // Desktop animations
    if (!isMobile) {
      let ctx = gsap.context(() => {
        const header = document.querySelector(".site-header");
        const headerHeight = header ? header.offsetHeight : 0;

        // header hide/show
        ScrollTrigger.create({
          trigger: ".pipeline",
          start: `top ${headerHeight}px`,
          end: "bottom top",
          onEnter: () => gsap.to(".site-header", { y: -50, opacity: 0, duration: 0.5 }),
          onLeaveBack: () => gsap.to(".site-header", { y: 0, opacity: 1, duration: 0.5 }),
        });

        // Timeline for desktop pinned animation
        const order = [
          { selector: ".left-top", from: { x: 100, opacity: 0 } },
          { selector: ".tall-middle", from: { x: 100, opacity: 0 } },
          { selector: ".box-1", from: { x: 100, opacity: 0 } },
          { selector: ".box-2", from: { x: isTabletLandscape ? 10 : 100, opacity: 0 } },
          { selector: ".box-4", from: { x: isTabletLandscape ? 10 : 100, opacity: 0 } },
          { selector: ".box-3", from: { x: 100, opacity: 0 } },
          { selector: ".right-bottom", from: { x: 100, opacity: 0 } },
          { selector: ".left-bottom", from: { x: 100, opacity: 0 } },
        ];

              // header animation
      gsap.to(".insights-header", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".pipeline",
          start: "top 25px",
          toggleActions: "play none none reverse",
        },
      });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".pipeline",
            start: "top top",
            end: "+=2000",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });

        order.forEach(({ selector, from }) => {
          tl.from(selector, { ...from, duration: 0.6, ease: "power2.out" });
        });
      });

      // Fix: refresh after load prod fix
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      setTimeout(refresh, 1000); // double safety

      return () => {
        ctx.revert();
        window.removeEventListener("load", refresh);
      };
    }
  }, [isMobile, isTabletLandscape]);


  // Mobile layout
  const MobileVersion = () => (
    <div className="flex flex-col gap-5 px-5">

      {/* Row 1 */}
      <div className="step left-top mobile-step rounded-lg">
        <div className="step w-full rounded-lg">
          <div>
            <img className="w-64 mx-auto" src={icons.caseStudyPeople} alt="" />
          </div>
          <div className="flex">
            <div className="text-white text-base md:text-center md:mx-auto">
              <div className="mb-4">
                <h2 className="font-bold">Formation of AI Enablement Team</h2>
                <p>Identify stakeholders
                  Defile roles and governance
                </p>
              </div>
              <div>
                <h2 className="font-bold">Conducting Stakeholder Workshops</h2>
                <p>Organise workshops Use SWOT, brainstorming
                  Align on AI strateg</p>
              </div>
              <div>
                <FaArrowDown className="mx-auto" color="#fff" size={34} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="step tall-middle mobile-step rounded-lg row-span-1">
        <div className="step w-full rounded-lg">
          <div>
            <img className="w-full md:w-2/4 md:mx-auto" src={icons.assessing_current_state_and_gaps_mobile} alt="" />
          </div>
          <div className="flex">
            <div className="text-white text-base md:text-center md:mx-auto">
              <div className="mb-4">
                <h2 className="font-bold">Assessing Current State and Gaps</h2>
                <p>Evaluate data / tools / processes
                  Identify skill and tech gaps
                  Assess data suitability
                </p>
              </div>
              <div>
                <h2 className="font-bold">Prioritizing Use Cases</h2>
                <p>Use feasibility matrix
                  Evaluate impact & ROI
                  Refine & select use cases
                </p> <br />
              </div>
              <div>
                <h2 className="font-bold">Mapping Use Cases to Data & Tools</h2>
                <p>
                  Identify data sources
                  Determine tools
                  Create mapping documents
                </p>
              </div>
              <div>
                <FaArrowDown className="mx-auto" color="#fff" size={34} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="step box-1 mobile-step rounded-lg">
        <div className="step w-full rounded-lg flex justify-center items-center">
          <div className="flex">
            <div className="text-white text-base mt-5 md:text-center">
              <h2 className="font-bold">Transition to Data Engineering</h2>
              <p>
                Knowledge transfer
                Collaborate on pipeline/model design
                Set feedback channels
              </p>
              <div>
                <FaArrowDown className="mx-auto my-4" color="#fff" size={34} />
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="step box-2 mobile-step rounded-lg">
        <div className="step w-full rounded-lg flex justify-center items-center flex-col">
          <div className="text-white text-base md:text-center md:mx-auto">
            <h2 className="font-bold">Initial Review of Use Cases (Data Eng.)</h2>
            <p>
              Kick-off with enablement team
              Document requirements and sources
              Identify stakeholders
            </p>
            <div>
              <FaArrowDown className="mx-auto my-4" color="#fff" size={34} />
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="step box-4 mobile-step  rounded-lg">
        <div className="step w-full rounded-lg">
          <div className="relative">
            <img className="w-full md:w-2/4 md:mx-auto" src={icons.formationOfAIEnablement} alt="" />
          </div>
          <div className="flex">
            <div className="text-white text-base mt-2 md:text-center md:mx-auto">
              <div className="mb-4">
                <h2 className="font-bold">Formation of AI Enablement Team</h2>
                <p>Identify stakeholders
                  Defile roles and governance
                </p>
              </div>
              <div>
                <h2 className="font-bold">Conducting Stakeholder Workshops</h2>
                <p>Organise workshops Use SWOT, brainstorming
                  Align on AI strateg</p>
              </div>
              <div>
                <FaArrowDown className="mx-auto" color="#fff" size={34} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="step right-bottom mobile-step rounded-lg">
        <div className="step w-full rounded-lg">
          <div className="relative">
            <img className="w-full md:w-2/4 md:mx-auto" src={icons.model_readiness_assessment} alt="" />
            <div className="absolute left-[-75px] top-10">
              {/* <img className="fill-white text-white w-20" src={icons.left_arrow} alt="" /> */}
            </div>
          </div>
          <div className="flex">
            <div className="text-white text-base md:text-center md:mx-auto">
              <div className="mb-4">
                <h2 className="font-bold">Model Readiness Assessment</h2>
                <p>
                  Feature engineering
                  Validate format & completeness
                  Finalise dataset
                </p>
              </div>
              <div>
                <FaArrowDown className="mx-auto" color="#fff" size={34} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="step box-3 mobile-step rounded-lg">
        <div className="step w-full rounded-lg">
          <div className="relative">
            <img className="w-full md:w-2/4 md:mx-auto" src={icons.data_quality_checks_mobile} alt="data_quality_checks" />

            <div className="absolute left-[-60px] top-52">
              {/* <img className="fill-white text-white w-16" src={icons.left_arrow} alt="" /> */}
            </div>
          </div>
          <div className="flex">
            <div className="text-white text-base md:text-center md:mx-auto">
              <div className="mb-4">
                <h2 className="font-bold">Data Quality Checks</h2>
                <p>
                  Define metrics & rules Automate checks Resolve issues
                </p>
              </div>
              <div>
                <FaArrowDown className="mx-auto" color="#fff" size={34} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="step left-bottom mobile-step rounded-lg">
        <div className="step w-full rounded-lg">
          <div className="flex flex-col items-center">
            {/* Top Row */}
            <div className="flex">
              <div className="flex flex-col items-center">
                <img src={icons.ai_bot} className="w-32 h-32 object-contain" alt="ai_bot" />
              </div>
              <div className="flex flex-col items-center">
                <img src={icons.ai_bot} className="w-32 h-32 object-contain" alt="ai_bot" />
              </div>
            </div>

            {/* Bottom Row */}
            <div className="">
              <div className="flex flex-col items-center">
                <img src={icons.ai_bot} className="w-32 h-32 -mt-12 object-contain" alt="ai_bot" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );

  // Desktop layout
  const DesktopVersion = () => (
    <div className="grid grid-cols-4 grid-rows-2 gap-6 w-full h-full p-6">

      {/* Row 1 */}
      <div className="step left-top  rounded-lg text-white">
        <div className="step w-full rounded-lg">
          <div>
            <img src={icons.caseStudyPeople} alt="" />
          </div>
          <div className="flex">
            <div className="text-white text-xs">
              <div className="mb-4">
                <h2 className="font-bold">Formation of AI Enablement Team</h2>
                <p>Identify stakeholders
                  Defile roles and governance
                </p>
              </div>
              <div>
                <h2 className="font-bold">Conducting Stakeholder Workshops</h2>
                <p>Organise workshops Use SWOT, brainstorming
                  Align on AI strateg</p>
              </div>
            </div>
            <div>
              <img className="fill-white text-white w-40" src={icons.right_arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="step tall-middle  rounded-lg text-white row-span-1">
        <div className="step w-full rounded-lg">
          <div className="w-44">
            <img src={icons.assessing_current_state_and_gaps} alt="" />
          </div>
          <div className="flex">
            <div className="text-white text-xs">
              <div className="mb-4">
                <h2 className="font-bold">Assessing Current State and Gaps</h2>
                <p>Evaluate data / tools / processes
                  Identify skill and tech gaps
                  Assess data suitability
                </p>
              </div>
              <div>
                <h2 className="font-bold">Prioritizing Use Cases</h2>
                <p>Use feasibility matrix
                  Evaluate impact & ROI
                  Refine & select use cases
                </p> <br />
              </div>
              <div>
                <h2 className="font-bold">Mapping Use Cases to Data & Tools</h2>
                <p>
                  Identify data sources
                  Determine tools
                  Create mapping documents
                </p>
              </div>
            </div>
            <div>
              <img className="fill-white text-white w-40 -mt-24" src={icons.right_arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="step box-1  rounded-lg text-white">
        <div className="step w-full rounded-lg flex justify-center items-center">
          <div className="flex">
            <div className="text-white text-xs mt-5">
              <h2 className="font-bold">Transition to Data Engineering</h2>
              <p>
                Knowledge transfer
                Collaborate on pipeline/model design
                Set feedback channels
              </p>
            </div>
            <div>
              <img className="fill-white text-white w-40" src={icons.right_arrow} alt="" />
            </div>
          </div>

        </div>
      </div>
      <div className="step box-2  rounded-lg text-white">
        <div className="step w-full rounded-lg flex justify-center items-center flex-col">
          <div className="text-white text-xs">
            <h2 className="font-bold">Initial Review of Use Cases (Data Eng.)</h2>
            <p>
              Kick-off with enablement team
              Document requirements and sources
              Identify stakeholders
            </p>
          </div>
          <div>
            <img className="fill-white text-white w-20" src={icons.down_arrow} alt="" />
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="step left-bottom rounded-lg text-white">
        <div className="step w-full rounded-lg mt-0">
          <div className="flex flex-col items-center ml-14 -space-y-10">
            {/* Top Row */}
            <div className="flex -space-x-10">
              <div className="flex flex-col items-center">
                <img src={icons.ai_bot} className="w-32 h-32 object-contain" alt="ai_bot" />
              </div>
              <div className="flex flex-col items-center">
                <img src={icons.ai_bot} className="w-32 h-32 object-contain" alt="ai_bot" />
              </div>
            </div>

            {/* Bottom Row */}
            <div className="">
              <div className="flex flex-col items-center">
                <img src={icons.ai_bot} className="w-32 h-32 object-contain" alt="ai_bot" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="step right-bottom  rounded-lg text-white mt-20">
        <div className="step w-64 rounded-lg">
          <div className="relative">
            <img src={icons.model_readiness_assessment} alt="" />
            <div className="absolute left-[-75px] top-10">
              <img className="fill-white text-white w-20" src={icons.left_arrow} alt="" />
            </div>
          </div>
          <div className="flex">
            <div className="text-white text-xs">
              <div className="mb-4">
                <h2 className="font-bold">Model Readiness Assessment</h2>
                <p>
                  Feature engineering
                  Validate format & completeness
                  Finalise dataset
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="step box-3  rounded-lg text-white -mt-36">
        <div className="step w-full rounded-lg">
          <div className="relative">
            <img src={icons.data_quality_checks} alt="" />

            <div className="absolute left-[-60px] top-52">
              <img className="fill-white text-white w-16" src={icons.left_arrow} alt="" />
            </div>
          </div>
          <div className="flex">
            <div className="text-white text-xs">
              <div className="mb-4">
                <h2 className="font-bold">Data Quality Checks</h2>
                <p>
                  Define metrics & rules
                  Automate checks
                  Resolve issues
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="step box-4  rounded-lg text-white -mt-40">
        <div className="step w-full rounded-lg">
          <div className="relative">
            <img src={icons.formationOfAIEnablement} alt="" />
            <div className="absolute left-[-60px] top-24">
              <img className="fill-white text-white w-20" src={icons.left_arrow} alt="" />
            </div>
          </div>
          <div className="flex">
            <div className="text-white text-xs mt-2">
              <div className="mb-4">
                <h2 className="font-bold">Formation of AI Enablement Team</h2>
                <p>Identify stakeholders
                  Defile roles and governance
                </p>
              </div>
              <div>
                <h2 className="font-bold">Conducting Stakeholder Workshops</h2>
                <p>Organise workshops Use SWOT, brainstorming
                  Align on AI strateg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="pipeline md:h-screen w-full bg-black md:pb-40">
      <div className="max-w-full mx-auto px-4 lg:px-10">
        <h2 className="insights-header uppercase md:opacity-0 md:-translate-y-6 text-white mb-6 w-full max-w-[900px] mx-auto text-center text-lg md:text-xl font-bold sticky top-0 bg-[#3a3a3a] py-2 z-10">
          AI Adoption framework to be deployed
        </h2>
      </div>

    {isMobile ? <MobileVersion /> : <DesktopVersion />}
    </section>
  );
};

export default AdvisoryFormation;
