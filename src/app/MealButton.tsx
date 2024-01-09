// Import necessary libraries and components
"use client";
import Link from "next/link";
import { LanguageType } from "./db";

// Define the MealButton component
export const MealButton: React.FC<{
  text: string;
  description: string;
  children: React.ReactNode;
  href: string;
  price: number;
  language: LanguageType;
}> = ({ text, description, children, href, price, language }) => (
  <Link
    href={`${href}?lang=${language}`}
    className="w-full group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col items-center xl:items-start"
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
