"use client";
import React from "react";
import hero_section from "./HeroSection.module.scss";
import background_photo from "./img/bg-pattern.svg";
import qr_code from "./img/photo_2025-10-03_16-28-12.jpg";
import Image from "next/image";
import badge from "./img/Badge.svg";
import badge_android from "./img/android-head_3D.svg";
import iphone_im from "./img/Free_iPhone_13_Mockup_4 (2) 1.svg";
import badge_two from "./img/Badge (1).svg";
import { FormattedMessage } from "react-intl";
import s from "../../Header/Header.module.scss";
import { useRef } from "react";
import logo from "./img/logo.svg";
import SegmentedControl from "@/helpers/SegmentedControl";
import whatsapp_icon from "../../Header/img/logos_whatsapp-icon.svg";
import { useI18n } from "@/i18n/i18n";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div>
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
              <br />
              <div className={hero_section.all_img}>
                <div className="img">
                  <Image src={qr_code} alt="image" width={150} height={150} />
                </div>
                <div className={hero_section.img_t}>
                  <Link href={"https://wa.me/996557223322"}>
                    <button className={s.header_btn_two}>
                      <Image src={whatsapp_icon} alt="Whatsapp" width={20} height={20} className={s.btn_icon} />
                      <span>Whatsapp Bot</span>
                    </button>
                  </Link>

                  {/* iOS App Store */}

                  {/* Android APK Download */}
                  <Link href={"https://ners.billing.kg/android-download/app-release.apk"}>
                    <button className={s.header_btn_two}>
                      <Image src={badge_android} alt="Android" width={20} height={20} className={s.btn_icon} />
                      <span>Скачать Android</span>
                    </button>
                  </Link>
                  <Link href={"https://apps.apple.com/kg/app/%D0%B5%D1%80%D1%86/id6751805985"}>
                    <Image src={badge_two} alt="image" width={100} height={100} />
                  </Link>
                </div>
              </div>
            </div>
            <div className={hero_section.im_phone}>
              <Image src={iphone_im} width={550} height={550} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
