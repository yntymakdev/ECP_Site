"use client";
import React from "react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

const fadeInUp = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

const resultsData = [
  { valueId: "results.1.value", textId: "results.1.text" },
  { valueId: "results.2.value", textId: "results.2.text" },
  { valueId: "results.3.value", textId: "results.3.text" },
  { valueId: "results.4.value", textId: "results.4.text" },
];

const Section_footer = () => {
  return (
    <div>
      <div>
        <div className="container">
          <section className="py-12">
            <div className="container mx-auto text-center">
              <motion.h1
                className="text-3xl font-bold mb-8"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <FormattedMessage id="results.title" />
              </motion.h1>
              <br />
              <br />
            </div>

            <div className="all_box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resultsData.map((item, index) => (
                <motion.div
                  key={index}
                  className="box p-6 rounded-2xl shadow-lg bg-white"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="block text-center">
                    <h1 className="text-3xl font-bold text-indigo-600">
                      <FormattedMessage id={item.valueId} />
                    </h1>
                    <p className="mt-2 text-gray-700">
                      <FormattedMessage id={item.textId} />
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Section_footer;
