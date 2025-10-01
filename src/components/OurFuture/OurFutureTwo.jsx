import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const OurFutureTwo = () => {

  const sectionRef = useRef(null);

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    // Hide header in "OUR FUTURE STATE PROMISE"
    gsap.to(".site-header", {
      y: -160,
      opacity: 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".hit-header",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Show header again when "OUR LEADERSHIP" starts
    gsap.to(".site-header", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".leadership-section", // add a class to that section
        start: "top top",
      },
    });
  });

  return () => ctx.revert();
}, []);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const prepPath = (sel) => {
        const el = self.selector(sel)[0];
        if (!el) return null;
        const len = el.getTotalLength();
        gsap.set(el, {
          strokeDasharray: len,
          strokeDashoffset: len,
          opacity: 0,
        });
        return el;
      };

      const p1 = prepPath(".line-path.first");
      const p2 = prepPath(".line-path.second");
      const p3 = prepPath(".line-path.third");

      gsap.set(
        [".future-hexagon.second", ".future-hexagon.third", ".outcome-hex"],
        { autoAlpha: 0, y: 30, scale: 0.9 }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(".future-hexagon.first", {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
      })
        .to(p1, { strokeDashoffset: 0, opacity: 1, duration: 0.6 }, ">")
        .to(".outcome-hex", { autoAlpha: 1, y: 0, scale: 1, duration: 0.25 }, "<40%")
        .to(".future-hexagon.second", {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.25,
        })
        .to(p2, { strokeDashoffset: 0, opacity: 1, duration: 0.6 }, ">")
        .add(() => {
          tl.scrollTrigger.pin = false;
          tl.scrollTrigger.refresh();
        })
        .to(".future-hexagon.third", {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.25,
        })
        .to(p3, { strokeDashoffset: 0, opacity: 1, duration: 0.6 }, ">");
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <div className="py-10">
      <div className="max-w-full px-6 mx-auto hit-header">
        <div className="pb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 mt-8">OUR MISSION</h2>
          <p className="text-base sm:text-lg mb-6 mt-8">
            To help enterprises unlock real value from data and AI by bridging strategy, technology, and execution.
          </p>
        </div>
        <h2 className="future-heading text-3xl sm:text-5xl font-bold mb-4">OUR FUTURE <br /> STATE PROMISE</h2>
        <p className="text-base sm:text-lg mb-6 max-w-3xl mt-8">
          Imagine an enterprise where:
        </p>
      </div>
      <div ref={sectionRef}>
        <div className="lg:px-10 px-4 py-0 max-w-full mx-auto bg-white text-black">
          <div className="our-future-section py-6 flex justify-center items-center">
            <div className="flex flex-col w-full relative">
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path className="line-path first" d="M0 10 C 30 25, 70 35, 100 58" stroke="#00d8ff" strokeWidth="0.8" fill="none" />
                <path className="line-path second" d="M10 50 C 40 45, 70 55, 100 50" stroke="#00d8ff" strokeWidth="0.8" fill="none" />
                <path className="line-path third" d="M0 90 C 30 70, 70 65, 100 45" stroke="#00d8ff" strokeWidth="0.8" fill="none" />
              </svg>

              <div className="relative">
                <div className="future-hexagon first text-xs">
                  EVERY DECISION IS INSIGHT-LED
                </div>
              </div>

              <div className="flex flex-row w-full mt-2 gap-8 relative">
                <div className="relative flex-1">
                  <div className="future-hexagon second text-xs ml-24">
                    EVERY WORKFLOW IS INTELLIGENT
                  </div>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                  <div className="future-hexagon outcome-hex text-xs">
                    SMARTER BUSINESS OUTCOMES
                  </div>
                </div>
              </div>

              <div className="relative mt-2">
                <div className="future-hexagon third text-xs z-10">
                  EVERY EXPERIENCE IS CONNECTED
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFutureTwo;