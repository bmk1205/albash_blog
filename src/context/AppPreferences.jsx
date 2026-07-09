import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AppPreferencesContext = createContext(null);

export const AppPreferencesProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || "en"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      theme,
      language,
      toggleTheme: () =>
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light")),
      setLanguage,
      t: (valueByLanguage) => valueByLanguage?.[language] || valueByLanguage?.en || "",
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
