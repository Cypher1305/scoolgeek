import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fr from './languages/fr.json';
import en from './languages/en.json';

// 👇 Vérifie si on est dans le navigateur
const isBrowser = typeof window !== 'undefined';

const defaultLang = isBrowser
  ? localStorage.getItem('lang') || 'fr'
  : 'fr';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
    },
    lng: defaultLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
