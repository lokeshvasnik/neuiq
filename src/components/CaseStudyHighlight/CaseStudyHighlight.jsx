import { icons } from "../../Utils/icons"

const CaseStudyHighlight = () => {
    return (
        <section className="relative overflow-hidden bg-white text-black py-10 md:py-20">
            <div className="max-w-full mx-auto px-4 lg:px-10">
                <div className="text-center mb-12">
                    <h4 className="uppercase text-gray-400 text-lg mb-2">
                        AI READINESS
                    </h4>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold sm:leading-3 uppercase">
                        AI Adoption Enablement
                        <br />
                        for a Fortune 500
                    </h2>
                </div>
                <div className="md:flex md:flex-row flex-col items-center">
                    {/* Left Side: Angled Image */}
                    <div className="md:w-1/2 relative flex justify-center items-center mb-10 md:mb-0">
                        <div className="w-[90%] max-w-[40rem] relative">
                            <div className="clip-polygon w-full h-full overflow-hidden">
                                <img
                                    src={icons.advisory_bottom_image} // your image source here
                                    alt="AI Adoption"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Text Content */}
                    <div className="md:w-1/2 px-4">
                        <p className="mb-4 text-gray-700 text-base md:text-xl">
                            A Fortune 500 is facing low adoption of AI tools despite heavy
                            investment due to siloed data, unclear metrics, and poor
                            alignment.
                        </p>
                        <p className="mb-4 text-gray-700 text-base md:text-xl sm:mb-16">
                            By implementing an AI Enablement Layer and modern data backbone,
                            we will be driving a{" "}
                            <strong className="text-black">
                                3X increase in tool usage
                            </strong>
                            , clear attribution of AI-driven impact, and stronger
                            stakeholder confidence.
                        </p>
                        <h4 className="font-bold my-2 text-2xl">
                            NeuIQ Team to deliver this solution:
                        </h4>
                        <ul className="list-disc ml-5 space-y-1 text-gray-700 text-base md:text-xl">
                            <li>AI Strategist</li>
                            <li>Domain Experts</li>
                            <li>AI Architect</li>
                            <li>Technical Solution Architect</li>
                            <li>Data Engineers</li>
                            <li>Business Analysts</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseStudyHighlight