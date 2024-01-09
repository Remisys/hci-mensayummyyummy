"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import type { MealInfo } from "./db";
// Define the MealButton component
export const MealButton: React.FC<
  MealInfo & {
    children: React.ReactNode;
    meal: string;
    splitScreen?: boolean;
  }
> = ({ text, description, children, price, meal, splitScreen = false }) => {
  const { t, i18n } = useTranslation();

  return (
    <Link
      href={`/meal/${meal}?lang=${i18n.language}`}
      className={`${
        splitScreen ? "items-start" : ""
      } w-full group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col items-center xl:items-start`}
    >
      <h2 className="mb-3 text-2xl font-semibold">
        {`${text}`}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      {children}
      <p className="m-0 mt-2 max-w-[30ch] text-sm opacity-70">
        {`${description}`}
      </p>
      <p className="mt-2 text-lg font-bold">{`${t("Price")}: ${price.toFixed(
        2
      )}`}</p>
    </Link>
  );
};
