"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { IntlProvider } from "react-intl";
import ru from "./ru.json";
import en from "./en.json";
import kg from "./kg.json";

type Locale = "ru" | "en" | "kg";

const messages: Record<Locale, any> = {
  ru,
  en,
  kg,
};

interface I18nContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextProps>({
  locale: "ru",
  setLocale: () => {},
});

export const useI18n = () => useContext(I18nContext);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("ru");

  return (
    <I18nContext.Provider value={{ locale, setLocale }}>
      <IntlProvider
        locale={locale === "kg" ? "ru" : locale} // ✅ ru для форматирования
        messages={messages[locale]} // ✅ тексты из kg.json
        defaultLocale="ru"
      >
        {children}
      </IntlProvider>
    </I18nContext.Provider>
  );
};
