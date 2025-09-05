"use client";
import React from "react";
import hero_section from "./HeroSection.module.scss";
import background_photo from "./img/bg-pattern.svg";
import qr_code from "./img/image 7.svg";
import Image from "next/image";
import badge from "./img/Badge.svg";
import iphone_im from "./img/Free_iPhone_13_Mockup_4 (2) 1.svg";
import badge_two from "./img/Badge (1).svg";
import { FormattedMessage } from "react-intl";
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
                  <Image src={qr_code} alt="image" width={110} height={110} />
                </div>
                <div className={hero_section.img_t}>
                  <Image src={badge} alt="image" width={120} height={120} />
                  <Image src={badge_two} alt="image" width={100} height={100} />
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
