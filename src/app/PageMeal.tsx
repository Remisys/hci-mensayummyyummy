import Image from 'next/image';

export const PageMeal: React.FC<{
    ingredients: string[];
    nutritional_value: string[];
    value: string[];
    isVegetarian: boolean;
    isGlutenFree: boolean;
    isVgan: boolean;
    imageSrc: string;
  }> = ({ ingredients, nutritional_value, value, isVegetarian, isGlutenFree, isVgan, imageSrc }) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Meal Details</h1>
        <div style={{ marginBottom: '16px' }}>
          <Image
            alt=""
            className="w-[300px] h-[300px] "
            height={2080}
            src={imageSrc}
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