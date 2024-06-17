import i18next from "i18next";
import I18NextVue from "i18next-vue";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslations from "./lang/en.json";
import hrTranslations from "./lang/hr.json";

i18next.use(LanguageDetector).init({
    debug: true,
    fallbackLng: "hr",
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

/* import { createI18n } from "vue-i18n";

function loadLocaleMessages() {
    const locales = require.context("./locales", true, /[A-Za-z0-9-_,\s]+\.json$/i);
    const messages = {};
    locales.keys().forEach((key) => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            const locale = matched[1];
            messages[locale] = locales(key).default;
        }
    });
    return messages;
}

export default createI18n({
    locale: "hr",
    fallbackLocale: "en",
    messages: loadLocaleMessages(),
}); */
