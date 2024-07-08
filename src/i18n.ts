import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { FRLANG } from "./lang/fr";
import ENLANG from "./lang/en";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: ENLANG,
      },
      fr: {
        translation: FRLANG,
      },
    },
  });

export default i18n;
