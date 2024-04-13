import i18next from "i18next";
import I18NextVue from "i18next-vue";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslations from "./lang/en.json";
import hrTranslations from "./lang/hr.json";

i18next.use(LanguageDetector).init({
  debug: true,
  fallbackLng: "en",
  resources: {
    en: {
      translation: enTranslations,
    },
    hr: {
      translation: hrTranslations,
    },
  },
});

export default function (app) {
  app.use(I18NextVue, { i18next });
  return app;
}
