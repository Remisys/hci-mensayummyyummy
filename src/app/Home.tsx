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
import { LanguageType, Profiles, getMeals } from "./db";
// Define the Home component

export const Home: React.FC<{ showingMeal?: string }> = ({
  showingMeal: showingMeal,
}) => {
  // Filter vegetarian meals

  const params = useSearchParams();
  const user = params.get("user");
  return (
    <div
      className={`flex  flex-col items-stretch  w-full h-full ${
        showingMeal ? "" : "px-10 py-10 "
      } `}
    >
      <div className="flex flex-col lg:flex-row justify-between w-full  ">
        <h1 className="w-full text-xl  lg:text-3xl font-semibold px-5  text-center ">
          MensaYummyYummy
        </h1>
        {!showingMeal && !user && (
          <Link href="/scan">
            <button className="text-2xl border hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 py-3 px-3 rounded-full flex items-center justify-center ">
              <IoPeople />
            </button>
          </Link>
        )}

        {!showingMeal && user && (
          <Link href="/">
            <button className="text-2xl border bg-green-600 text-white   hover:border-red-300 hover:text-red-500 hover:bg-red-100 py-3 px-3 rounded-full flex items-center justify-center">
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
  const user = params.get("user") as Profiles | null;
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
              profiles[user].some((fav) => fav === mealInfo.id) && (
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
