"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { profiles } from "../db";
export const CardScan = () => {
  const { t } = useTranslation();
  const keys = Object.keys(profiles);
  const randomProfile = keys[Math.floor(Math.random() * keys.length)];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-xl gap-10">
      <h1>{t("Scan your card below!")}</h1>
      <Link href={`/?user=${randomProfile}`}>
        <Image
          src={
            "https://www.uni-hannover.de/fileadmin/_processed_/f/3/csm_LeibnizCard_August2018_vorne_2ba811c673.jpg"
          }
          alt={"Leibniz Card"}
          width="570"
          height="380"
        />
      </Link>
    </div>
  );
};
