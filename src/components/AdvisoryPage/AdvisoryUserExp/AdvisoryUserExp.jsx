/* eslint-disable react/prop-types */
const AdvisoryUser = ({ data }) => {
  return (
    <section className="lg:pt-5 lg:pb-5">
      <div className="max-w-full mx-auto md:p-4 p-2">
        <div className="container mx-auto px-4  pt-4 lg:py-0">
          <h1 className="text-2xl lg:text-[42px]/[50px] font-bold mb-12">
            {data.title}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-7 ">
            {/* Advisory Cards */}
            {data.data.map((item, index) => (
              <div
                key={index}
                className="bg-[#EEEEEE] rounded-3xl p-8 relative transition-transform duration-300 hover:scale-105"
              >
                <div className="absolute -top-8 left-8">
                  <div className="bg-[#008B9B] rounded-full transition-colors duration-300">
                    <img
                      src={item.image}
                      className="lg:size-[92px] size-[80px]"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="lg:text-2xl text-xl font-bold mb-4 text-center">
                    {item.title}
                  </h2>

                  {item.description.map((desc, index) => (
                    <p
                      key={index}
                      className="lg:text-[16px]/[22px] text-left  text-sm pb-2 text-gray-600"
                      dangerouslySetInnerHTML={{ __html: desc }}
                    ></p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryUser;
