"use client"
import { PageMeal } from '@/app/PageMeal';
import { LanguageType, getMeals } from '@/app/db';
import { useSearchParams } from 'next/navigation';

const Page: React.FC = () => {  
const lang = useSearchParams().get("lang") ?? "DE" 
return (<PageMeal {...getMeals(lang as LanguageType)[0]} language={lang as LanguageType} />) }
  
export default Page;
