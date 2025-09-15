"use client";
import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import s from "../../Header/Header.module.scss";
import { FormattedMessage } from "react-intl";

const Contacts = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          <FormattedMessage id="contact" />
        </h2>
        <br />
        {/* Карта Google Maps */}
        <div className="w-full h-[350px] rounded-2xl overflow-hidden mb-8 shadow-lg">
          <div className="w-full h-[350px] rounded-2xl overflow-hidden mb-8 shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=42.87696,7 Я4.61127&hl=ru&z=17&output=embed"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="w-full h-full rounded-2xl shadow-lg"
            />
          </div>

          <div className="w-full h-[350px] rounded-2xl overflow-hidden mb-8 shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=42.87696,74.61127&hl=ru&z=17&output=embed"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="w-full h-full rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Кнопка «Проложить маршрут» */}
        {/* Кнопка «Проложить маршрут» */}
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=42.87696,74.61127"
          target="_blank"
          rel="noopener noreferrer"
          className={`${s.header_btn_two} inline-block px-6 py-3 font-semibold rounded-2xl shadow-md transition`}
        >
          <FormattedMessage id="route" />
        </a>

        <br />
        <br />
        {/* Инфо-блоки */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Адрес */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <MapPin className="w-10 h-10 text-blue-600 mb-3" />
            <h3 className="text-lg font-semibold mb-1">
              <FormattedMessage id="contact_address_title" />
            </h3>
            <p>
              <FormattedMessage id="contact_address_text" />
            </p>
          </div>

          {/* Телефон */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <Phone className="w-10 h-10 text-blue-600 mb-3" />
            <h3 className="text-lg font-semibold mb-1">
              <FormattedMessage id="contact_phone_title" />
            </h3>
            <p>
              <a href="tel:+996500000000" className="text-blue-600 hover:underline">
                <FormattedMessage id="contact_phone_text" />
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <Mail className="w-10 h-10 text-blue-600 mb-3" />
            <h3 className="text-lg font-semibold mb-1">
              <FormattedMessage id="contact_email_title" />
            </h3>
            <p>
              <a href="mailto:example@mail.com" className="text-blue-600 hover:underline">
                <FormattedMessage id="contact_email_text" />
              </a>
            </p>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
