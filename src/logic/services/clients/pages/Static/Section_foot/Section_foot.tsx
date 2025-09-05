"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import styles from "./Section_foot.module.scss";
import { FormattedMessage } from "react-intl";

// Иконки по отдельности
import icon1 from "./img/icon (6).svg";
import icon2 from "./icon (7).svg";
import icon3 from "./img/icon (8).svg";
import icon4 from "./img/icon (9).svg";
import icon5 from "./img/icon (10).svg";
import icon6 from "./img/icon (11).svg";
const fadeInUp = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

// Массив карточек с отдельными иконками и текстом
const benefits = [
  { icon: icon1, textId: "benefits.1" },
  { icon: icon2, textId: "benefits.2" },
  { icon: icon3, textId: "benefits.3" },
  { icon: icon4, textId: "benefits.4" },
  { icon: icon5, textId: "benefits.5" },
  { icon: icon6, textId: "benefits.6" },
];

const Section_foot = () => {
  return (
    <section className={styles.section}>
      <div className="container mx-auto text-center">
        <motion.h1
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FormattedMessage id="benefits.title" />
        </motion.h1>
        <br />
        <br />
        <div className={styles.grid}>
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image src={item.icon} height={50} width={50} alt={`icon ${i + 1}`} />
              <h1>
                <FormattedMessage id={item.textId} />
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_foot;
