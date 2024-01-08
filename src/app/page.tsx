// Import necessary libraries and components
import Image from "next/image";
import Link from "next/link";

// Define the meals array
const meals = [
  {
    id: 1,
    text: "Salad",
    description: "A fresh and healthy salad with a mix of colorful vegetables",
    href: "meal/meal1",
    imageSrc:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ['2 ripe heirloom tomatoes', '4 slices of Grilled Chees', 'Olive Oil', 'Sea salt', '2 Eggs', 'Green bean', 'Corn'],
    isVegetarian: true,
    isVgan: false,
    GlutinFree: true,
    price: 4.99,
  },
  {
    id: 2,
    text: "Pizza",
    description: "A delicious pizza topped with healthy ingredients and melted cheese.",
    href: "meal/meal2",
    imageSrc:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ['Chicken', 'Parsley', 'Onions'],
    isVegetarian: true,
    isVgan: false,
    GlutinFree: false,
    price: 5.99,
  },
  {
    id: 3,
    text: "Pie",
    ingredients: ['Chicken', 'Parsley', 'Onions'],
    description: "A cheese cake filled with Berry",
    href: "meal/meal3",
    imageSrc:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isVegetarian: true,
    isVgan: false,
    GlutinFree: false,
    price: 3.99,
  },
];

// Define the Home component
export default function Home() {
  // Filter vegetarian meals
  const filteredMeals = meals.filter((meal) => meal.isVegetarian);

  return (
    <>
      <h1 className="text-4xl font-semibold w-full text-center">MensaYummyYummy</h1>
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
