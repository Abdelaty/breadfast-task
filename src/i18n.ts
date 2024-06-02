import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import i18nAr from './locales/ar.json';
import i18nEn from './locales/en.json';
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: i18nEn,
    },
    ar: {
      translation: i18nAr,
    },
  },
  lng: 'en', //or use detector
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
