// Import necessary libraries and components
"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, useContext } from "react";
import { useTranslation } from "react-i18next";
import { IoPeople } from "react-icons/io5";
import { MealButton } from "./MealButton";
import { ProfilesContext } from "./ProfilesContext";
import { TranslateButton } from "./TranslateButton";
import { LanguageType, Profiles, getMeals, profiles } from "./db";
import { useBestTranslation } from "./i18n";
import { useGetDatabaseValue } from "./meal/[meal]/query";

// Define the Home component

export const Home: React.FC<{ guestMode?: boolean }> = ({
  guestMode = false,
}) => {
  // Filter vegetarian meals

  const user = useGetDatabaseValue("user") ?? "undefined";
  const { t } = useBestTranslation(guestMode);

  return (
    <div
      className={`flex  flex-col items-stretch  w-full h-full  py-10 px-10 ${
        user in profiles ? "" : " "
      } `}
    >
      <div className="flex flex-col lg:flex-row justify-between w-full  ">
        <h1 className="w-full text-xl  lg:text-3xl font-semibold   text-center ">
          MensaYummyYummy
        </h1>
        {guestMode && (
          <h1 className="w-full text-xl  lg:text-3xl font-semibold text-center ">
            {t("Guest")}
          </h1>
        )}

        {!(user in profiles) && !guestMode && (
          <Link href="/scan">
            <button className="w-full lg:w-auto text-2xl border hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 py-3 px-3 rounded-full flex items-center justify-center ">
              <IoPeople />
            </button>
          </Link>
        )}

        {user in profiles && !guestMode && (
          <Link href="/">
            <button className="w-full lg:w-auto text-2xl border bg-green-600 text-white   hover:border-red-300 hover:text-red-500 hover:bg-red-100 py-3 px-3 rounded-full flex items-center justify-center">
              <IoPeople />
            </button>
          </Link>
        )}
      </div>

      <div className="w-full grow items-center flex my-10 ">
        <div
          className={`flex flex-col w-full gap-10 ${
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

const Meals: FC<{ guestMode?: boolean }> = ({ guestMode = false }) => {
  const { t, i18n } = useTranslation();

  const user = useGetDatabaseValue("user") ?? "undefined";
  const lang = (useGetDatabaseValue("lang") ?? "en") as LanguageType;
  const isVegetarian = useGetDatabaseValue("vegetarian") ?? false;
  const isVegan = useGetDatabaseValue("vegan") ?? false;
  const [profiles, _] = useContext(ProfilesContext);
  console.log("");
  let filteredMeals = Object.entries(
    getMeals(guestMode ? (i18n.language as LanguageType) : lang)
  )
    .filter(
      ([, mealInfo]) =>
        (isVegetarian && mealInfo.isVegetarian) || !isVegetarian || guestMode
    )
    .filter(
      ([, mealInfo]) => (isVegan && mealInfo.isVegan) || !isVegan || guestMode
    );
  return (
    <>
      {filteredMeals.map(([meal, mealInfo]) => (
        <MealButton
          key={mealInfo.id}
          {...mealInfo}
          meal={meal}
          guestMode={guestMode}
        >
          <div className="relative w-[300px] h-[300px]">
            <Image
              alt=""
              className="w-[300px] h-[300px]"
              height={2080}
              src={mealInfo.imageSrc}
              width={2080}
            />
            {user in profiles &&
              !guestMode &&
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
