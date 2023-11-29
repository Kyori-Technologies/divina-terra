import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../styles/swiper-styles.css";
import gelli from "~/assets/images/geleia.png";
import wheyCard from "~/assets/images/whey-card.png";
import wheyChocolate from "~/assets/images/whey-chocolate.png";

export function Carousel() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      className="bg-brand-golden-light"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
    >
      <SwiperSlide>
        <img src={wheyCard.src} className="object-cover" alt="Product Omega3" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={wheyChocolate.src}
          className="object-cover"
          alt="Product Omega3"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img src={gelli.src} className="object-cover" alt="Product Omega3" />
      </SwiperSlide>
    </Swiper>
  );
}
