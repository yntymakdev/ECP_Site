"use client";
import Link from "next/link";
import s from "./Header.module.scss";
import { useRef } from "react";
import Image from "next/image";
import logo from "./img/logo.svg";
import SegmentedControl from "@/helpers/SegmentedControl";
import whatsapp_icon from "./img/logos_whatsapp-icon.svg";
import { useI18n } from "@/i18n/i18n";

const Header = () => {
  const { locale, setLocale } = useI18n();

  const handleLangChange = (val: string) => {
    if (val === "first") setLocale("ru");
    if (val === "second") setLocale("en");
    if (val === "third") setLocale("kg");
  };

  return (
    <div className={s.header}>
      <div className="container">
        <div className={s.head_home}>
          <div className={s.head}>
            <Link href={"/"}>
              <Image src={logo} width={60} height={60} alt="image" quality={80} />
            </Link>
          </div>

          <div className={s.head_right}>
            <div className={s.segment}>
              <SegmentedControl
                name="lang-switcher"
                callback={(val: string) => handleLangChange(val)}
                controlRef={useRef<HTMLDivElement>(null)}
                defaultIndex={locale === "ru" ? 0 : locale === "en" ? 1 : 2}
                segments={[
                  { label: "RU", value: "first", ref: useRef<HTMLDivElement>(null) },
                  { label: "EN", value: "second", ref: useRef<HTMLDivElement>(null) },
                  { label: "KG", value: "third", ref: useRef<HTMLDivElement>(null) },
                ]}
              />
            </div>
            <div className={s.btn_home}>
              <Link href={"https://wa.me/996557223322"}>
                <button className={s.header_btn_two}>
                  <Image src={whatsapp_icon} alt="Whatsapp" width={20} height={20} className={s.btn_icon} />
                  <span>Whatsapp Bot</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
