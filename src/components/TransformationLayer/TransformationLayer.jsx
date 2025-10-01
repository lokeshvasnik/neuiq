
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
        let ctx = gsap.context(() => {
            const steps = gsap.utils.toArray(".step");
            const header = document.querySelector(".site-header");
            const headerHeight = header ? header.offsetHeight : 0;

            const isMobile = window.innerWidth <= 800;

            // Hide header when entering pipeline (both mobile & desktop)
            ScrollTrigger.create({
                trigger: ".pipeline",
                start: `top ${headerHeight}px`,
                end: "bottom top",
                onEnter: () =>
                    gsap.to(".site-header", {
                        y: -50,
                        opacity: 0,
                        duration: 0.5,
                        ease: "power2.inOut",
                    }),
                onLeaveBack: () =>
                    gsap.to(".site-header", {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        ease: "power2.inOut",
                    }),
            });

            // Insights header animation
            gsap.to(".insights-header", {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".pipeline",
                    start: "top 75px",
                    toggleActions: "play none none reverse",
                },
            });

            if (isMobile) {
                // 👉 MOBILE: each step fades in one by one
                steps.forEach((step) => {
                    gsap.from(step, {
                        y: 50,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: step,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                    });
                });
            } else {
                // 👉 DESKTOP: pinned horizontal timeline
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

                tl.from(steps, {
                    x: -200,
                    opacity: 0,
                    stagger: 0.8,
                    ease: "power2.out",
                });

                tl.to(
                    ".insights-header",
                    {
                        opacity: 0,
                        duration: 1,
                        ease: "power2.inOut",
                    },
                    "+=0.5"
                );
            }
        });

        // -------------------------------
        // Production-safe refresh
        // -------------------------------
        const refreshScrollTrigger = () => {
            requestAnimationFrame(() => {
                ScrollTrigger.refresh();
            });
        };

        // Wait for all images inside .pipeline to load
        const imgLoadInstance = imagesLoaded(document.querySelector(".pipeline"), refreshScrollTrigger);

        // Fallback: refresh on window load
        window.addEventListener("load", refreshScrollTrigger);

        // Extra safety: refresh after 1s
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
                            {/* Mobile */}
                            <source media="(max-width: 768px)" srcSet={step.mobile} />
                            {/* Desktop */}
                            <source media="(min-width: 769px)" srcSet={step.desktop} />
                            {/* Fallback */}
                            <img
                                className="md:w-full md:h-full"
                                src={step.desktop}
                                alt={`layer-step-${i + 1}`}
                            />
                        </picture>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default TransformationLayer