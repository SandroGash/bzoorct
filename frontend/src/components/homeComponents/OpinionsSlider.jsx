import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";

const OpinionsSlider = () => {
  const [opinions, setOpinions] = useState([]);

  /*useEffect(() => {
    axios
      .get("http://localhost:5000/opinions")
      .then((response) => setOpinions(response.data))
      .catch((error) =>
        console.error("Erreur lors du chargement des avis :", error)
      );
  }, []);*/

  return (
    <div className="bg-[#E9DECB] p-10">
      <h2 className="text-[#231301] text-lg md:text-4xl font-jomolhari font-light pb-6 text-center">
        Votre avis nous intéresse
      </h2>
      <Swiper
        style={{
          "--swiper-pagination-color": "#6B8E23",
          "--swiper-pagination-bottom": "2px",
        }}
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="w-full h-auto"
      >
        {opinions.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="bg-[#D9D9D9] p-4 mb-12 rounded-lg shadow-xl shadow-[#6B8E23] overflow-hidden">
              <p className="text-sm lg:text-lg font-light font-jomolhari text-center italic">
                "{item.comment}"
              </p>
              <p className="text-sm font-bold font-jomolhari text-left mt-4">
                - {item.nickname} -
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OpinionsSlider;
