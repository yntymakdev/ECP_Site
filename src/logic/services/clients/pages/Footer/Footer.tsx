"use client";
import React from "react";
import { FormattedMessage } from "react-intl";

const Footer = () => {
  return (
    <footer className="bg-[#0F4C64] text-white py-8">
      <br />
      <div className="container mx-auto px-4">
        {/* Название компании */}
        <div className="mb-6 mt-8">
          <h3 className="text-lg font-semibold mb-4">
            <FormattedMessage id="footer_company_name" />
          </h3>
          <p className="text-sm text-gray-200 mt-2">
            <FormattedMessage id="footer_company_description" />
          </p>
        </div>

        {/* Основная информация */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm mt-6">
          <div>
            <p className="text-gray-300 mb-2">
              <FormattedMessage id="footer_inn" />
            </p>
            <p className="font-semibold">01702292510279</p>
          </div>
          <div>
            <p className="text-gray-300 mb-2">
              <FormattedMessage id="footer_okpo" />
            </p>
            <p className="font-semibold">33663827</p>
          </div>
          <div>
            <p className="text-gray-300 mb-2">
              <FormattedMessage id="footer_bik" />
            </p>
            <p className="font-semibold">124034</p>
          </div>
          <div>
            <p className="text-gray-300 mb-2">
              <FormattedMessage id="footer_account" />
            </p>
            <p className="font-semibold">1240020001911815</p>
          </div>
          <div>
            <p className="text-gray-300 mb-2">
              <FormattedMessage id="footer_ceo" />
            </p>
            <p className="font-semibold">
              <FormattedMessage id="footer_ceo_name" />
            </p>
          </div>
        </div>

        {/* Ссылки на документы */}
        <div className="mt-8 flex flex-col gap-3">
          {[
            {
              href: "https://docs.google.com/document/d/1u6S69BFgMUjN3gM3J5o14VBX_BKAV_Nx/edit?usp=sharing&ouid=109456113715104531439&rtpof=true&sd=true",
              label: "Открыть оферту",
            },
            {
              href: "https://docs.google.com/document/d/1yuieP8dob5wq_QN9Sz9l-MjNZXbZ4kgG/edit?usp=sharing&ouid=109456113715104531439&rtpof=true&sd=true",
              label: "Политика конфиденциальности",
            },
            {
              href: "https://docs.google.com/document/d/1GCa0Tj3_cX_t528Zdrd-zSjWq5emccdX/edit?usp=sharing&ouid=109456113715104531439&rtpof=true&sd=true",
              label: "Согласие на обработку данных",
            },
            {
              href: "https://docs.google.com/document/d/1ltznEZX9lL7bYzVqCis2H5YF9L-XBHVj/edit?usp=sharing&ouid=109456113715104531439&rtpof=true&sd=true",
              label: "Соглашение",
            },
          ].map((doc, idx) => (
            <a
              key={idx}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white italic border-b border-gray-300 hover:text-[#00B8D8] transition-colors duration-300 py-1"
            >
              {doc.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
