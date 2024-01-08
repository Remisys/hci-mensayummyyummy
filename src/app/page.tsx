// Import necessary libraries and components
"use client"
import Image from "next/image";
import Link from "next/link";
import { LanguageType, getMeals } from "./db";
import { useState } from "react";



// Define the Home component
const Home : React.FC = () => {
  // Filter vegetarian meals
  const [language, setLanguage] =  useState<LanguageType>("DE")
  const filteredMeals = getMeals(language).filter((meal) => meal.isVegetarian);
  
  return (
    <>
      <h1 className="text-4xl font-semibold w-full text-center">MensaYummyYummy DE</h1>
      <div className="w-full grow items-center flex">
        <div className="grid text-center w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-[5%]">
          {/* Map over filtered meals and render MealButton */}
          {filteredMeals.map((meal) => (
            <MealButton key={meal.id} {...meal} language={language}>
              {/* Display meal image using Image component */}
              <Image alt="" className="w-[300px] h-[300px]" height={2080} src={meal.imageSrc} width={2080} />
            </MealButton>
          ))}
         
        </div>
        
      </div>
      <button onClick={() => setLanguage(l => l === "DE"? "EN" : "DE")} className=" font-bold font-xl w-full group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">{language}</button>
    </>
  );
}

// Define the MealButton component
const MealButton: React.FC<{
  text: string;
  description: string;
  children: React.ReactNode;
  href: string;
  price: number; 
  language : LanguageType
}> = ({ text, description, children, href, price, language }) => (
  <Link
    href={`${href}?lang=${language}`}
    
    className="w-full group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  >
    <h2 className="mb-3 text-2xl font-semibold">
      {`${text}`}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </h2>
    {children}
    <p className="m-0 mt-2 max-w-[30ch] text-sm opacity-70">
      {`${description}`}
    </p>
    <p className="mt-2 text-lg font-bold">Price: ${price.toFixed(2)}</p>
  </Link>
);

export default Home
