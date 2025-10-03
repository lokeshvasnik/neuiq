import { icons } from "../../Utils/icons";

const OurFutureStatic = () => {
    return (
        <div className="md:py-10">
            <div className="max-w-full px-4 md:px-6 mx-auto hit-header">
                <div className="md:pb-16">
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
            <div>
                <img className="w-full" src={icons.ourFutureImage} alt="our-future-image" />
            </div>
        </div>
    );
};

export default OurFutureStatic;