import OurServiceCard from "../OurServiceCard";

const WhatWeDo = ({data, bgColor="linear-gradient(135deg, rgb(16, 20, 33), rgb(28, 46, 91))"}) => {
  return (
    <section
      className={`px-4 ${bgColor == "#fff" ? 'text-black' : 'text-white'}`}
      style={{
        background: bgColor,
        // background: "linear-gradient(135deg, rgb(16, 20, 33), rgb(28, 46, 91))",
      }}
      
    >
      <div className="max-w-full mx-auto lg:px-10 md:py-8 px-2 py-2">
        <div>
          <h1 className={`${bgColor == "#fff" ? 'text-black' : 'text-white'} sm:text-4xl text-2xl font-bold capitalize lg:pb-8 mb-4`}>
            {data.title}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  w-full">
            {data.data.map((item, index) => {
              return <OurServiceCard item={item} key={index} />
              // <ServiceCard key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
