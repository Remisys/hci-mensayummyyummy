"use client";
import { ProfilesContext } from "@/app/ProfilesContext";
import { useBestTranslation } from "@/app/i18n";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useContext, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Stairway } from "../../MealButton";
import type { Profiles } from "../../db";
import { MealInfo } from "../../db";
import { YesNoIcon } from "./YesNoIcon";
import { useGetDatabaseValue } from "./query";

export const PageMeal: React.FC<MealInfo> = ({
  imageSrc,
  ingredients,
  isVegetarian,
  isVegan,
  isGlutinFree,
  nutritional_value,
  value,
  name,
  stairway,
  price,
  description,
  id,
}) => {
  const user = (useGetDatabaseValue("user") as Profiles) ?? "undefined";
  const { t } = useBestTranslation(false);

  const [profiles, setProfiles] = useContext(ProfilesContext);
  const favoriteFoods = user in profiles && profiles[user];
  const isFavorite = favoriteFoods && favoriteFoods.some((fav) => fav === id);
  const params = useSearchParams();
  const [isPurchased, setPurchased] = useState(false);

  return (
    <div className="relative flex flex-col gap-[40px] w-full p-10 border-r ">
      <div className="flex justify-between w-100">
        <h1 className="text-3xl font-semibold">{name}</h1>
        <div style={{ transform: 'scale(1.5)' }}>
          <Stairway stairway={stairway} />
        </div>
        <Link
          href={`../..?${params.toString()}`}
          className="text-3xl font-semibold"
        >
          <IoArrowBack />
        </Link>
      </div>
      <div className="flex w-full gap-5 items-center lg:items-stretch lg:justify-between flex-col lg:flex-row">
        <div className="relative w-[300px] h-[300px]">
          <Image
            alt=""
            className="w-[300px] h-[300px] rounded-lg"
            height={2080}
            src={imageSrc}
            width={2080}
          />

          {isFavorite && (
            <p
              className={`absolute top-[12px] right-[12px] text-2xl  transition-all ease-out duration-200 ${
                user in profiles ? "opacity-100" : "opacity-0"
              }`}
            >{`💖`}</p>
          )}
        </div>
        <div className="lg:w-[calc(100%-350px)] flex flex-col justify-between gap-5">
          <div className=" border border-blue-gray-50 border-solid rounded-lg grow p-5">
            <p className="text-xl h-[80%] ">{`${description}`}</p>
          </div>
          {user in profiles && (
            <>
              <button
                className={
                  "rounded-lg border border-solid p-2 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 "
                }
                onClick={() => {
                  setProfiles((profiles) => {
                    profiles[user] = isFavorite
                      ? profiles[user].filter((x) => x !== id)
                      : [...profiles[user], id];
                    return { ...profiles };
                  });
                }}
              >
                {user in profiles && !isFavorite
                  ? `${t("Add to your Favorites")} 😍`
                  : `${t("Remove from your Favorites")} `}
              </button>
              <button
                className={`rounded-lg border  border-solid p-2 hover:bg-gray-100 ${
                  !isPurchased
                    ? " hover:border-gray-300 "
                    : " border-green-500  text-green-500 "
                } hover:dark:border-neutral-700  hover:dark:bg-neutral-800/30 `}
                onClick={() => {
                  setPurchased(() => true);
                }}
              >
                {!isPurchased
                  ? `${t("Purchase for")} ${price}€`
                  : t("Purchased")}
              </button>
            </>
          )}
        </div>
      </div>
      <div className="border border-blue-gray-50 border-solid rounded-lg px-2 py-2">
        <table className="w-full border-collapse ">
          <thead>
            <tr>
              <th className=" border border-solid border-white p-2">
                {t("Ingredients")}
              </th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((ingredient, index) => (
              <tr key={index}>
                <td className="border border-solid border-white p-2">
                  {"• " + ingredient}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between border border-blue-gray-50 border-solid rounded-lg p-5 flex-wrap">
        <YesNoIcon checked={isVegan} text={t("Vegan")} />
        <YesNoIcon checked={isVegetarian} text={t("Vegetarian")} />
        <YesNoIcon checked={isGlutinFree} text={t("Gluten Free")} />
      </div>
      <div>
        <div className="relative flex flex-col w-full h-full bg-white border border-blue-gray-50 border-solid rounded-lg">
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr>
                <th className="p-4 border-b">
                  <p className="block font-sans text-sm antialiased font-bold leading-none ">
                    {t("Nutrients")}
                  </p>
                </th>
                <th className="p-4 border-b">
                  <p className="block font-sans text-sm antialiased font-bold leading-none ">
                    {t("Values")}
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {nutritional_value.map((nutrient, index) => (
                <tr key={index} className="text-gray-700">
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal  leading-normal ">
                      {nutrient}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal ">
                      {value[index]}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
