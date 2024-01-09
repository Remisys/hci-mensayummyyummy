"use client";
import { PageMeal } from "@/app/PageMeal";
import { LanguageType, getMeals } from "@/app/db";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Page: React.FC<{ params: { meal: string } }> = ({ params: { meal } }) => {
  const lang = useSearchParams().get("lang") ?? "de";
  const mealInfo = getMeals(lang as LanguageType)[meal];

  if (mealInfo) {
    return <PageMeal {...mealInfo} />;
  }
  return (
    <div className="w-full h-full text-xl flex-col gap-5 text-red-500 flex items-center justify-center font-bold border-b-red">
      Meal 404 Not Found!
      <Link href="/" className="border py-2 px-4 text-black font-normal">
        Go back
      </Link>
    </div>
  );
};

export default Page;
