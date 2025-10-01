import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { homePageData } from "../../../Utils/data";

import "swiper/css";
import "swiper/css/pagination";

const TestimonalSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // ✅ track the first visible slide

  return (
    <section id="what_we_do" className="px-4 py-10 lg:py-20">
      <div className="max-w-full mx-auto lg:px-10">
        <div className="header lg:max-w-[80%]">
          <h1 className="mb-5 sm:mb-0 sm:text-4xl text-2xl font-bold">
            <span className="sm:text-4xl text-2xl font-bold">Neu</span>
            IQ IN THE NEWS
          </h1>
        </div>

        <Swiper
          slidesPerView={3}
          // slidesPerGroup={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={2000}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="news-swiper md:!py-12"
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSlideChange={(swiper) => {
            // Get the real index of the first visible slide
            setActiveIndex(swiper.realIndex);
          }}
          onSwiper={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
        >
          {homePageData.newIqInTheNewsData.carouselData.map((slide, index) => (
            <SwiperSlide key={index} className="custom-slide">
              <div
                className={`relative rounded-2xl overflow-hidden group transition-all duration-300 ${
                  index === activeIndex
                    ? ''
                    : 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-24 flex items-start">
                  <p className="text-sm sm:text-lg pb-8 font-semibold">
                    {slide.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonalSection;
