
import { motion } from "framer-motion";

const PageBanner = ({data, reverse=false}) => {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, rgb(16, 20, 33), rgb(28, 46, 91))",
      }}
      className="text-white overflow-hidden"
    >
      <div className="lg:px-0 px-4 py-10 max-w-full mx-auto relative ">
        {/* sm:h-[calc(100vh-220px)] */}
        <div className={`flex  flex-col-reverse justify-between sm:items-center sm:gap-4 xl:min-h-[640px] lg:min-h-[500px] sm:min-h-[350px] min-h-[150px] xl:h-[calc(100vh-100px)] ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
          <motion.div className={`xl:w-[55%] sm:w-[60%]  ${reverse ? 'ps-6 w-[70%] ms-auto' :'pe-6 w-[70%]'}`} initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}>
            <h4 className="sm:text-5xl text-xl font-bold lg:mb-6 mb-3">
                {data.title}
            </h4>
            <p className="sm:text-xl text-base" dangerouslySetInnerHTML={{__html:data.description}}>
              {/* {data.description} */}
              </p>
          </motion.div>
          <div className="sm:w-[35%] w-full  h-full" >
            <div 
            // style={{clipPath: "polygon(31% 2%, 87% 14%, 100% 67%, 71% 100%, 0 100%, 0 30%)"}} 
            className={`xl:size-[700px] lg:size-[540px] sm:size-[350px] lg:mx-0 mx-auto size-[170px] aspect-square  absolute ${reverse ? 'lg:-bottom-0 lg:-left-12 -bottom-0 -left-14' : 'lg:-bottom-0 lg:-right-20 -bottom-0 -right-12'}`}>
                <img src={data.image} alt="advisoryDatabanner" className="h-full w-full object-cover object-left  "/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
