import Image from "next/image";
import { LanguageType, getMeals } from "./db";
import { useTranslationPlus } from "./i18n";

export const PageMeal: React.FC<{ id: number }> = ({ id }) => {
  const { t, i18n } = useTranslationPlus();
  const {
    imageSrc,
    ingredients,
    isVegetarian,
    isVegan,
    isGlutinFree,
    nutritional_value,
    value,
    text,
  } = getMeals(i18n.language as LanguageType)[id];

  return (
    <div className=" flex flex-col gap-[30px] max-w-[800px]">
      <h1 className="text-2xl font-semibold">{text}</h1>
      <div className="mb-[16px] ">
        <Image
          alt=""
          className="w-[300px] h-[300px]  "
          height={2080}
          src={imageSrc}
          width={2080}
        />
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
                  {ingredient}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between border border-blue-gray-50 border-solid rounded-lg p-5">
        <p className="text-[18px]">
          <YesNoIcon checked={isVegan} text={t("Vegan")} />
        </p>
        <p className="text-[18px]">
          <YesNoIcon checked={isVegetarian} text={t("Vegetarian")} />
        </p>
        <p className="text-[18px]">
          <YesNoIcon checked={isGlutinFree} text={t("Gluten Free")} />
        </p>
      </div>
      <div>
        <div className="relative flex flex-col w-full h-full overflow-scroll  bg-white border border-blue-gray-50 border-solid rounded-lg">
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr>
                <th className="p-4 border-b">
                  <p className="block font-sans text-sm antialiased font-bold leading-none ">
                    {t("Nutrient")}
                  </p>
                </th>
                <th className="p-4 border-b">
                  <p className="block font-sans text-sm antialiased font-bold leading-none ">
                    {t("Value")}
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

export const YesNoIcon: React.FC<{ checked: boolean; text: string }> = ({
  checked,
  text,
}) => (
  <div className="flex gap-2">
    <p>{text}</p>
    <p>{checked ? "✅" : "❌"}</p>
  </div>
);
