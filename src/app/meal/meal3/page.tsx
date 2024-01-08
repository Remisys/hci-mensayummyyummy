// Import Image from next/image
import { PageMeal } from '@/app/PageMeal';
import { getMeals, meals } from '@/app/db';

// Use the correct comment for indicating a client file
// @jsxImportSource next



const Page: React.FC = () => {
    return <PageMeal {...getMeals('DE')[2]} />;
  };
  
  export default Page;
