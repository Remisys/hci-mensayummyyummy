import Image from 'next/image';
import { LanguageType, MealInfo } from './db';

export const PageMeal: React.FC<MealInfo & {language : LanguageType}> = ({imageSrc,  isVegetarian, GlutinFree, isVgan, ingredients, nutritional_value, value, language}) => {
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px'}}>       
        <h1>{language === "EN"? "Meal Details" : "Mahlzeitdetails"}</h1>
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
                <th style={{ border: '1px solid white', padding: '8px' }}>{language === "EN"? "Ingredients" : "Zutaten"}</th>
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
          <p style={{ fontSize: '18px' }}>{`${language === "EN"? "Vegetarian" : "Vegetarier"} : ${isVegetarian ? 'Yes' : 'No'}`}</p>
          <p style={{ fontSize: '18px' }}> {`${language === "EN"? "Glutin Free" : "Glutinfrei"} : ${GlutinFree ? 'Yes' : 'No'}`}</p>
          <p style={{ fontSize: '18px' }}>Vegan: { isVgan ? 'Yes' : 'No'}</p>
        </div>
        <div>
          <h2 style={{ marginTop: '16px' }}>{language === "EN"? "Nutritional Information" : "Ernährungsinformation"}</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '8px' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid white', padding: '8px' }}>{language === "EN"? "Nutrient" : "Ernährung"}</th>
                <th style={{ border: '1px solid white', padding: '8px' }}>{language === "EN"? "Value" : "Gehalt"}</th>
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