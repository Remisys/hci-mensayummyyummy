"use client";
export type MealInfo = {
  id: string;
  name: string;
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
  stairway: "A" | "B" | "C";
};
type MealMap = {
  [key: string]: MealInfo;
};
const meals: MealMap = {


  salad: {
    stairway: "C",
    id: "salad",
    name: "Salad",
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
    isVegetarian: false,
    isVegan: false,
    isGlutinFree: true,
    price: 4.99,
  },
  pizza: {
    stairway: "A",
    id: "pizza",
    name: "Pizza",
    description:
      "A delicious pizza topped with healthy ingredients and melted cheese.",
    href: "meal/meal2",
    imageSrc:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Chicken", "Parsley", "Onions"],
    isVegetarian: false,
    isVegan: false,
    isGlutinFree: false,
    price: 5.99,
    nutritional_value: ["Calory", "fat", "Protine", "Sugar", "Fiber"],
    value: ["430 g", "70 g", "190 g", "30 g", "190 mg"],
  },

  pie: {
    id: "pie",
    name: "Pie",
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
    stairway: "B",
  },
  falafel: {
    stairway: "C",
    id: "falafel",
    name: "Falafel",
    description: "Delicious falafel made from chickpeas served with fresh vegetables.",
    href: "meal/meal4",
    nutritional_value: ["Calories", "Fat", "Protein", "Sugar", "Fiber"],
    value: ["220 g", "15 g", "14 g", "2 g", "6 g"],
    imageSrc: "https://www.alphafoodie.com/wp-content/uploads/2019/04/DSC_1348.jpg",
    ingredients: [
        "Chickpeas",
        "Fresh herbs",
        "Spices",
        "Tomatoes",
        "Cucumber",
        "Red onion",
        "Tahini sauce",
        "Pita bread"
    ],
    isVegetarian: true,
    isVegan: true,
    isGlutinFree: false,
    price: 4.49,
  },
  fajitaPasta: {
    stairway: "B",
    id: "fajitaPasta",
    name: "Fajita-Style Pasta",
    description: "Delicious pasta with fajita chicken colorful bell peppers.",
    href: "meal/meal5",
    nutritional_value: ["Calories", "Fat", "Protein", "Sugar", "Fiber"],
    value: ["300 g", "12 g", "18 g", "8 g", "4 g"],
    imageSrc: "https://images.immediate.co.uk/production/volatile/sites/30/2021/05/Fajita-pasta-e6e5b93.jpg?quality=90&webp=true&resize=600,545",
    ingredients: [
        "Pasta",
        "Chicken strips",
        "Bell peppers",
        "Onions",
        "Tomatoes",
        "Fajita seasoning",
        "Olive oil",
        "Cheese"
    ],
    isVegetarian: false,
    isVegan: false,
    isGlutinFree: false,
    price: 7.99,
},
currywurst: {
  stairway: "A",
  id: "currywurst",
  name: "Currywurst",
  description: "German street food sliced grilled sausage, topped with curry ketchup and powder.",
  href: "mahlzeit/mahlzeit6",
  nutritional_value: ["Kalorien", "Fett", "Protein", "Zucker", "Ballaststoffe"],
  value: ["250 g", "20 g", "15 g", "5 g", "2 g"],
  imageSrc: "https://images.getrecipekit.com/20210913101906-currywurst_vom_grill_566x453.jpg?aspect_ratio=16:9&quality=90",
  ingredients: [
      "Bratwurst or bockwurst sausage",
      "Curry ketchup",
      "Curry powder",
      "French fries (optional)"
  ],
  isVegetarian: false,
  isVegan: false,
  isGlutinFree: true,
  price: 5.49,
},


};

const mealsDE: MealMap = {
  salad: {
    id: "salad",
    name: "Salat",
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
    isVegetarian: false,
    isVegan: false,
    isGlutinFree: true,
    price: 4.99,
    stairway: "C",
  },
  pizza: {
    id: "pizza",
    name: "Pizza",
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
    stairway: "A",
  },
  pie: {
    id: "pie",
    name: "Kuchen",
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
    isVegetarian: false,
    isVegan: false,
    isGlutinFree: false,
    price: 3.99,
    stairway: "B",
  },
  falafel: {
    stairway: "C",
    id: "falafel",
    name: "Falafel",
    description: "Leckere Falafel aus Kichererbsen, serviert mit frischem Gemüse.",
    href: "mahlzeit/mahlzeit4",
    nutritional_value: ["Kalorien", "Fett", "Protein", "Zucker", "Ballaststoffe"],
    value: ["220 g", "15 g", "14 g", "2 g", "6 g"],
    imageSrc: "https://www.alphafoodie.com/wp-content/uploads/2019/04/DSC_1348.jpg",
    ingredients: [
        "Kichererbsen",
        "Frische Kräuter",
        "Gewürze",
        "Tomaten",
        "Gurke",
        "Rote Zwiebel",
        "Tahini-Sauce",
        "Pita-Brot"
    ],
    isVegetarian: true,
    isVegan: true,
    isGlutinFree: false,
    price: 4.49,
  },
  fajitaPasta: {
    stairway: "B",
    id: "fajitaPasta",
    name: "Fajita-Style Pasta",
    description: "Leckere Pasta mit fajita Hähnchen und bunten Paprika.",
    href: "mahlzeit/mahlzeit5",
    nutritional_value: ["Kalorien", "Fett", "Protein", "Zucker", "Ballaststoffe"],
    value: ["300 g", "12 g", "18 g", "8 g", "4 g"],
    imageSrc: "https://images.immediate.co.uk/production/volatile/sites/30/2021/05/Fajita-pasta-e6e5b93.jpg?quality=90&webp=true&resize=600,545",
    ingredients: [
        "Pasta",
        "Hähnchenstreifen",
        "Bunte Paprika",
        "Zwiebeln",
        "Tomaten",
        "Fajita-Gewürzmischung",
        "Olivenöl",
        "Käse"
    ],
    isVegetarian: false,
    isVegan: false,
    isGlutinFree: false,
    price: 7.99,
},
currywurst: {
  stairway: "A",
  id: "currywurst",
  name: "Currywurst",
  description: "Deutsches Streetfood mit geschnittener gegrillter Wurst, übergossen mit Curryketchup und Pulver.",
  href: "mahlzeit/mahlzeit6",
  nutritional_value: ["Kalorien", "Fett", "Protein", "Zucker", "Ballaststoffe"],
  value: ["250 g", "20 g", "15 g", "5 g", "2 g"],
  imageSrc: "https://images.getrecipekit.com/20210913101906-currywurst_vom_grill_566x453.jpg?aspect_ratio=16:9&quality=90",
  ingredients: [
      "Bratwurst oder Bockwurst",
      "Curryketchup",
      "Currypulver",
      "Pommes frites (optional)"
  ],
  isVegetarian: false,
  isVegan: false,
  isGlutinFree: true,
  price: 5.49,
},


};
export const profiles = {
  thomas: ["salad"],
  lena: ["pie"],
  hans: ["pizza", "pie"],
};

export const getMeals = (lang: LanguageType) => {
  return lang === "de" ? mealsDE : meals;
};

export type LanguageType = "de" | "en";
export type Profiles = keyof typeof profiles;
export const loginname = "admin";
export const loginpass = "admin";
export const dbname = "gmci";
export const dburl = "http://127.0.0.1:5984/" + dbname + "/";
