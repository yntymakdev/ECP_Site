"use client";
import Image from "next/image";
import React from "react";
import im_phone_section from "./img/phone_mockup.svg";
import sec_head from "./Section_head.module.scss";
import im_phone_section_child from "./Frame 16 (1).svg";
import { FormattedMessage } from "react-intl";

const Section_head = () => {
  return (
    <div className={sec_head.main}>
      <div className={sec_head.header}>
        <div>
          <Image src={im_phone_section} alt="image" width={300} height={300} />
        </div>
        <div className={sec_head.about}>
          <Image src={im_phone_section_child} alt="image" width={60} height={60} />
          <br />
          <h1>
            <FormattedMessage id="page.about.text_01" />
          </h1>
          <p>
            <FormattedMessage id="page.about.text" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section_head;
