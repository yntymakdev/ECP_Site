"use client";
import React from "react";
import { FormattedMessage } from "react-intl";

const Footer = () => {
  return (
    <footer className="bg-[#0F4C64] text-white py-8">
      <div className="container mx-auto px-4">
        <br />
        {/* Название компании */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">
            <FormattedMessage id="footer_company_name" />
          </h3>
          <p className="text-sm text-gray-200">
            <FormattedMessage id="footer_company_description" />
          </p>
        </div>

        {/* Основная информация */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm">
          <div>
            <p className="text-gray-300">
              <FormattedMessage id="footer_inn" />
            </p>
            <p className="font-semibold">01702292510279</p>
          </div>
          <div>
            <p className="text-gray-300">
              <FormattedMessage id="footer_okpo" />
            </p>
            <p className="font-semibold">33663827</p>
          </div>
          <div>
            <p className="text-gray-300">
              <FormattedMessage id="footer_bik" />
            </p>
            <p className="font-semibold">124034</p>
          </div>
          <div>
            <p className="text-gray-300">
              <FormattedMessage id="footer_account" />
            </p>
            <p className="font-semibold">1240020001911815</p>
          </div>
          <div>
            <p className="text-gray-300">
              <FormattedMessage id="footer_ceo" />
            </p>
            <p className="font-semibold">
              <FormattedMessage id="footer_ceo_name" />
            </p>
          </div>
        </div>

        <br />
      </div>
    </footer>
  );
};

export default Footer;
