import { ReactNode, createContext, useMemo, useState } from "react";

export const LanguageContext = createContext<
  | { selectedLanguage: string; setSelectedLanguage: (value: string) => void }
  | undefined
>(undefined);

function LanguageProvider({ children }: { children: ReactNode }) {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const value = useMemo(
    () => ({ selectedLanguage, setSelectedLanguage }),
    [selectedLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
