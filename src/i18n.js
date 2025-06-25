// i18n.ts yoki i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['en', 'uz', 'ru'],
        fallbackLng: 'en',
        debug: true,
        backend: {
            loadPath: '/locales/{{lng}}/translation.json',
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false,
        },
    })
    .catch((error) => {
        console.error('i18next initialization failed:', error);
    });

export default i18n; // ✅ MUHIM
