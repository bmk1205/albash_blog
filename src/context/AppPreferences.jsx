import { createContext, useContext, useEffect, useMemo, useState } from "react";
import i18n from "../i18n";

const AppPreferencesContext = createContext(null);

const oromoTranslations = {
  Albash: "Albash",
  Blogs: "Biloogota",
  "About Us": "Waa'ee Keenya",
  Shop: "Mana Daldalaa",
  Garment: "Uffata",
  Services: "Tajaajiloota",
  Contact: "Nu Qunnamaa",
  Theme: "Bifa",
  Language: "Afaan",
  Light: "Ifa",
  Dark: "Dukkana",
  English: "Afaan Ingilizii",
  Amharic: "Afaan Amaaraa",
  Oromo: "Afaan Oromoo",
  "Follow Us": "Nu Hordofaa",
  Price: "Gatii",
  "Welcome to Alebash Garment": "Baga gara Alebash Garment dhuftan",
  "Contact Us": "Nu Qunnamaa",
  Address: "Teessoo",
  Phone: "Bilbila",
  Email: "Imeelii",
};

export const AppPreferencesProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(storedLanguage);
    return storedLanguage;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  }, [language]);

  const value = useMemo(
    () => ({
      theme,
      language,
      toggleTheme: () =>
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light")),
      setLanguage: (nextLanguage) =>
        setLanguage((currentLanguage) =>
          typeof nextLanguage === "function"
            ? nextLanguage(currentLanguage)
            : nextLanguage
        ),
      t: (valueByLanguage) => {
        if (typeof valueByLanguage === "string") {
          return i18n.t(valueByLanguage);
        }

        if (!valueByLanguage || typeof valueByLanguage !== "object") {
          return "";
        }

        if (language === "om" && valueByLanguage.en in oromoTranslations) {
          return oromoTranslations[valueByLanguage.en];
        }

        return valueByLanguage?.[language] || valueByLanguage?.en || "";
      },
    }),
    [theme, language]
  );

  return (
    <AppPreferencesContext.Provider value={value}>
      {children}
    </AppPreferencesContext.Provider>
  );
};

export const useAppPreferences = () => {
  const context = useContext(AppPreferencesContext);
  if (!context) {
    throw new Error("useAppPreferences must be used inside AppPreferencesProvider");
  }
  return context;
};
