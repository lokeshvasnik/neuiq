import { useLayoutEffect, useRef } from "react";
import { problemsWeAreSolvingForThem } from "../../Utils/data";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProblemsWeSolve = () => {
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 769px)": function () {
          const accordions = document.querySelectorAll(".accordion-content");
          const accordianList = document.querySelector(".accordianList");
          const pinContainer = document.querySelector(".accordion-pin-container");

          // Set initial heights
          gsap.set(accordions, { height: 400, overflow: "hidden" });

          const tweenDuration = 1;

          const totalHeight =
          Array.from(accordions).reduce((acc, accordion, i) => {
            if (i === accordions.length - 1) {
              // last accordion expands fully
              return acc + accordion.scrollHeight;
            }
            return acc + 400; // starting height before collapse
          }, 0);
          const endPoint = `+=${totalHeight}`;

          const tl = gsap.timeline({
            smoothChildTiming: true,
            scrollTrigger: {
              trigger: wrapperRef.current,
              pin: pinContainer,
              start: "top top",
              scrub: 1,
              pinSpacing: true,
              end: endPoint,
            },
          });

          // Hide header initially
          tl.to(".site-header", { y: -50, opacity: 0, duration: 0.5, ease: "power2.inOut" });

          // Loop through accordions
          accordions.forEach((accordion, i) => {
            if (i === accordions.length - 1) {
              // Last accordion expands
              tl.to(accordion, {
                height: accordion.scrollHeight,
                duration: tweenDuration * 2,
                ease: "power2.inOut",
              });

              // Bring header back after last accordion
              tl.to(".site-header", {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power2.inOut",
              });
            } else {
              // Collapse other accordions
              tl.to(accordion, { height: 10, duration: tweenDuration, ease: "power2.inOut" });

              // Move list up dynamically
              tl.to(accordianList, { y: -(i + 1) * 80, duration: tweenDuration }, "-=0.2");
            }
          });

          setTimeout(() => ScrollTrigger.refresh(), 800);
        },
        
        // ✅ Tablet & Mobile (no animations)
        "(max-width: 1024px)": function () {
          ScrollTrigger.getAll().forEach((st) => st.kill()); // kill any accidental triggers
          gsap.set(".accordion-content", { clearProps: "all" }); // reset styles
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="px-4 bg-[#F9FBFD] accordion-pin-container">
      <div className="max-w-full mx-auto lg:px-10 h-full">
        <div className="header lg:max-w-[80%] sm:mb-0 mb-8 my-18">
          <p className="sm:text-xl text-xl lg:mb-4 mb-2 text-[#A9B4C2]">
            TRUSTED BY THE FORTUNE 500, TECH PLATFORMS & <br /> GLOBAL MEDIA AND
            INSIGHTS AGENCIES
          </p>
          <h1 className="sm:text-4xl text-2xl font-bold sm:mb-6 mb-3 sm:w-[500px]">
            PROBLEMS WE ARE SOLVING FOR THEM
          </h1>
          <p className="lg:w-[990px] text-base md:text-xl">
            Many enterprises struggle to operationalize AI. Stuck with siloed
            data, disconnected platforms, manual workflows, and low adoption. We
            solve this by unifying data, automating critical processes, and
            embedding AI into the tools and workflows teams already use. From
            GPT-powered reporting and real-time content assistants to survey
            field automation and platform activation, we help enterprises move
            from AI ambition to everyday impact.
          </p>
        </div>
        <div className="accordionsWrapper" ref={wrapperRef}>
          <div className="accordianList">
            {problemsWeAreSolvingForThem.data.map((item, i) => (
              <div
                className="accordion mx-auto py-5 md:py-10 border-b-[1px] transition-none overflow-hidden"
                key={i}>
                <div className="flex flex-col md:flex-row items-start gap-10">
                  {/* Left: Text */}
                  <div className="flex-1 accordion-content !overflow-visible">
                    <div className="flex items-center md:mb-4">
                      <p className="text-yellow-500 font-bold text-4xl me-4">
                        {item.number}
                      </p>
                      <h2 className="text-black text-2xl md:text-3xl font-bold mt-0">
                        {item.title}
                      </h2>
                    </div>
                    <div className="flex justify-between flex-col lg:flex-row">
                      <div className="py-5 sm:w-[700px]">
                        <p className="text-gray-700 mb-3 text-base md:text-xl">
                          {item.desc1}
                        </p>
                        <p className="text-gray-800 mb-3 font-medium text-base md:text-xl">
                          {item.desc2}
                        </p>
                        {item.impact && (
                          <p className="text-gray-800 font-normal text-lg">
                            <strong>Impact:</strong> {item.impact}
                          </p>
                        )}
                      </div>
                      <div className="">
                        <div className="w-full lg:w-[550px] rounded-lg">
                          <img
                            src={item.image}
                            alt=""
                            className="w-full rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsWeSolve;
