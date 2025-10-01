import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const CdoSection = ({ data }) => {
  const { cdoData, noDataText } = data;

  // Merge all data from all tabs into one flat array
  const allData = Object.values(cdoData).flat();

  return (
    <section className="lg:py-20 py-6">
      <div className="max-w-full mx-auto lg:px-10 px-4">
        <h2 className="capitalize sm:text-4xl text-2xl font-bold"></h2>

        {/* Content */}
        {allData?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allData.map((item, index) => (
              <div
                key={index}
                className="card rounded-xl border px-8 py-8 shadow-lg min-h-[326px] flex flex-col justify-between"
              >
                <div>
                  {item?.image && (
                    <div className={`mb-4 ${item.fullImage ? "h-auto" : "lg:h-20 h-16"}`}>
                      <img
                        src={item.image}
                        alt="cdo"
                        className={`object-contain object-left ${item.fullImage
                            ? "w-full h-auto"
                            : [1, 4].includes(index)
                              ? "w-14"
                              : "w-auto"
                          }`}
                      />
                    </div>
                  )}
                  {item.description && (
                    <p className="lg:text-lg text-lg font-medium">{item.description}</p>
                  )}
                  {item.time && (
                    <p className="lg:text-sm text-xs font-medium mt-6">{item.time}</p>
                  )}
                </div>

                <div>
                  <Link
                    to={item.link}
                    target="_blank"
                    className="relative group inline-flex items-center text-base text-[#1c2e5b] font-bold before:transition-all before:duration-700 before:-bottom-1 before:bg-[#1c2e5b] before:absolute before:h-[2px] before:w-0 hover:before:w-full"
                  >
                    Read more
                    <IoIosArrowForward className="text-lg group-hover:translate-x-1 mt-[2px] transition-all duration-700" />
                  </Link>
                </div>
              </div>
            ))}

          </div>
        ) : (
          <p className="text-xl font-bold text-gray-700 py-4">{noDataText}</p>
        )}
      </div>
    </section>
  );
};

export default CdoSection;
