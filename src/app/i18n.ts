import i18n from "i18next";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { initReactI18next, useTranslation } from "react-i18next";
import { LanguageType } from "./db";
import deJson from "./de.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {},
  },
  de: {
    translation: deJson,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "de", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export const useTranslationPlus = () => {
  const { t, i18n } = useTranslation();

  return { t, i18n };
};

export type translationKeys = keyof typeof deJson;

const useCustomTranslation = () => {
  const lang = useSearchParams().get("lang") ?? ("de" as LanguageType);

  const t = useCallback(
    (tKey: string) => {
      return lang === "de" ? deJson[tKey as translationKeys] : tKey;
    },
    [lang]
  );
  return { t };
};

export const useBestTranslation = (guestMode: boolean) => {
  const { t: originalT, i18n } = useTranslation();
  const { t: customT } = useCustomTranslation();
  return { t: guestMode ? originalT : customT, i18n };
};
