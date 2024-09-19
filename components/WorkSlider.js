import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/swiper.css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { RxArrowTopRight } from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";

import { BsArrowRight } from "react-icons/bs";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Cardiac Conductor",
          path: "/demos/cardiac conductor.png",
          link: "https://herzleiter.soolution.de/",
          stack: "PHP, Bootstrap, Plesk",
        },
        {
          title: "Online Learning Platform",
          path: "/demos/online learning.png",
          link: "http://sool.de/",
          stack: "PHP, Bootstrap, Redux",
        },

        {
          title: "Better GPT",
          path: "/demos/bad marketing.png",
          link: "https://bad-marketing.eu/",
          stack: "Wordpress",
        },
        {
          title: "Fewo Solutions",
          path: "/demos/fewo.png",
          link: "https://fewo.soolution.de/",
          stack: "Wordpress, Plesk, MySQL",
        },
      ],
    },
    {
      images: [
        {
          title: "Wanjek Akademie",
          path: "/demos/wanjek akademie.png",
          link: "https://wanjek-akademie.de/",
          stack: "PHP, Plesk, Redux,",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      loop={true}
      freeMode={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      modules={[Pagination]}
      className=" h-auto"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <Link
                    href={image.link}
                    traget="_blank"
                    key={index}
                    noopener
                    noreferrer
                  >
                    <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                      <div className="flex items-center justify-center relative overflow-hidden group w-full">
                        <Image
                          src={image.path}
                          width={500}
                          height={400}
                          alt="projects"
                          className="object-contain object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              {image.stack}
                            </div>
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
