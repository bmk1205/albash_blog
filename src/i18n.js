import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { SITE_CONTENT } from "./Constants/siteContent";

const flattenTranslations = (value, prefix = "") => {
  if (Array.isArray(value)) {
    return value.reduce((acc, item, index) => {
      const nextPrefix = prefix ? `${prefix}.${index}` : `${index}`;
      return { ...acc, ...flattenTranslations(item, nextPrefix) };
    }, {});
  }

  if (!value || typeof value !== "object") {
    return {};
  }

  const isLanguageObject =
    Object.prototype.hasOwnProperty.call(value, "en") &&
    Object.prototype.hasOwnProperty.call(value, "am");

  if (isLanguageObject) {
    return {
      [`${prefix}.en`]: value.en,
      [`${prefix}.am`]: value.am,
    };
  }

  return Object.entries(value).reduce((acc, [key, nestedValue]) => {
    const nextPrefix = prefix ? `${prefix}.${key}` : key;
    return { ...acc, ...flattenTranslations(nestedValue, nextPrefix) };
  }, {});
};

const translationMap = flattenTranslations(SITE_CONTENT);

const createLanguageResource = (language) =>
  Object.entries(translationMap)
    .filter(([key]) => key.endsWith(`.${language}`))
    .reduce((acc, [key, value]) => {
      acc[key.slice(0, -(language.length + 1))] = value;
      return acc;
    }, {});

const resources = {
  en: { translation: createLanguageResource("en") },
  am: { translation: createLanguageResource("am") },
  om: { translation: createLanguageResource("en") },
};

const savedLanguage = typeof window !== "undefined" ? window.localStorage.getItem("language") : null;

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
