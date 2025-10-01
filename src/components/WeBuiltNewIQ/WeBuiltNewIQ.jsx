import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { div } from "framer-motion/client";

gsap.registerPlugin(ScrollTrigger);

const WeBuiltNewIQ = () => {
  const sectionRef = useRef(null);
  const potentialRef = useRef(null);
  const performanceRef = useRef(null);
  const toRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768; // Tailwind's md breakpoint

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".why-we-built",
          start: "top 85%",
          end: "bottom",
          scrub: !isMobile, // scrub only on desktop
        },
        defaults: { ease: "power3.out" },
      });

      if (isMobile) {
        // simpler animation for mobile
        tl.fromTo(
          [potentialRef.current, performanceRef.current, toRef.current, descriptionRef.current],
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.2 }
        );
      } else {
        // full animation for desktop
        tl.fromTo(potentialRef.current, { x: "-200%", opacity: 0 }, { x: "0%", opacity: 1 })
          .fromTo(performanceRef.current, { x: "200%", opacity: 0 }, { x: "0%", opacity: 1 }, "<")
          .fromTo(toRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1 }, "<0.1")
          .fromTo(descriptionRef.current, { opacity: 0 }, { opacity: 1 }, "<");
      }
    });

    return () => ctx.revert();
  }, []);




  return (
    <section className="h-full">
      <div
        className="why-we-built bg-black text-white lg:px-10 lg:py-20 px-4 py-10 max-w-full mx-auto text-center overflow-hidden"
      >
        <div>
          <h2 className="text-xl sm:text-3xl font-bold mb-4">
            THAT'S WHY WE BUILT NeuIQ
            {/* <span className="text-[#00cacf]">NeuIQ</span> */}
          </h2>
          <p className="text-base sm:text-lg mb-6 max-w-3xl mt-2 mx-auto">
            We're here to close that gap. Turning AI from...
          </p>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center lg:flex-row lg:items-end md:justify-center lg:ml-24 gap-4 sm:gap-10">
            <h1
              ref={potentialRef}
              className="text-3xl sm:text-6xl font-bold text-[#00cacf]"
            >
              POTENTIAL
            </h1>

            <span
              ref={toRef}
              className="text-2xl sm:text-2xl font-semibold opacity-50 text-[#00cacf]"
            >
              TO
            </span>

            <h1
              ref={performanceRef}
              className="text-3xl sm:text-6xl font-bold text-[#00cacf]"
            >
              PERFORMANCE
            </h1>
          </div>
        </div>

        <div ref={descriptionRef} className="mt-5 md:my-10 md:mt-20 max-w-[850px] mx-auto space-y-6 text-base md:text-lg">
          <p>
            With over two decades of experience navigating multiple waves of
            technological change, from the .com <br /> boom to the rise of analytics,
            cloud, and now AI. Our leadership came together under the <br /> NeuIQ banner
            to shape what’s next.
          </p>

          <p>
            We specialize in enabling customer experience and enterprise
            operations transformation. Powered by AI, fueled by data, and
            delivered through partnerships with the platforms enterprises already
            rely on: Qualtrics, ServiceNow, HyperScience, Databricks, Snowflake,
            and Microsoft Fabric.
          </p>

          <p>
            Our approach is hands-on, practical, and outcomes-led. From advisory
            and design to data engineering and implementation, we help
            organizations operationalize intelligence. Building AI-ready systems,
            smarter workflows, and connected experiences that scale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeBuiltNewIQ;
