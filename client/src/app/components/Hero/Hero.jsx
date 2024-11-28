"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import Image1 from "../../assets/HeroImg/vrt.png";
// import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image1.png";
import Button from "../Shared/Button";

const HeroData = [
  // {
  //   id: 1,
  //   img: Image1,
  //   subtitle: "Beats Solo",
  //   title: "Wireless",
  //   title2: "Virtual",
  // },
  // {
  //   id: 2,
  //   img: Image2,
  //   subtitle: "Beats Solo",
  //   title: "Branded",
  //   title2: "Laptops",
  // },
  {
    id: 3,
    img: Image3,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magni id officiis laboriosam omnis in, voluptatum iure, praesentium debitis libero perspiciatis!",
  },
];

const Hero = () => {
  const slideVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          {HeroData.map((data) => (
            <motion.div
              key={data.id}
              className="px-4"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={slideVariants}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text Content Section */}
                <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 className="text-2l sm:text-6l lg:text-2l font-bold">
                    {data.subtitle}
                  </h1>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    {data.title}
                  </h1>
                  <h1 className="text-5xl uppercase text-white sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">
                    {data.title2}
                  </h1>
                  <div>
                    <Button
                      text="Shop By Category"
                      bgColor="bg-primary"
                      textColor="text-white"
                    />
                  </div>
                </div>
                {/* Image Section */}
                <div className="order-1 sm:order-2">
                  <div>
                    <Image
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
