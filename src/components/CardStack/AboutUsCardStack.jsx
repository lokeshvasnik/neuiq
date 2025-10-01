import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagesLoaded from "imagesloaded"; // 👈 add this
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const AboutUsCardStack = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context((self) => {
      ScrollTrigger.matchMedia({
        "(min-width: 801px)": () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top-=95% top",
              scrub: 1,
              pin: false,
              pinSpacing: true,
              invalidateOnRefresh: true,
            },
          });

          const header = document.querySelector(".site-header");
          if (header) {
            tl.to(header, {
              y: -50,
              opacity: 0,
              duration: 0.5,
              ease: "power2.inOut",
            });
          }

          tl.to(self.selector(".card1"), {
            scale: 0.9,
            yPercent: -1.5,
            opacity: 0.2,
            duration: 1,
            ease: "power2.out",
          });

          tl.from(
            self.selector(".card2"),
            {
              yPercent: 20,
              opacity: 0,
              duration: 0.8,
              ease: "power2.out",
            },
            "<+=0.1"
          );

          tl.to(self.selector(".card2"), {
            yPercent: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          });
        },

        // This is the logic for a 800px screen
        "(max-width: 800px)": () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top-=95% top",
              scrub: 1,
              pin: false,
              pinSpacing: true,
              invalidateOnRefresh: true,
            },
          });

          const header = document.querySelector(".site-header");
          if (header) {
            tl.to(header, {
              y: -50,
              duration: 0.5,
              ease: "power2.inOut",
            });
          }

          tl.to(self.selector(".card1"), {
            scale: 0.9,
            yPercent: -1.5,
            duration: 1,
            ease: "power2.out",
          });

          tl.from(
            self.selector(".card2"),
            {
              yPercent: 20,
              duration: 0.8,
              ease: "power2.out",
            },
            "<+=0.1"
          );

          tl.to(self.selector(".card2"), {
            yPercent: 0,
            duration: 0.6,
            ease: "power2.out",
          });
        },
      });
    }, sectionRef);

    // -------------------------------
    // Production-safe refresh
    // -------------------------------
    const refreshScrollTrigger = () => {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    };

    // Wait for all images inside this section to load
    const imgLoadInstance = imagesLoaded(sectionRef.current, refreshScrollTrigger);

    // Fallback: refresh on window load
    window.addEventListener("load", refreshScrollTrigger);

    // Extra safety: refresh after 1s
    const timeout = setTimeout(refreshScrollTrigger, 1000);

    // Cleanup
    return () => {
      ctx.revert();
      window.removeEventListener("load", refreshScrollTrigger);
      clearTimeout(timeout);
      imgLoadInstance && imgLoadInstance.off("done", refreshScrollTrigger);
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      className="bg-about-us-card-stack text-black relative overflow-hidden pb-10 md:pb-0"
    >
      <div className="max-w-full relative mx-auto px-4 lg:px-10 flex flex-col lg:flex-row items-start justify-between py-10 md:py-20 gap-5">
        {/* Left Side: "WHAT THIS MEANS" text */}
        <div className="flex-1 z-10">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            WHAT THIS <br /> MEANS
          </h1>
        </div>

        {/* Right Side: The Stacking Cards */}
        <div className="flex-1 w-full relative">
          <div className="cards relative w-full flex !h-[50vh]">
            <div className="custom-card !h-auto card1 absolute left-0 w-full p-6 lg:px-10 rounded-3xl border-2 !bg-black border-[#3a3a3a] flex flex-col !items-start">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-4">
                FOR OUR CLIENTS
              </h2>
              <p className="text-lg">
                <b>Faster Time to Value</b> – We move fast, with intent. <br />
                <b>Enterprise-Grade Delivery</b> – Disciplined, structured, outcomes-first. <br />
                <b>AI-Ready Solutions</b> – Built not just for tomorrow, but to shape it. <br />
                <b>True Partnership</b> – We don’t just advise. We deliver.
              </p>
            </div>

            <div className="custom-card !h-auto card2 absolute left-0 !top-20 w-full p-6 lg:px-10 rounded-3xl border-2 !bg-black border-[#3a3a3a] flex flex-col !items-start">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-4">
                FOR OUR PEOPLE
              </h2>
              <p className="text-lg">
                <b>A Team You Can Grow With</b> – Led by those who’ve done it before. <br />
                <b>High-Trust Culture</b> – Where autonomy meets mentorship. <br />
                <b>Purposeful Work</b> – From global brands to bleeding-edge AI. <br />
                <b>You Help Shape the Room</b> – Not just be in it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsCardStack;
