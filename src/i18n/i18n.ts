import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            "ui-welcome": "Welcome to React and react-i18next",
            "404-error": "Page not found"
        }
    },
    ru: {
        translation: {
            "ui-welcome": "Добро пожаловать в React и react-i18next",
            "404-error": "Страница не найдена"
        }
    }
};

let options = {
    lng: "en",
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false // react already safes from xss
    }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({resources, ...options});

export default i18n;