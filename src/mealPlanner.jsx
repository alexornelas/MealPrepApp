import { useState } from "react";
import SubmitOrder from "./submitOrder";
function MealPlanner() {
  const tiles = [
    ["Orange Harissa Chicken Breast", "Garlic Cajun Shrimp", "Chicken Tinga", "Ground Turkey w/ Sweet Peppers","Lemon Pepper Chicken Thighs","Mexican Style Ground Beef"],
    ["Mexican Calabacitas w/ Corn & Poblanos", "Steamed Broccoli", "Herb Roasted Carrots", "Roasted Sweet Potato","Sauteed Asparagus",'Steamed Edamame'],
    ["Quinoa", "Protien Pasta", "Roasted Potatoes", "Garlic Jasmine Rice","Spinach Rice","Low Cal Tortillas"],
    ["Salsa Roja", "Sweet Chili Dressing", "Salsa Verde", "Creamy Chipotle","Green Goddess","Spicy Asian Style Aoili"],
  ];
  const line = [];
  const lineCount = 6;
  const FoodCategories = ['Protien','Vegetables','Carb','Sauces']
  //activeTile is an array where each index corresponds with an index of tiles array
  const [activeTile, setActiveTile] = useState(Array(tiles.length).fill(null));

  const handleClick = (categoryIndex, index) => {
    const newActiveTiles = [...activeTile];
    newActiveTiles[categoryIndex] = index;
    setActiveTile(newActiveTiles);
    
  };
  

  for (let i = 0; i < lineCount; i++) {
    line.push(<Lines key={i} index={i} />);
  }
  return (<>
    <div className="container">
        <div className="food-label-bg">{FoodCategories.map((value,index)=>{
            return <div className="food-label" style={{backgroundColor: index % 2 ===0?'black':'#e31d1d'}} key={index}>{value}</div>
        })}</div>
      {line}
      
    </div>< SubmitOrder activeTiles = {activeTile} tiles={tiles} />
  </>);

  function Lines({ index }) {
    return (
      <div className="line">
        {tiles.map((category, categoryIndex) => {
          return (
            <div
              key={categoryIndex}
              style={{
                backgroundColor:
                  activeTile[categoryIndex] === index ? "#eccf42" : "",
              }}
              onClick={() => handleClick(categoryIndex, index)}
              className="tile"
            >
              {category[index % category.length]}
            </div>
          );
        })}
      </div>
    );
  }
  
}
export default MealPlanner;
