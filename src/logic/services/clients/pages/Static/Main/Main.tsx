"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import phone_1 from "./images/Снимок_экрана_2025-09-05_171036-removebg-preview.png";
import phone_2 from "./images/Снимок_экрана_2025-09-05_171426-removebg-preview.png";
import phone_3 from "./images/Снимок_экрана_2025-09-05_170937-removebg-preview.png";
import { FormattedMessage } from "react-intl";

const fadeInUp = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

const slides = [
  {
    img: phone_1,
    title: <FormattedMessage id="slides.1.title" />,
    text: <FormattedMessage id="slides.1.text" />,
  },
  {
    img: phone_2,
    title: <FormattedMessage id="slides.2.title" />,
    text: <FormattedMessage id="slides.2.text" />,
  },
  {
    img: phone_3,
    title: <FormattedMessage id="slides.3.title" />,
    text: <FormattedMessage id="slides.3.text" />,
  },
];

const Main = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <motion.h1
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FormattedMessage id="page.about.text_02" />
        </motion.h1>
        <br />
        <br />
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, centeredSlides: false }, // планшет
            1024: { slidesPerView: 3, centeredSlides: false }, // десктоп
          }}
          className="mt-10"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="flex flex-col items-center max-w-[500px] mx-auto"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="bg-[#F5F5F5] w-[300px] h-[300px] rounded-xl relative overflow-hidden flex justify-center">
                  <Image
                    src={slide.img}
                    alt="image"
                    width={200}
                    height={200}
                    quality={80}
                    className="absolute top-[-1px]"
                  />
                </div>
                <br />
                <h3 className="mt-4 text-lg font-semibold">{slide.title}</h3>
                <p className="text-gray-600">{slide.text}</p>
              </motion.div>
              <br />
              <br />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Хинт только на мобилке */}
        <p className="text-sm text-gray-500 mt-4 block sm:hidden">⬅️ Свайпните, чтобы посмотреть больше</p>
      </div>
    </section>
  );
};

export default Main;
