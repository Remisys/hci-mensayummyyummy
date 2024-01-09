// Import necessary libraries and components
"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { MealButton } from "./MealButton";
import { TranslateButton } from "./TranslateButton";
import { LanguageType, getMeals } from "./db";

// Define the Home component

export const Home: React.FC = () => {
  // Filter vegetarian meals
  const { i18n } = useTranslation();
  const filteredMeals = getMeals(i18n.language as LanguageType).filter(
    (meal) => meal.isVegetarian
  );
  return (
    <>
      <h1 className="text-2xl font-semibold w-full text-center">
        MensaYummyYummy
      </h1>
      <div className="w-full grow items-center flex">
        <div className="grid text-center w-full xl:mb-0 xl:grid-cols-3 xl:text-left gap-[5%]">
          {/* Map over filtered meals and render MealButton */}
          {filteredMeals.map((meal) => (
            <MealButton
              key={meal.id}
              {...meal}
              language={i18n.language as LanguageType}
            >
              <Image
                alt=""
                className="w-[300px] h-[300px]"
                height={2080}
                src={meal.imageSrc}
                width={2080}
              />
            </MealButton>
          ))}
        </div>
      </div>
      <TranslateButton />
    </>
  );
};
