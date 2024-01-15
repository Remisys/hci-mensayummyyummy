// Import necessary libraries and components
"use client";
import Image from "next/image";
import { FC, useContext } from "react";
import { useTranslation } from "react-i18next";
import { MealButton } from "./MealButton";
import { ProfilesContext } from "./ProfilesContext";
import { LanguageType, Profiles, getMeals } from "./db";
import { useGetDatabaseValue } from "./meal/[meal]/query";

export const Meals: FC<{ guestMode?: boolean }> = ({ guestMode = false }) => {
  const { t, i18n } = useTranslation();

  const user = useGetDatabaseValue("user") ?? "undefined";
  const lang = (useGetDatabaseValue("lang") ?? "en") as LanguageType;
  const isVegetarian = useGetDatabaseValue("vegetarian") ?? false;
  const isVegan = useGetDatabaseValue("vegan") ?? false;
  const [profiles, _] = useContext(ProfilesContext);
  let filteredMeals = Object.entries(
    getMeals(guestMode ? (i18n.language as LanguageType) : lang)
  )
    .filter(
      ([, mealInfo]) =>
        (isVegetarian && mealInfo.isVegetarian) ||
        !isVegetarian ||
        guestMode ||
        !(user in profiles)
    )
    .filter(
      ([, mealInfo]) =>
        (isVegan && mealInfo.isVegan) ||
        !isVegan ||
        guestMode ||
        !(user in profiles)
    );
  return (
    <>
      {filteredMeals.map(([meal, mealInfo]) => (
        <MealButton key={meal} {...mealInfo} meal={meal} guestMode={guestMode}>
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
