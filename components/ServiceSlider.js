import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Web Design & Development",
    description:
      "I specialize in creating unique, visually appealing websites using the latest technologies (React/Next.js, Tailwind CSS) to make your brand stand out online.",
  },
  {
    icon: <RxPencil2 />,
    title: "Logo Design & Branding",
    description:
      "Crafting memorable logos and brand identities that resonate with your audience, ensuring consistency across all touchpoints of your business.",
  },
  {
    icon: <RxReader />,
    title: "WordPress Development",
    description:
      "Building custom WordPress sites tailored to your needs, ensuring easy management, responsive designs, and seamless performance.",
  },
  {
    icon: <RxCrop />,
    title: "Custom Programming",
    description:
      "Offering tailored programming solutions that solve real business problems, whether it's automation, custom software, or API integration.",
  },
  {
    icon: <RxRocket />,
    title: "SEO & Digital Strategy",
    description:
      "Optimizing your website for search engines, driving more traffic, and improving online visibility with a comprehensive digital strategy.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="md:h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-red-600/10 opacity-80 h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:opacity-70 transition-all duration-300">
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="text-[13px] md:text-[15px] max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
