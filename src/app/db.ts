export type MealInfo = {
  id: number;
  text: string;
  description: string;
  href: string;
  nutritional_value: string[];
  value: string[];
  imageSrc: string;
  ingredients: string[];
  isVegetarian: boolean;
  isVegan: boolean;
  isGlutinFree: boolean;
  price: number;
};

const meals: MealInfo[] = [
  {
    id: 1,
    text: "Salad",
    description: "A fresh and healthy salad with a mix of colorful vegetables",
    href: "meal/meal1",
    nutritional_value: ["Calory", "fat", "Protine", "Sugar", "Fiber"],
    value: ["120 g", "78 g", "21 g", "30 g", "490 mg"],
    imageSrc:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "2 ripe heirloom tomatoes",
      "4 slices of Grilled Chees",
      "Olive Oil",
      "Sea salt",
      "2 Eggs",
      "Green bean",
      "Corn",
    ],
    isVegetarian: true,
    isVegan: false,
    isGlutinFree: true,
    price: 4.99,
  },
  {
    id: 2,
    text: "Pizza",
    description:
      "A delicious pizza topped with healthy ingredients and melted cheese.",
    href: "meal/meal2",
    imageSrc:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Chicken", "Parsley", "Onions"],
    isVegetarian: true,
    isVegan: false,
    isGlutinFree: false,
    price: 5.99,
    nutritional_value: ["Calory", "fat", "Protine", "Sugar", "Fiber"],
    value: ["430 g", "70 g", "190 g", "30 g", "190 mg"],
  },
  {
    id: 3,
    text: "Pie",
    ingredients: ["Cheese", "Berry", "Cream"],
    description: "A cheese cake filled with Berry",
    nutritional_value: ["Calory", "fat", "Protine", "Sugar", "Fiber"],
    value: ["400 g", "43 g", "33 g", "12 g", "170 mg"],
    href: "meal/meal3",
    imageSrc:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isVegetarian: true,
    isVegan: false,
    isGlutinFree: false,
    price: 3.99,
  },
];

const mealsDE: MealInfo[] = [
  {
    id: 1,
    text: "Salat",
    description:
      "Ein frischer und gesunder Salat mit einer Mischung aus buntem Gemüse",
    href: "meal/meal1",
    nutritional_value: [
      "Kalorien",
      "Fett",
      "Eiweiß",
      "Zucker",
      "Ballaststoffe",
    ],
    value: ["120 g", "78 g", "21 g", "30 g", "490 mg"],
    imageSrc:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "2 reife Tomaten",
      "4 Scheiben gegrillten Käses",
      "Olivenöl",
      "Meersalz",
      "2 Eier",
      "Grüne Bohnen",
      "Mais",
    ],
    isVegetarian: true,
    isVegan: false,
    isGlutinFree: true,
    price: 4.99,
  },
  {
    id: 2,
    text: "Pizza",
    description:
      "Eine leckere Pizza, belegt mit gesunden Zutaten und geschmolzenem Käse.",
    href: "meal/meal2",
    imageSrc:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Huhn", "Petersilie", "Zwiebeln"],
    isVegetarian: true,
    isVegan: false,
    isGlutinFree: false,
    price: 5.99,
    nutritional_value: [
      "Kalorien",
      "Fett",
      "Protine",
      "Zucker",
      "Ballaststoffe",
    ],
    value: ["430 g", "70 g", "190 g", "30 g", "190 mg"],
  },
  {
    id: 3,
    text: "Kuchen",
    ingredients: ["Käse", "Beeren", "Sahne"],
    description: "Ein mit Beeren gefüllter Käsekuchen",
    nutritional_value: [
      "Kalorien",
      "Fett",
      "Proteine",
      "Zucker",
      "Ballaststoffe",
    ],
    value: ["400 g", "43 g", "33 g", "12 g", "170 mg"],
    href: "meal/meal3",
    imageSrc:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isVegetarian: true,
    isVegan: false,
    isGlutinFree: false,
    price: 3.99,
  },
];

export const getMeals = (lang: LanguageType) => {
  if (lang == "de") {
    return mealsDE;
  } else {
    return meals;
  }
};

export type LanguageType = "de" | "en";
