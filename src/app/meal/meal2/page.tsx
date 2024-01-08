// Import Image from next/image
import { meals } from '@/app/db';
import { PageMeal } from '@/app/PageMeal';
// Use the correct comment for indicating a client file
// @jsxImportSource next



const Page: React.FC = () => {
   
    return <PageMeal {...getMeals('DE')[1]} />;
  };
  
  export default Page;
