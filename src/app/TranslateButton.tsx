// Import necessary libraries and components
"use client";
import { useState } from "react";
import { LanguageType } from "./db";
import { useTranslationPlus } from "./i18n";

export const TranslateButton = () => {
  const { i18n } = useTranslationPlus();
  const [language, setLanguage] = useState<LanguageType>(
    i18n.language as LanguageType
  );

  return (
    <button
      onClick={() => {
        setLanguage((l) => (l === "de" ? "en" : "de"));
        i18n.changeLanguage(language === "de" ? "en" : "de");
      }}
      className=" font-bold font-xl w-full group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      {language.toUpperCase()}
    </button>
  );
};
