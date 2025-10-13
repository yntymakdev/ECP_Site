"use client";
import React from "react";
import hero_section from "./HeroSection.module.scss";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import s from "../../Header/Header.module.scss";
import Link from "next/link";

import qr_code from "./img/photo_2025-10-03_16-28-12.jpg";
import badge_android from "./img/android-head_3D.svg";
import iphone_im from "./img/Free_iPhone_13_Mockup_4 (2) 1.svg";
import badge_two from "./img/Badge (1).svg";
import badge from "./img/Badge.svg";
import whatsapp_icon from "../../Header/img/logos_whatsapp-icon.svg";

const HeroSection = () => {
  return (
    <div className={hero_section.header}>
      <div className="container">
        <div className={hero_section.head_header}>
          <div className={hero_section.head_as}>
            <div className={hero_section.home_section}>
              <h1>
                <FormattedMessage id="page.about.title_1" />
              </h1>
              <p>
                <FormattedMessage id="page.about.title_2" />
              </p>
            </div>

            <div className={hero_section.all_img}>
              {/* Левая часть — QR-код */}
              <div className={hero_section.qr_block}>
                <Image src={qr_code} alt="QR Code" width={180} height={180} />
              </div>

              {/* Правая часть — кнопки */}
              <div className={hero_section.buttons_block}>
                <Link href={"https://wa.me/+996557223322?text=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C"}>
                  <button className={s.header_btn_two}>
                    <Image src={whatsapp_icon} alt="Whatsapp" width={20} height={20} className={s.btn_icon} />
                    <span>Whatsapp Bot</span>
                  </button>
                </Link>

                {/* <Link href={"https://play.google.com/store/apps/details?id=kg.mycloud.nssc"}>
                  <button className={s.header_btn_two}>
                    <Image src={badge_android} alt="Android" width={20} height={20} className={s.btn_icon} />
                    <span>Скачать Android</span>
                  </button>
                </Link> */}

                <Link href={"https://apps.apple.com/kg/app/%D0%B5%D1%80%D1%86/id6751805985"}>
                  <Image src={badge_two} alt="App Store" width={200} height={45} />
                </Link>

                <Link href={"https://play.google.com/store/apps/details?id=kg.mycloud.nssc"}>
                  <Image src={badge} alt="App Store" width={200} height={45} />
                </Link>
              </div>
            </div>
          </div>

          <div className={hero_section.im_phone}>
            <Image src={iphone_im} width={550} height={550} alt="iPhone Mockup" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
