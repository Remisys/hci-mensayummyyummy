"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FC } from "react";
import { GiStairs } from "react-icons/gi";
import type { MealInfo } from "./db";
import { useBestTranslation } from "./i18n";
// Define the MealButton component
export const MealButton: React.FC<
  MealInfo & {
    children: React.ReactNode;
    meal: string;
    guestMode?: boolean;
  }
> = ({
  stairway,
  name: text,
  description,
  children,
  price,
  meal,
  guestMode = false,
}) => {
  const { t } = useBestTranslation(guestMode);
  const params = useSearchParams();

  return (
    <Link
      href={`/meal/${meal}?${params.toString()}`}
      aria-disabled={guestMode}
      tabIndex={guestMode ? -1 : undefined}
      className={`${
        guestMode ? "items-start disabled pointer-events-none" : ""
      } w-full group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col items-center xl:items-start`}
    >
      <div className="flex justify-between w-full items-center ">
        <h2 className="mb-3 text-2xl font-semibold">{`${text}`}</h2>
        <Stairway stairway={stairway} />
      </div>

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

export const Stairway: FC<{ stairway: string }> = ({ stairway }) => (
  <p className="text-2xl   ">
    <span className=" inline-block font-bold transition-all animate-[up_1s_linear_infinite] relative left-[10px] bottom-[5px]">
      -&gt;
    </span>
    <span className="inline-block  relative top-1 ">
      <GiStairs />
    </span>
    <span className="ml-2 font-normal">{`${stairway}`}</span>
  </p>
);
