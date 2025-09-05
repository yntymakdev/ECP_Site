"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import iconic_as from "./img/icon (6).svg";
import { div } from "framer-motion/client";

const fadeInUp = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

const Footer_head = () => {
  return (
    <div>
      {" "}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Что вы получите{" "}
          </motion.h1>
          <br />
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center p-5 rounded-[10px] border-2 border-[#ebebeb] text-center h-30"
                >
                  <Image src={iconic_as} height={50} width={50} alt="icon" />
                  <h1 className="text_as">Удобная и быстрая оплата коммунальных услуг</h1>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer_head;
