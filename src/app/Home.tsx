// Import necessary libraries and components
"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FC, useContext } from "react";
import { useTranslation } from "react-i18next";
import { IoPeople } from "react-icons/io5";
import { MealButton } from "./MealButton";
import { ProfilesContext } from "./ProfilesContext";
import { TranslateButton } from "./TranslateButton";
import { LanguageType, Profiles, getMeals, profiles } from "./db";
import { useGetDatabaseValue } from "./meal/[meal]/query";
import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

export const Home: React.FC<{ showingMeal?: string }> = ({
  showingMeal: showingMeal,
}) => {
  const [timeLeft, setTimeLeft] = useState(120); 
  const timerStyle = `
    absolute top-0 left-0 m-4
    bg-white text-black
    px-3 py-2
    border border-gray-300
    rounded-lg
    shadow
    font-bold text-lg
  `;
  const params = useSearchParams();
  const user = useGetDatabaseValue("user") ?? "undefined";
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [profiles, _] = useContext(ProfilesContext);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTime = parseInt(localStorage.getItem('timeLeft') ?? '120');
      setTimeLeft(storedTime);
    }
  }, []);

  useEffect(() => {
    if (user in profiles) {
      if (timeLeft === 0) {
        localStorage.removeItem('timeLeft');
        if (typeof window !== 'undefined') {
          window.location.href = '/'; 
        }
        return;
      }

      const timerId = setTimeout(() => {
        setTimeLeft(oldTime => {
          const newTime = oldTime - 1;
          localStorage.setItem('timeLeft', newTime.toString());
          return newTime;
        });
      }, 1000);

      return () => clearTimeout(timerId);
    } else {
      localStorage.removeItem('timeLeft');
      setTimeLeft(120);
    }
  }, [timeLeft, user, profiles]);

  return (
    <div className={`flex flex-col items-stretch w-full h-full ${showingMeal ? "" : "px-10 py-10"}`}>
      {}
      <div className={timerStyle}>
        <span>Time left: {timeLeft}s</span>
      </div>
      <div className="flex flex-col lg:flex-row justify-between w-full  ">
        <h1 className="w-full text-xl  lg:text-3xl font-semibold px-5  text-center ">
          MensaYummyYummy
        </h1>
        {showingMeal && (
          <h1 className="w-full text-xl  lg:text-3xl font-semibold px-5  text-center ">
            {t("Guest")}
          </h1>
        )}
        {!showingMeal && !(user in profiles) && (
          <Link href="/scan">
            <button className="w-full lg:w-auto text-2xl border hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 py-3 px-3 rounded-full flex items-center justify-center ">
              <IoPeople />
            </button>
          </Link>
        )}

        {!showingMeal && user in profiles && (
          <Link href="/">
            <button className="w-full lg:w-auto text-2xl border bg-green-600 text-white   hover:border-red-300 hover:text-red-500 hover:bg-red-100 py-3 px-3 rounded-full flex items-center justify-center">
              <IoPeople />
            </button>
          </Link>
        )}

        {showingMeal && <h1></h1>}
      </div>

      <div className="w-full grow items-center flex my-10 ">
        <div
          className={`flex flex-col w-full gap-10 ${
            showingMeal ? "" : "lg:flex-row lg:justify-between"
          } `}
        >
          <Meals showingMeal={showingMeal} />
        </div>
      </div>

      <TranslateButton />
    </div>
  );
};

const Meals: FC<{ showingMeal?: string }> = ({ showingMeal }) => {
  const { t, i18n } = useTranslation();
  const filteredMeals = Object.entries(
    getMeals(i18n.language as LanguageType)
  ).filter(([meal, mealInfo]) => meal !== "");
  const params = useSearchParams();
  const user = useGetDatabaseValue("user") as string | null;
  const [profiles, _] = useContext(ProfilesContext);
  return (
    <>
      {filteredMeals.map(([meal, mealInfo]) => (
        <MealButton
          key={mealInfo.id}
          {...mealInfo}
          meal={meal}
          splitScreen={!!showingMeal}
        >
          <div className="relative w-[300px] h-[300px]">
            <Image
              alt=""
              className="w-[300px] h-[300px]"
              height={2080}
              src={mealInfo.imageSrc}
              width={2080}
            />
            {user &&
              !showingMeal &&
              user in profiles &&
              profiles[user as Profiles].some((fav) => fav === mealInfo.id) && (
                <p
                  className={`absolute top-[12px] right-[12px] text-2xl  transition-all ease-out duration-200 ${
                    true ? "opacity-100" : "opacity-0"
                  }`}
                >{`💖`}</p>
              )}
          </div>
        </MealButton>
      ))}
    </>
  );
};
