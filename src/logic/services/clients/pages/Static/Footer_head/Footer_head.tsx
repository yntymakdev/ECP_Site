"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

import phone_1 from "./images/interface.svg";
import phone_2 from "./images/interface (1).svg";
import phone_3 from "./images/interface (2).svg";
import phone_4 from "./images/interface (3).svg";
import phone_5 from "./images/interface (4).svg";
import phone_6 from "./images/interface (5).svg";
import phone_7 from "./images/interface (6).svg";

import styles from "./Footer_head.module.scss";

const fadeInUp = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

const Footer_head = () => {
  return (
    <section className={styles.section}>
      <div className="container mx-auto text-center">
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FormattedMessage id="function_1" />
        </motion.h1>

        <div className={styles.grid}>
          {/* Карточка 1 */}
          <motion.div
            className={styles.card}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={styles.imageWrapper}>
              <Image src={phone_1} alt="Шаг 1" width={400} height={400} quality={80} />
            </div>
            <br />
            <p className={styles.cardText}>
              <FormattedMessage id="function_text_1" />
            </p>
          </motion.div>

          {/* Карточка 2 */}
          <motion.div
            className={styles.card}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={styles.imageWrapper}>
              <Image src={phone_2} alt="Шаг 2" width={220} height={220} quality={80} />
            </div>
            <br />
            <p className={styles.cardText}>
              <FormattedMessage id="function_text_2" />
            </p>
          </motion.div>

          {/* Карточка 3 */}
          <motion.div
            className={styles.card}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={styles.imageWrapper}>
              <Image src={phone_3} alt="Шаг 3" width={180} height={180} quality={80} />
            </div>
            <br />
            <p className={styles.cardText}>
              <FormattedMessage id="function_text_3" />
            </p>
          </motion.div>

          {/* Карточка 4 */}
          <motion.div
            className={styles.card}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={styles.imageWrapper}>
              <Image src={phone_4} alt="Шаг 4" width={200} height={200} quality={80} />
            </div>
            <br />
            <p className={styles.cardText}>
              <FormattedMessage id="function_text_4" />
            </p>
          </motion.div>

          {/* Карточка 5 */}
          <motion.div
            className={styles.card}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={styles.imageWrapper}>
              <Image src={phone_5} alt="Шаг 5" width={210} height={210} quality={80} />
            </div>
            <br />
            <p className={styles.cardText}>
              <FormattedMessage id="function_text_4" />
            </p>
          </motion.div>

          {/* Карточка 6 */}
          <motion.div
            className={styles.card}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={styles.imageWrapper}>
              <Image src={phone_6} alt="Шаг 6" width={190} height={190} quality={80} />
            </div>
            <br />
            <p className={styles.cardText}>
              <FormattedMessage id="function_text_5" />
            </p>
          </motion.div>

          {/* Карточка 7 */}
          <motion.div
            className={styles.card}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={styles.imageWrapper}>
              <Image src={phone_7} alt="Шаг 7" width={230} height={230} quality={80} />
            </div>
            <br />
            <p className={styles.cardText}>
              <FormattedMessage id="function_text_6" />
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Footer_head;
