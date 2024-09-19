"use client";

import Image from "next/image";

import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";
import { motion } from "framer-motion";

import { fadeIn } from "@/variants";

export default function Home() {
  return (
    <div className="bg-primary/60 h-full overflow-y-scroll no-scrollbar">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            className="h1"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Elevate Your Brand <br /> For The{" "}
            <span className="text-accent">Digital Future</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[13px] md:text-[15px] max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            I bring years of hands-on experience in{" "}
            <span className="text-white">
              web design, programming, WordPress, logo design,{" "}
            </span>
            and <span className="text-white">branding</span>, delivering
            tailored digital solutions that make businesses stand out. No
            templates—just thoughtful, creative design that puts your business
            first. Elevate your brand with a
            <span className="text-white"> Full Stack Developer</span> who truly
            understands the unique needs of your business.
          </motion.p>

          {/* btn */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none  w-full h-full absolute mix-blend-color-dodge translate-z-0" />
        {/* particles */}

        <ParticlesContainer />

        {/* <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px]  max-h-[678px] absolute -bottom-32 lg:top-20 lg:right-[8%] z-50"
        >
          <Avatar />
        </motion.div> */}
      </div>
    </div>
  );
}
