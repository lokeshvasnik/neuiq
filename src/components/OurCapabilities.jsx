import { Link } from "react-router-dom";

const OurCapabilities = ({ capabilities }) => {
    return (
        <section className="bg-white text-black py-10 lg:py-20">
            <section className="pb-10">
                <div className="max-w-full mx-auto px-4 lg:px-10">
                    <h1 className="text-2xl sm:text-4xl font-bold mb-4">
                        {capabilities.title}
                    </h1>
                </div>
            </section>
            <div className="max-w-full mx-auto px-4 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {capabilities.cardData.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-[8px] transition duration-1000 transform hover:scale-105"
                            style={{
                                background:
                                    "linear-gradient(180deg, #000014 0%, #00B6B6 50%, #00E5E5 100%)",
                                padding: "2px",
                            }}
                        >
                            <Link to={item.Link}>
                                <div className="bg-white text-black rounded-[8px] p-4 md:p-6 flex flex-col justify-start items-center min-h-[400]px md:min-h-[450px]">
                                    <div>
                                        <img className="w-full" src={item.image} alt="" />
                                    </div>
                                    <div className="flex capabilities-box mt-2">
                                        <h3 className="font-bold text-[19px] text-center">{item.title}</h3>
                                    </div>
                                    <p className="text-center leading-relaxed mt-4 lg:text-base text-base">
                                        {item.desc}
                                    </p>
                                </div>
                            </Link>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurCapabilities