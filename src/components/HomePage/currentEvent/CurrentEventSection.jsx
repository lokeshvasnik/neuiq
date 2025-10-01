import { icons } from "../../../Utils/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const CurrentEventSection = () => {
  return (
    <div id="current_event_section">
      <div className="py-10 lg:px-10 px-2 max-w-full mx-auto">
        <div className="flex sm:flex-row flex-col-reverse items-center justify-center">
          <div className="bg-black text-white sm:p-8 p-5 xl:h-[300px] xl:w- lg:w-[40%] sm:w-3/5 w-full h-auto sm:rounded-s-3xl rounded-s-none sm:translate-x-[1px]">
            <h3 className="lg:text-5xl sm:text-3xl text-2xl font-bold mb-2 capitalize">
              Meet us at the X4
            </h3>
            <h4 className="lg:text-3xl sm:text-xl text-lg font-semibold lg:mb-10 mb-4">
              Experience Management Summit
            </h4>

            <p className="lg:text-lg text-base mb-1">Salt Palace, SLC</p>
            <p className="lg:text-lg text-base ">Mar 18 - 20</p>
          </div>

          <div className="border lg:w-[60%] sm:w-[62%] w-full h-auto rounded-3xl overflow-hidden">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              //   navigation
            >
              <SwiperSlide className="h-full">
                <img
                  src={icons.current_event_slide1}
                  alt="meetus"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={icons.meetus}
                  alt="meetus"
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={icons.current_event_slide2}
                  alt="meetus"
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentEventSection;
