import React from "react";

const ServiceSolution = ({ data }) => {
  return (
    <section className="py-12">
      <div className="max-w-full mx-auto lg:px-10 px-4">
        <div className="image-container flex flex-wrap gap-4 justify-center mb-6">
          {data?.images.map((image, index) => (
            <div key={index} className="xl:h-16 lg:h-12 h-9">
              <img
                src={image}
                alt={`service and solution-${index}`}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="sm:text-4xl text-2xl font-bold  mb-4">
            {data?.title}
          </h3>
          <h4 className="text-xl font-medium lg:w-[70%] mx-auto">
            {data?.description}
          </h4>
        </div>
      </div>
    </section>
  );
};

export default ServiceSolution;
