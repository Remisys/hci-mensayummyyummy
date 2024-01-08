// Import Image from next/image
import Image from 'next/image';

// Use the correct comment for indicating a client file
// @jsxImportSource next

const PageMeal: React.FC<{
  ingredients: string[];
  nutritional_value: string[];
  value: string[];
  isVegetarian: boolean;
  isGlutenFree: boolean;
  isVgan: boolean;
}> = ({ ingredients, nutritional_value, value, isVegetarian, isGlutenFree, isVgan }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Meal Details</h1>
      <div style={{ marginBottom: '16px' }}>
        <Image
          alt=""
          className="w-[300px] h-[300px] "
          height={2080}
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={2080}
        />
      </div>
      <div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid white', padding: '8px' }}>Ingredient</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((ingredient, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid white', padding: '8px' }}>{ingredient}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <p style={{ fontSize: '18px' }}>Vegetarian: {isVegetarian ? 'Yes' : 'No'}</p>
        <p style={{ fontSize: '18px' }}>Gluten-free: {isGlutenFree ? 'Yes' : 'No'}</p>
        <p style={{ fontSize: '18px' }}>Vegan: {isVgan ? 'Yes' : 'No'}</p>
      </div>
      <div>
        <h2 style={{ marginTop: '16px' }}>Nutritional Information</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '8px' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid white', padding: '8px' }}>Nutrient</th>
              <th style={{ border: '1px solid white', padding: '8px' }}>Value</th>
            </tr>
          </thead>
          <tbody>
            {nutritional_value.map((nutrient, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid white', padding: '8px' }}>{nutrient}</td>
                <td style={{ border: '1px solid white', padding: '8px' }}>{value[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Page: React.FC = () => {
    // Example data, replace with actual data from your backend or wherever it's stored
    const mealData = {
      text: "Salad",
      description: "A fresh and healthy salad with a mix of colorful vegetables",
      ingredients: ['2 ripe heirloom tomatoes', '4 slices of Grilled Chees', 'Olive Oil', 'Sea salt', '2 Eggs', 'Green bean', 'Corn'],
      nutritional_value: ['Calory', '4g fat', 'Protine', 'Sugar', 'Fiber'],
      value: ['120 g', '78 g', '21 g', '30 g', '490 mg'],
      isVegetarian: true,
      isGlutenFree: true,
      isVgan: false,
    };
  
    return <PageMeal {...mealData} />;
  };
  
  export default Page;
