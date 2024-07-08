import { GlobeIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";
import LANGUAGES from "../../constants";
import useLanguageContext from "./hooks";

function LanguageSelector() {
  const { i18n } = useTranslation();

  const { setSelectedLanguage } = useLanguageContext();

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const langCode = e.target.value;
    i18n.changeLanguage(langCode);
    setSelectedLanguage(langCode);
  };

  return (
    <div className="flex items-center gap-2">
      <GlobeIcon width={18} height={18} />
      <select defaultValue="en" className="bg-black" onChange={onChangeLang}>
        {LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;
