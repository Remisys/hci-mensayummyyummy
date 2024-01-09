// Import necessary libraries and components
"use client";
import Image from "next/image";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoPeople } from "react-icons/io5";
import { MealButton } from "./MealButton";
import { TranslateButton } from "./TranslateButton";
import { LanguageType, getMeals } from "./db";
// Define the Home component

export const Home: React.FC<{ showingMeal?: string }> = ({
  showingMeal: showingMeal,
}) => {
  // Filter vegetarian meals

  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div
      className={`flex h-screen flex-col items-stretch  w-full${
        showingMeal ? "" : "px-10 py-10 "
      } `}
    >
      <div className="flex justify-between w-full ">
        <h1 className="text-3xl font-semibold px-5 ">MensaYummyYummy</h1>
        {!showingMeal && loggedIn && (
          <button className="text-2xl border hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 py-3 px-3 rounded-full ">
            <IoPeople />
          </button>
        )}

        {!showingMeal && !loggedIn && (
          <button className="text-2xl border bg-green-600 text-white   hover:border-red-300 hover:text-red-500 hover:bg-red-100 py-3 px-3 rounded-full ">
            <IoPeople />
          </button>
        )}

        {showingMeal && <h1>50s</h1>}
      </div>

      <div className="w-full grow items-center flex my-10">
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
  ).filter(([meal, mealInfo]) => meal !== showingMeal && mealInfo.isVegetarian);

  return (
    <>
      {filteredMeals.map(([meal, mealInfo]) => (
        <MealButton
          key={mealInfo.id}
          {...mealInfo}
          meal={meal}
          splitScreen={!!showingMeal}
        >
          <Image
            alt=""
            className="w-[300px] h-[300px]"
            height={2080}
            src={mealInfo.imageSrc}
            width={2080}
          />
        </MealButton>
      ))}
    </>
  );
};
