import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/messages/en.json';
import viTranslation from './locales/messages/vi.json';
import { LangType, LocalStorageKey } from './shared/models';

const resources = {
  en: {
    translation: enTranslation,
  },
  vi: {
    translation: viTranslation,
  },
};

const getI18nFromLocalStorage = (): any => {
  return localStorage.getItem(LocalStorageKey.LocalVN) || LangType.Vi;
};

i18n.use(initReactI18next).init({
  resources,
  lng: getI18nFromLocalStorage(),
  fallbackLng: getI18nFromLocalStorage(),
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
