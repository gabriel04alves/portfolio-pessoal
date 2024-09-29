import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const swiperModules = [
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
];
export const SwiperComponents = {
  Swiper,
  SwiperSlide,
};
