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
        <br />
        {/* Карта Google Maps */}
        <div className="w-full h-[350px] rounded-2xl overflow-hidden mb-8 shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2922.0011783033296!2d74.59447611546577!3d42.8746119791568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7df6f4d3c05%3A0x2a62d36a5b9139e0!2sIbraimov%20St%20103%2C%20Bishkek%2C%20Kyrgyzstan!5e0!3m2!1sen!2skg!4v1693936400000!5m2!1sen!2skg"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Кнопка «Проложить маршрут» */}
        <br />

        <div className="text-center mb-12">
          <button className={s.header_btn_two}>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=ул.Ибраимова+103,+Бишкек"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3   font-semibold    transition"
            >
              <FormattedMessage id="route" />
            </a>
          </button>
        </div>
        <br />
        <br />
        {/* Инфо-блоки */}
        <div className="contact_block">
          {/* Адрес */}
          <div className="icon_ic">
            <MapPin className="w-8 h-8 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold">
                <FormattedMessage id="contact_address_title" />
              </h3>
              <p>
                г<FormattedMessage id="contact_address_text" />
              </p>
            </div>
          </div>

          {/* Телефон */}
          <div className="icon_ic">
            <Phone className="w-8 h-8 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold">
                <FormattedMessage id="contact_phone_title" />
              </h3>
              <p>
                <FormattedMessage id="contact_phone_text" />
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="icon_ic">
            <Mail className="w-8 h-8 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold">
                {" "}
                <FormattedMessage id="contact_email_title" />
              </h3>
              <p>
                {" "}
                <FormattedMessage id="contact_email_text" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
