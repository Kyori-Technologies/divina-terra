import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../styles/swiper-styles.css";
import gelli from "~/assets/images/carousel/gelli.svg";
import wheyChocolate from "~/assets/images/carousel/whey-chocolate.svg";
import whey from "~/assets/images/carousel/whey.svg";

export function Carousel() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      className="h-full w-full"
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
        <img src={whey.src} className="object-cover" alt="Product Omega3" />
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
