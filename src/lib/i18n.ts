import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enLocale from "@/locales/en.json";
import bnLocale from "@/locales/bn.json";
import arLocale from "@/locales/ar.json";

i18n.use(initReactI18next).init({
 fallbackLng: "en",
 interpolation: {
  escapeValue: false,
 },
 resources: {
  en: enLocale,
  bn: bnLocale,
  ar: arLocale,
 },
});

export default i18n;
