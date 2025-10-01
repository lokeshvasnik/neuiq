const WhyChooseUsSection = ({ data }) => {
  console.log(data);
  
  return (
    <section className="">
      <div className="max-w-full mx-auto lg:px-10 md:py-10 px-2 py-6">
        <div>
          <h1 className="sm:text-4xl text-2xl font-bold capitalize lg:pb-8 mb-4">
            Why choose us?
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-6  w-full">
            {data.data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative before:w-full before:absolute before:top-0 before:bg-[#C3B9B6] before:hover:bg-[#F7901D] before:h-[2px] cursor-pointer py-3"
                >
                  <p className="text-lg">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
