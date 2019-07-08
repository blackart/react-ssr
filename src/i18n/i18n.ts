import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            "ui-welcome": "Welcome to React and react-i18next",
            "choose-lang": "Choose language",
            "404-error": "Page not found",
            "page-main": "Main",
            "login": "Login",
            "page-1": "Page 1",
            "page-2": "Page 2",
            "page-3": "Page 3",
        }
    },
    ru: {
        translation: {
            "ui-welcome": "Добро пожаловать в React и react-i18next",
            "choose-lang": "Выберете язык",
            "404-error": "Страница не найдена",
            "page-main": "Главная",
            "login": "Вход",
            "page-1": "Страница 1",
            "page-2": "Страница 2",
            "page-3": "Страница 3",
        }
    }
};

const defaultLang = 'en';
const userLang = localStorage.getItem('lang');

let options = {
    lng: userLang || defaultLang,
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