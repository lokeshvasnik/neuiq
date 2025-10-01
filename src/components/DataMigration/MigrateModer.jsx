import React from "react";
// import { icons } from "../../Utils/icons";
// import { migratemodern } from "../../Utils/datamigrationmodern";

const MigrateModer = ({
  data,
  bgColor = "linear-gradient(135deg, rgb(16, 20, 33), rgb(28, 46, 91))",
}) => {
  return (
    <>
      <section
        className={`px-4 lg:pt-16 pt-8 lg:pb-8 pb-6 ${
          bgColor == "linear-gradient(135deg, rgb(16, 20, 33), rgb(28, 46, 91))"
            ? "text-white"
            : "text-black"
        }`}
        style={{ background: bgColor }}
      >
        <div className="max-w-full mx-auto lg:px-10">
          <div className="">
            <h1 className="text-2xl lg:text-[42px]/[50px] font-bold lg:mb-12 mb-4">
              {data.title}
            </h1>
          </div>
          <div>
            <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-6 mb-8">
              <div className="flex flex-col justify-between text-lg">
                <p>{data.leftsection.description}</p>
                {/* <img src={data.leftsection.image} className="mt-6" /> */}
              </div>
              <div className="flex flex-col justify-between text-lg">
                <p>{data.rightsection.description}</p>
                {/* <img src={data.rightsection.image} className="mt-6" /> */}
              </div>
            </div>
            <div className="bg-slate-100 lg:p-8 p-4">
              <img src={data.leftsection.image} className="mt-6" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MigrateModer;
