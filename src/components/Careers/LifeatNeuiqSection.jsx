import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import { Link } from "react-router-dom";
import { icons } from "../../Utils/icons";

import "swiper/css";
import "swiper/css/pagination";

const LifeatnewIqData = {
  title: "NEUIQ IN THE NEWS",
  carouselData: [
    { image: icons.career_carousel_1 },
    { image: icons.career_carousel_2 },
    { image: icons.career_carousel_3 },
    { image: icons.career_carousel_4 },
    { image: icons.career_carousel_5 },
    { image: icons.career_carousel_6 },
    { image: icons.career_carousel_7 },
    { image: icons.career_carousel_8 },
    { image: icons.career_carousel_9 },
    { image: icons.career_carousel_10 },
    { image: icons.career_carousel_11 },
    { image: icons.career_carousel_12 },
    { image: icons.career_carousel_13 },
    { image: icons.career_carousel_14 },
    { image: icons.career_carousel_15 },
    { image: icons.career_carousel_16 },
    { image: icons.career_carousel_17 },
    { image: icons.career_carousel_18 },
    { image: icons.career_carousel_19 },
    { image: icons.career_carousel_20 },
    { image: icons.career_carousel_21 },
    { image: icons.career_carousel_22 },
    { image: icons.career_carousel_23 },
    { image: icons.career_carousel_24 },
  ],
};

const LifeatNeuiqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="what_we_do" className="px-4 py-10 lg:py-20">
      <div className="max-w-full mx-auto lg:px-10">
        <div className="header lg:max-w-[80%] sm:mb-0 mb-8">
          <h1 className="sm:text-4xl text-2xl font-bold">
            <span className="text-[28px] sm:text-4xl text-2xl font-bold">
              LIFE @ NeuIQ
            </span>
          </h1>
        </div>

        <Swiper
          // slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={30}
          // ✅ REMOVE THIS: slidesPerGroup={3}
          pagination={{ clickable: true }}
          autoplay={  
            true
          }
          speed={2000}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="news-swiper md:!py-12"
          breakpoints={{
            0: { slidesPerView: 1, slidesPerGroup: 1, pagination: { enabled: false }, },
            800: { slidesPerView: 2, slidesPerGroup: 2  , pagination: { enabled: false }, },
            1024: { slidesPerView: 3 },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}>
          {LifeatnewIqData.carouselData.map((slide, index) => (
            <SwiperSlide key={index} className="custom-slide">
              <Link
                to="https://www.instagram.com/lifeatneuiq/"
                target="_blank"
                className={`relative rounded-2xl overflow-hidden group transition-all duration-300 ${
                  index === activeIndex
                    ? ""
                    : "grayscale opacity-60 hover:grayscale-0 hover:opacity-100"
                }`}>
                <img
                  src={slide.image}
                  alt={`Life at NeuIQ ${index + 1}`}
                  loading="lazy"
                  className="w-full h-[430px] object-fill rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-24 flex items-start">
                  <p className="text-sm sm:text-xl pb-8 font-semibold">
                    {slide.title}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LifeatNeuiqSection;
