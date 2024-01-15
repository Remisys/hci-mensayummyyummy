"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { LanguageType } from "./db";
import { useTranslationPlus } from "./i18n";

export const TranslateButton: FC<{ guestMode?: boolean }> = ({
  guestMode = false,
}) => {
  const { i18n } = useTranslationPlus();
  const [language, setLanguage] = useState<LanguageType>("en");
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  return (
    <button
      onClick={() => {
        setLanguage((l) => (l === "de" ? "en" : "de"));
        if (guestMode) i18n.changeLanguage(language === "de" ? "en" : "de");
        if (!guestMode) {
          const params = new URLSearchParams(searchParams);
          params.set("lang", language === "de" ? "en" : "de");
          replace(`${pathname}?${params.toString()}`);
        }
      }}
      className="font-bold font-xl w-full group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      {language.toUpperCase()}
    </button>
  );
};
