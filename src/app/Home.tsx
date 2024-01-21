"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { IoPeople } from "react-icons/io5";
import { Meals } from "./Meals";
import { TranslateButton } from "./TranslateButton";
import { profiles } from "./db";
import { useGetDatabaseValue } from "./meal/[meal]/query";
import { timerStyle, timerStyleRed, useTimer } from "./useTimer";

export const Home: React.FC<{ guestMode?: boolean }> = ({
  guestMode = false,
}) => {
  const user = useGetDatabaseValue("user") ?? "undefined";
  const { t } = useTranslation();

  const timeLeft = useTimer();
  return (
    <div
      className={`flex flex-col items-stretch w-full h-full py-10 px-10 ${
        user in profiles ? "" : " "
      } `}
    >
      <div
        className={
          user in profiles
            ? timeLeft > 10
              ? timerStyle
              : timerStyleRed
            : "hidden"
        }
      >
        <span>Time left: {timeLeft}s</span>
      </div>

      <div className="flex flex-col lg:flex-row justify-between w-full">
        <h1 className="w-full text-xl lg:text-3xl font-semibold text-center">
          MensaYummyYummy
        </h1>
        {guestMode ? (
          <h2 className="w-full text-xl lg:text-3xl font-semibold text-center">
            {t("Guest")}
          </h2>
        ) : (
          <h2 className="text-xl lg:text-2xl font-medium text-center">
            {user !== "undefined" ? `Hello, ${user}` : "Welcome!"}
          </h2>
        )}

        {!(user in profiles) && !guestMode && (
          <Link href="/scan">
            <button className="w-full lg:w-auto text-2xl border hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 py-3 px-3 rounded-full flex items-center justify-center">
              <IoPeople />
            </button>
          </Link>
        )}

        {user in profiles && !guestMode && (
          <Link href="/">
            <button className="w-full lg:w-auto text-2xl border bg-green-600 text-white hover:border-red-300 hover:text-red-500 hover:bg-red-100 py-3 px-3 rounded-full flex items-center justify-center">
              <IoPeople />
            </button>
          </Link>
        )}
      </div>

      <div className="w-full grow items-center flex my-10">
        <div
          className={`flex flex-col w-full gap-10 flex-wrap ${
            user in profiles ? "" : "lg:flex-row lg:justify-between"
          } `}
        >
          <Meals guestMode={guestMode} />
        </div>
      </div>

      <TranslateButton guestMode={guestMode} />
    </div>
  );
};
