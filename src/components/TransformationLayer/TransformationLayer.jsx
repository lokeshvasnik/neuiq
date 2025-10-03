import { icons } from "../../Utils/icons"
import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import imagesLoaded from "imagesloaded";

gsap.registerPlugin(ScrollTrigger);

const stepsData = [
    { desktop: icons.data_source, mobile: icons.data_source_mobile },
    { desktop: icons.ingention_layer, mobile: icons.ingention_layer_mobile },
    { desktop: icons.staging_layer, mobile: icons.staging_layer_mobile },
    { desktop: icons.airflow, mobile: icons.airflow_mobile },
    { desktop: icons.etl_transformation_layer, mobile: icons.etl_transformation_layer_mobile },
    { desktop: icons.curated_warehouse, mobile: icons.curated_warehouse_mobile },
    { desktop: icons.outcomes_report_layer, mobile: icons.outcomes_report_layer_mobile },
    { desktop: icons.data_publishing_layer, mobile: icons.data_publishing_layer_mobile },
];

const TransformationLayer = () => {

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const steps = gsap.utils.toArray(".step");
            const header = document.querySelector(".site-header");
            const headerHeight = header ? header.offsetHeight : 0;

            const width = window.innerWidth;
            const isMobile = width < 800;
            const isTablet = width >= 800 && width <= 1024;
            const isDesktop = width > 1024;

            // -------------------------------
            // Header hide/show on scroll (all devices)
            // -------------------------------
            ScrollTrigger.create({
                trigger: ".pipeline",
                start: `top ${headerHeight}px`,
                end: "bottom top",
                onEnter: () => gsap.to(".site-header", { y: -50, opacity: 0, duration: 0.5, ease: "power2.inOut" }),
                onLeaveBack: () => gsap.to(".site-header", { y: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" }),
            });

            // -------------------------------
            // Device-specific animations
            // -------------------------------
            if (isMobile) {
                // MOBILE: animate each step one by one
                steps.forEach(step => {
                    gsap.from(step, {
                        y: 50,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: step,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    });
                });

                // Mobile header fade-in
                gsap.to(".insights-header", {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pipeline",
                        start: "top 75px",
                        toggleActions: "play none none none",
                    },
                });
            }

            else if (isTablet) {
                // TABLET: timeline for smooth sequence
                const tlTablet = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".pipeline",
                        start: "top 90%",
                        toggleActions: "play none none none", 
                    }
                });

                // 1️⃣ Header fade-in
                tlTablet.to(".insights-header", { opacity: 1, y: 0, duration: 0.5 });
            }

            else if (isDesktop) {
                // Fade-in header first
                gsap.fromTo(
                    ".insights-header",
                    { opacity: 0, y: -20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".pipeline",
                            start: "top 75px",
                            toggleActions: "play none none reverse",
                        },
                    }
                );

                // DESKTOP: pinned horizontal timeline
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".pipeline",
                        start: "top",
                        end: "+=1500",
                        scrub: true,
                        pin: true,
                        anticipatePin: 1,
                    },
                });

                tl.from(steps, { x: -200, opacity: 0, stagger: 0.8, ease: "power2.out" });

                // Fade-out header at the end
                tl.to(".insights-header", { opacity: 0, duration: 1, ease: "power2.inOut" }, "+=0.5");
            }


        });

        // -------------------------------
        // Refresh ScrollTrigger after images load / window load / timeout
        // -------------------------------
        const refreshScrollTrigger = () => requestAnimationFrame(() => ScrollTrigger.refresh());
        const imgLoadInstance = imagesLoaded(document.querySelector(".pipeline"), refreshScrollTrigger);
        window.addEventListener("load", refreshScrollTrigger);
        const timeout = setTimeout(refreshScrollTrigger, 1000);

        return () => {
            ctx.revert();
            window.removeEventListener("load", refreshScrollTrigger);
            timeout && clearTimeout(timeout);
            imgLoadInstance && imgLoadInstance.off("done", refreshScrollTrigger);
        };

    }, []);

    return (
        <section className="bg-black pb-10">
            <h2 className="insights-header md:opacity-0 -translate-y-6 text-white mb-6 w-full max-w-[900px] mx-auto text-center text-lg md:text-xl font-bold sticky top-0 bg-[#3a3a3a] py-2 z-10">
                TRANSFORMATION AND INSIGHTS LAYER
            </h2>

            <div className="pipeline pt-6 px-3 md:px-5 py-10 md:py-14 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-2">
                {stepsData.map((step, i) => (
                    <div key={i} className="step">
                        <picture>
                            <source media="(max-width: 768px)" srcSet={step.mobile} />
                            <source media="(min-width: 769px)" srcSet={step.desktop} />
                            <img className="md:w-full md:h-full" src={step.desktop} alt={`layer-step-${i + 1}`} />
                        </picture>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TransformationLayer;
