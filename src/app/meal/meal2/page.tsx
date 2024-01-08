"use client"
import { getMeals, LanguageType } from '@/app/db';
import { PageMeal } from '@/app/PageMeal';
import { useSearchParams } from 'next/navigation';

const Page: React.FC = () => {
  const lang = useSearchParams().get("lang") ?? "DE" 
  return (<PageMeal {...getMeals(lang as LanguageType)[1]} language={lang as LanguageType} />) 
}
  
export default Page;
