import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

// Slider des têtes d'animaux
const AnimalSlider = () => {
  const animals = [
    { src: "/images/teteanimaux/tetecougar.jpg", alt: "Animal 1" },
    { src: "/images/teteanimaux/tetechameleon.png", alt: "Animal 2" },
    { src: "/images/teteanimaux/tetecroco.jpg", alt: "Animal 3" },
    { src: "/images/teteanimaux/tetegorille.jpg", alt: "Animal 4" },
    { src: "/images/teteanimaux/tetegorille2.jpg", alt: "Animal 5" },
    { src: "/images/teteanimaux/tetejaguard.jpg", alt: "Animal 6" },
    { src: "/images/teteanimaux/tetelezard.jpg", alt: "Animal 7" },
    { src: "/images/teteanimaux/tetelion1.jpg", alt: "Animal 8" },
    { src: "/images/teteanimaux/teteperruche.jpg", alt: "Animal 9" },
    { src: "/images/teteanimaux/teteserpent.png", alt: "Animal 10" },
    { src: "/images/teteanimaux/tetesinge.jpg", alt: "Animal 11" },
    { src: "/images/teteanimaux/tetetigre.jpg", alt: "Animal 12" },
  ];

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={20}
      slidesPerView={4}
      pagination={{ clickable: true }}
      navigation
      loop={true}
      className="w-full h-40"
    >
      {animals.map((animal, index) => (
        <SwiperSlide key={index}>
          <img
            src={animal.src}
            alt={animal.alt}
            className="w-32 h-32 rounded-full object-cover mx-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// Composant général avec le titre et le slider
const ResidentsSection = () => {
  return (
    <div className="bg-[#FFFFE0] py-8 px-4">
      <h2 className="text-4xl text-center font-jomolhari text-[#231301] mb-8">
        Nos résidents ont hâte de faire votre connaissance.
      </h2>

      {/* Arrière-plan image paysage */}
      <div className="relative rounded-lg overflow-hidden mb-8">
        <img
          src="/images/slidepaysage/slideanimaux.jpg"
          alt="Paysage"
          className="w-full h-64 object-cover"
        />

        {/* Slider des têtes d'animaux */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-11/12">
            <AnimalSlider />
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link
          to="/habitats"
          className="bg-[#231301] text-white font-jomolhari px-6 py-2 rounded-full text-xl hover:bg-[#4a2a19]"
        >
          Nos résidents
        </Link>
      </div>
    </div>
  );
};

export default ResidentsSection;
