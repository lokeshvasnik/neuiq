import { icons } from "../../Utils/icons";

const titles = [
    <>
        <span className="block sm:hidden">De-Risk Big Bets</span>
        <span className="hidden sm:block">
        De-Risk <br /> Big Bets
        </span>
    </>,
    "Align Stakeholders & Strategy",
    "Ready Your Foundation",
    "Accelerate Time-to-Impact",
];

const StrategyHighlights = () => {
    return (
        <section className="relative w-full h-[300px] lg:h-[400px] overflow-hidden text-white">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline>
                <source src={icons.capability_section} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10" />

            {/* Content */}
            <div className="relative z-20 flex flex-col sm:flex-row place-content-center h-full">
                {titles.map((title, index) => (
                    <div
                        key={index}
                        className={`w-full sm:flex-1 flex items-center justify-center px-4 sm:px-8 py-2 sm:py-0 ${index < titles.length - 1 ? "vertical-gradient-border" : ""
                            }`}>
                        <h3 className="text-center sm:text-left text-lg sm:text-xl lg:text-2xl xl:text-3xl max-w-[250px]">
                            {title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default StrategyHighlights