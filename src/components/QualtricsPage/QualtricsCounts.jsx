import React from "react";

const QualtricsCounts = ({ data }) => {
  return (
    <section className="py-12">
      <div className="max-w-full mx-auto lg:px-10 px-4">
        {/* <h1
          className=" text-2xl lg:text-[42px]/[54px] font-bold  mb-8"
        >
          {data.title}
        </h1> */}

        <div
          className={`grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8`}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="card relative before:absolute before:w-[30px] before:h-1 before:bg-[#7030A0]"
            >
              <p className="text-3xl font-bold my-4 h-20 flex items-center">
                {item.title && <span className="">{item.title}</span>}
                {item.image && (
                  <div className="h-full w-auto">
                    <img src={item.image} alt="" className="h-full" />
                  </div>
                )}
              </p>
              <p className="text-xl font-bold">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualtricsCounts;
