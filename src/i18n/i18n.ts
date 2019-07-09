import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import ru from '../assets/lang/ru.json';
import en from '../assets/lang/en.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: en
    },
    ru: {
        translation: ru
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