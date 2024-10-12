import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from 'i18next-http-backend';
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    debug: true,
    supportedLngs: ['en', 'fr'],
    fallbackLng: "fr",
    backend: {
        loadPath: '/public/locales/{{lng}}/translation.json', // Path to your translation files
      },
    returnObjects: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;