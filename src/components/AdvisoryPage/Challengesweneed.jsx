/* eslint-disable react/prop-types */


const Challengesweneed = ({data, bgColor="#fff"}) => {
  return (
    <>
      <section
        id="chanllengeswedo"
        // xl:min-h-[850px] lg:min-h-[680px]
        className={`lg:py-10 py-5   overflow-hidden xl:min-h-[900px] lg:min-h-[680px]  relative ${bgColor == "#fff" ? 'text-black' : 'text-white'}`}
        style={{background:bgColor}}
      >
        <div className="max-w-full mx-auto lg:px-10 px-4">
          <div className="challenges_main">
            {/* <h1 className='sm:text-4xl text-2xl font-bold w-[287px] pb-8 '>{challengesweneed.title}</h1>
             */}
            <h1
              className=" text-2xl lg:text-[42px]/[54px] font-bold  pb-2 "
              dangerouslySetInnerHTML={{ __html: data.title }}
            ></h1>
          </div>
          <div className="sm:flex flex-column w-full justify-between  ">
            {/* <div className="challenges_img lg:w-[25%]  flex"> */}
            <div className="xl:w-[50%] lg:w-[50%]  " >
              {/* xl:size-[570px] */}
                {/* <div className="challenges_img xl:size-[700px] lg:size-[440px]  sm:size-[330px]  flex lg:bottom-0 -bottom-2 lg:left-0 -left-2 sm:absolute"> */}
              {/* <div className="challenges_img xl:size-[700px] lg:size-[500px]  sm:size-[330px]  flex lg:bottom-0 -bottom-2 lg:left-0 -left-2 -translate-x-10"> */}
              <div className="challenges_img  xl:max-w-[700px] lg:max-w-[500px] sm:max-w-[330px] aspect-square  flex lg:bottom-0 -bottom-2 lg:left-0 -left-2 lg:-translate-x-10">
                <img
                    src={data.image}
                    alt=" challenges we help"
                    className="clipped_image w-full  h-auto    object-contain aspect-square "
                />
                </div>
            </div>
            <div className="xl:w-[50%] lg:w-[50%]   lg:pt-0 pt-5">
              <ul className=" ">
                {data.data.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="lg:py-8 py-3 first-of-type:pt-0 font-semibold xl:text-xl lg:text-lg text-sm border-b-2 border-[#bbbbbb] last:border-b-0 
       whitespace-normal break-words leading-relaxed text-justify ms-auto "
      //  max-w-[600px]
                    >
                      {item.description}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Challengesweneed;
