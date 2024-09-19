"use client";

import React from "react";
import ServiceSlider from "@/components/ServiceSlider";
import Bulb from "@/components/Bulb";

import Circles from "@/components/Circles";

// framer motion

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center overflow-y-scroll no-scrollbar">
      <div className="container mx-auto overflow-y-scroll no-scrollbar">
        <div className="flex flex-col xl:flex-row gap-x-8 items-center">
          {/* text */}
          <div className="text-center mt-28 md:mt-8 flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 mt-4 xl:mt-8"
            >
              My services
              <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 text-[13px] md:text-[15px] max-w-[400px] mx-auto lg:mx-0"
            >
              <span className="text-white">Web Design & Development:</span> I
              create sleek, responsive websites that are visually appealing,
              user-friendly, and SEO-optimized. <br />
              <span className="text-white">Custom Programming:</span> I deliver
              tailored web solutions with clean, efficient code, from custom
              plugins to full applications. <br />
              <span className="text-white">WordPress Expertise:</span> I build
              responsive WordPress sites with custom themes and optimized
              performance. <br />
              <span className="text-white">Logo Design & Branding:</span> I
              design logos and cohesive branding that capture your business's
              essence and appeal to your audience.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
