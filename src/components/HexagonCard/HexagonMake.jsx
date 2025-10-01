import { icons as Icons } from "../../Utils/icons";
import React, { useEffect, useState } from "react";

// --- Placeholder Icons ---
const icons = [
    <img key="1" src={Icons.challengesWeSolveOne} alt="icon1" className="w-1/2 h-1/2 object-contain" />,
    <img key="3" src={Icons.challengesWeSolveFour} alt="icon3" className="w-[75%] me-3 mb-3 object-contain" />,
    <img key="2" src={Icons.challengesWeSolveTwo} alt="icon2" className="w-[75%] h-1/2 me-4 object-contain" />,
    <img key="5" src={Icons.challengesWeSolveFive} alt="icon5" className="w-1/2 h-1/2 object-contain" />,
    <img key="4" src={Icons.challengesWeSolveThree} alt="icon4" className="w-1/2 h-1/2 mt-4 object-contain" />,
    <img key="6" src={Icons.challengesWeSolveSix} alt="icon6" className="w-1/2 h-1/2 object-contain" />,
];

// Honeycomb positioning
const honeycombPositions = [
  { x: -80, y: -140, side: 'left' },   // top left
  { x:  80, y: -140, side: 'right' },  // top right
  { x: -155, y:   0, side: 'left' },   // middle left
  { x:  155, y:   0, side: 'right' },  // middle right
  { x: -80, y:  140, side: 'left' },   // bottom left
  { x:  80, y:  140, side: 'right' },  // bottom right
];

// Hexagon Icon
const HexagonIcon = ({ children,active }) => (
    <div className="hexagon-container group cursor-pointer transition-all duration-300 hover:scale-105 relative">
        <svg
            width="128"
            height="128"
            viewBox="0 0 100 100"
            className="w-40 h-40"
        >
            <polygon
                points="50,1 95,25 95,75 50,99 5,75 5,25"
                className={`transition-colors duration-300 ${active ? 'fill-[#39f2f7]' : 'fill-[url(#gradient)]'} group-hover:fill-[#39f2f7]`}
                stroke="#009ea2"
                strokeWidth="1"
            />
            <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1f2937" />
                    <stop offset="100%" stopColor="#111827" />
                </linearGradient>
            </defs>
        </svg>

        {/* Children with enforced hover color */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
            {React.cloneElement(children, {
                className: `${children.props.className || ""} transition-colors ${active ? "invert" : ""} group-hover:invert duration-300`
            })}
        </div>
    </div>
);

// Text That Appears Logic
const ChallengeText = ({ title, description, className = '' }) => (
    <div className={`challenge-text ${className}`}>
        <h3 className="font-bold text-[#00cacf] uppercase tracking-wide text-base mb-1 leading-tight">{title}</h3>
        <p className="text-white leading-relaxed text-base">{description}</p>
    </div>
);

// --- Main Section Component ---
const HexagonMake = ({challenges}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        // Only auto-advance if nothing is hovered
        if (hoveredIndex === null) {
            const interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % challenges.length);
            }, 2200);
            return () => clearInterval(interval);
        }
    }, [hoveredIndex]);

    // Show hovered polygon as active if hovering, else show auto-active
    const currentActiveIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

    return (
        <div className="bg-black text-white p-4 md:p-8 min-h-screen flex items-center lg:py-20">
            <div className="max-w-7xl mx-auto w-full">
                <h1 className="text-2xl font-bold uppercase tracking-wider text-center my-5 sm:text-4xl md:my-0 md:text-left">
                    Challenges we <br className="hidden md:inline" /> help solve
                </h1>

                {/* Mobile Layout */}
                <div className="lg:hidden flex flex-col items-center gap-8 py-10">
                    {challenges.map((challenge, index) => (
                        <div key={index} className="flex flex-col items-center gap-4">
                            <ChallengeText
                                title={challenge.title}
                                description={challenge.description}
                                className="text-center max-w-xs"
                            />
                            <HexagonIcon>{icons[index]}</HexagonIcon>
                        </div>
                    ))}
                </div>

                {/* Desktop Honeycomb */}
                <div className="hidden lg:block lg:pb-10">
                    <div className="relative w-full h-[500px] flex items-center justify-center">
                        <div className="relative">
                            {honeycombPositions.map((position, index) => {
                                const { x, y, side } = position;
                                let textX, textAlign, textWidth;
                                if (side === 'left') {
                                    textX = x - 500;
                                    textAlign = 'text-right';
                                    textWidth = 'w-[410px]';
                                } else {
                                    textX = x + 120;
                                    textAlign = 'text-left';
                                    textWidth = 'w-[410px]';
                                }

                                // Use currentActiveIndex for highlighting
                                const isActive = index === currentActiveIndex;

                                return (
                                    <div key={index} className={`group`}>
                                        {/* Hexagon */}
                                        <div
                                            className={`absolute ${isActive ? "z-20" : ""}`}
                                            style={{
                                                left: '50%',
                                                top: '50%',
                                                transform: `translate(${x - 64}px, ${y - 64}px)`,
                                            }}
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                        >
                                            <div className={isActive ? "group-hover group" : ""}>
                                                <HexagonIcon active={isActive}>{icons[index]}</HexagonIcon>
                                            </div>
                                        </div>

                                        {/* Text (hidden by default, appears on hover or if active) */}
                                        <div
                                            className={`absolute ${textWidth} transition-opacity duration-300 ${isActive ? "opacity-100 z-30" : "opacity-0"}`}
                                            style={{
                                                left: '50%',
                                                top: '50%',
                                                transform: `translate(${textX}px, ${y - 40}px)`,
                                            }}
                                        >
                                            <ChallengeText
                                                title={challenges[index].title}
                                                description={challenges[index].description}
                                                className={textAlign}
                                            />
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Connection lines remain always visible */}
                            <svg
                                className="absolute inset-0 w-full h-full pointer-events-none opacity-15"
                                style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
                                viewBox="-400 -200 800 400"
                            >
                                <line x1="-80" y1="-100" x2="80" y2="-100" stroke="#14b8a6" strokeWidth="1" strokeDasharray="3,3" />
                                <line x1="-80" y1="-100" x2="-160" y2="0" stroke="#14b8a6" strokeWidth="1" strokeDasharray="3,3" />
                                <line x1="80" y1="-100" x2="160" y2="0" stroke="#14b8a6" strokeWidth="1" strokeDasharray="3,3" />
                                <line x1="-160" y1="0" x2="-80" y2="100" stroke="#14b8a6" strokeWidth="1" strokeDasharray="3,3" />
                                <line x1="160" y1="0" x2="80" y2="100" stroke="#14b8a6" strokeWidth="1" strokeDasharray="3,3" />
                                <line x1="-80" y1="100" x2="80" y2="100" stroke="#14b8a6" strokeWidth="1" strokeDasharray="3,3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HexagonMake;