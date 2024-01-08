// Import necessary libraries and components
import Image from "next/image";
import Link from "next/link";
import { getMeals, meals } from "./db";



// Define the Home component
export default function Home() {
  // Filter vegetarian meals
  const filteredMeals = getMeals('DE').filter((meal) => meal.isVegetarian);

  return (
    <>
      <h1 className="text-4xl font-semibold w-full text-center">MensaYummyYummy DE</h1>
      <div className="w-full grow items-center flex">
        <div className="grid text-center w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-[5%]">
          {/* Map over filtered meals and render MealButton */}
          {filteredMeals.map((meal) => (
            <MealButton key={meal.id} {...meal}>
              {/* Display meal image using Image component */}
              <Image alt="" className="w-[300px] h-[300px]" height={2080} src={meal.imageSrc} width={2080} />
            </MealButton>
          ))}
        </div>
      </div>
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
}> = ({ text, description, children, href, price }) => (
  <Link
    href={href}
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
