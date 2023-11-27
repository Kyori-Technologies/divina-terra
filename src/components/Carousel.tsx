import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../styles/swiper-styles.css";
import omega3 from "~/assets/images/omega.png";

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
      <SwiperSlide className="!flex !h-80 w-96 flex-row items-center justify-around  sm:justify-around lg:justify-center lg:gap-96">
        <div className="flex flex-col gap-4">
          <h1 className="text-xs font-bold text-primary sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="w-[30ch] text-xs text-secondary sm:text-sm md:w-[50ch] md:text-base lg:text-lg xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div>
          <img
            src={omega3.src}
            className="w-28 lg:w-[200px] xl:w-[200px] 2xl:w-[200px]"
            alt="Product Omega3"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="!flex !h-80 w-96 flex-row items-center justify-around bg-[#FFE2BD] sm:justify-around lg:justify-center lg:gap-96">
        <div className="flex flex-col gap-4">
          <h1 className="text-xs font-bold text-primary sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="w-[30ch] text-xs text-secondary sm:text-sm md:w-[50ch] md:text-base lg:text-lg xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div>
          <img
            src={omega3.src}
            className="w-28 lg:w-[200px] xl:w-[200px] 2xl:w-[200px]"
            alt="Product Omega3"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="!flex !h-80 w-96 flex-row items-center justify-around bg-[#FFE2BD] sm:justify-around lg:justify-center lg:gap-96">
        <div className="flex flex-col gap-4">
          <h1 className="text-xs font-bold text-primary sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="w-[30ch] text-xs text-secondary sm:text-sm md:w-[50ch] md:text-base lg:text-lg xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div>
          <img
            src={omega3.src}
            className="w-28 lg:w-[200px] xl:w-[200px] 2xl:w-[200px]"
            alt="Product Omega3"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
