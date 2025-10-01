
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const CardContent = ({ item }) => (
  <>
    {/* Icon Placeholder */}
    <div className="absolute -top-8 left-8">
      <div className="bg-[#008B9B] rounded-full transition-colors duration-300">
        <img src={item.image} className="lg:size-[92px] size-[80px]" />
      </div>
    </div>

    {/* Card Content */}
    <div className="mt-8 flex flex-col justify-between h-[calc(100%-32px)]">
      <div>
        <h2 className="lg:text-2xl text-xl font-bold mb-4 text-center text-black">
          {item.title}
        </h2>

        {item.description.map((desc, index) => (
          <p
            key={index}
            className="lg:text-[16px]/[22px] text-left  text-sm pb-2 text-black"
            dangerouslySetInnerHTML={{ __html: desc }}
          ></p>
        ))}
      </div>

      {item.Link && (
        <div className="text-[#FF6E5F] flex justify-center text-2xl">
          <FaChevronRight />
        </div>
      )}
    </div>
  </>
);

const AdvisoryEmployee = ({ data, cardsPerRow = 3 }) => {
  return (
    <section className="">
      <div className="max-w-full mx-auto md:p-4 p-2">
        <div className="container mx-auto lg:px-4 py-4">
          <h1 className="text-2xl lg:text-[42px]/[50px] font-bold mb-12">
            {data.title}
          </h1>

          <div
            className={`grid  gap-10  ${
              cardsPerRow == 3 &&
              "lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-7"
            } ${
              cardsPerRow == 4 &&
              "lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-4"
            }`}
          >
            {/* Advisory Cards */}

            {data.data.map((item, index) => (
              // <OurServiceCard item={item} key={index}/>
              <div
                key={index}
                className={`bg-[#EEEEEE] rounded-3xl p-8 relative transition-transform duration-300 hover:scale-105`}
              >
                {item.Link ? (
                  <Link to={item.Link}>
                    <CardContent item={item} />
                  </Link>
                ) : (
                  <div>
                    <CardContent item={item} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryEmployee;
