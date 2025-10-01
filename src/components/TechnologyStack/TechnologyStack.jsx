import { useLayoutEffect, useRef } from "react";
import { icons } from "../../Utils/icons"

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const techThatEnable = [
    {
        desktop: icons.servicesNowTwo,
        mobile: icons.servicesNowMobileOne
    },
    {
        desktop: icons.servicesNowThree,
        mobile: icons.servicesNowMobileTwo
    },
    {
        desktop: icons.servicesNowOne,
        mobile: icons.servicesNowMobileThree
    },
    {
        desktop: icons.servicesNowFour,
        mobile: icons.servicesNowMobileFour
    },
    {
        desktop: icons.servicesNowNine,
        mobile: icons.servicesNowMobileFive
    },
    {
        desktop: icons.servicesNowFive,
        mobile: icons.servicesNowMobileSix
    },
    {
        desktop: icons.servicesNowSix,
        mobile: icons.servicesNowMobileSeven
    },
    {
        desktop: icons.servicesNowSeven,
        mobile: icons.servicesNowMobileEight
    },
    {
        desktop: icons.servicesNowEight,
        mobile: icons.servicesNowMobileNine
    },
]


const TechnologyStack = () => {
    const cardsRef = useRef([]);


    // Gsap Layout Effect
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            cardsRef.current.forEach((card) => {
                gsap.from(card, {
                    y: 100,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                });
            });
        });

        // Production fix: defer refresh
        const refresh = () => {
            requestAnimationFrame(() => {
                ScrollTrigger.refresh();
            });
        };

        window.addEventListener("load", refresh);
        setTimeout(refresh, 1000); // fallback refresh if fonts/images still loading

        return () => {
            window.removeEventListener("load", refresh);
            ctx.revert();
        };

    }, []);

    return (
        <section className="mx-auto px-4 lg:px-10 bg-[#eef0f3] py-10 md:py-20">
            <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-8 md:pt-10">
                <div className="flex-[2]"><h1 className="text-2xl sm:text-4xl text-center lg:text-left font-bold mb-4 uppercase">
                    TECHNOLOGIES THAT ENABLE <br /> OUR SOLUTION DELIVERY
                </h1></div>
                <div className="flex-[1]"><h1 className="hidden lg:block text-center text-2xl sm:text-3xl font-bold mb-4 uppercase md:ml-8">EXPERIENCE & OPERATIONS
                    ENABLEMENT PLATFORMS</h1>
                </div>
            </div>
            <div>
                <div className="cardsWrapper flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-8">
                    {/* Left side bigger */}
                    <div className="flex-[2]">
                        {techThatEnable.map((item, i) => (
                            <div
                                key={i}
                                ref={(el) => (cardsRef.current[i] = el)}
                                className="rounded-xl text-center mb-4"
                            >
                                <picture>
                                    {/* Mobile first */}
                                    <source media="(max-width: 768px)" srcSet={item.mobile} />
                                    {/* Desktop */}
                                    <source media="(min-width: 769px)" srcSet={item.desktop} />
                                    {/* Fallback */}
                                    <img className="w-full" src={item.desktop} alt={`Tech stack ${i + 1}`} />
                                </picture>
                            </div>
                        ))}

                    </div>

                    {/* Right side smaller */}
                    <div className="flex-[1] flex flex-col items-center justify-start !mt-0 md:space-y-6">
                        {/* Image + Bracket Height */}
                        <div className="flex flex-col items-center justify-center md:py-12 w-full">
                            {/* Desktop */}
                            <img
                                className="mx-auto hidden lg:block max-h-[90vh] w-auto object-contain"
                                src={icons.tech_service_customer}
                                alt="Experience & Operations Platforms"
                            />
                            {/* Mobile */}
                            <div className="flex-[1]"><h1 className="text-center text-2xl sm:text-3xl font-bold mb-4 uppercase md:ml-8 lg:hidden">EXPERIENCE & OPERATIONS
                                ENABLEMENT PLATFORMS</h1>
                            </div>
                            <img
                                className="mx-auto lg:hidden max-h-[60vh] w-auto object-contain"
                                src={icons.tech_service_customer_mobile}
                                alt="Experience & Operations Platforms"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default TechnologyStack