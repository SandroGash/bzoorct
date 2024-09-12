import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      speed={900}
      loop={true}
      className="w-full h-80" // Ajuste la hauteur du slider selon tes besoins
    >
      <SwiperSlide>
        <img
          src="/images/slidepaysage/savane.jpg"
          alt="Image 1"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/slidepaysage/marais.jpg"
          alt="Image 2"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/slidepaysage/jungle.jpg"
          alt="Image 3"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
