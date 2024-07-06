import MealPlanner from "./mealPlanner";

function App() {
  return (
    <>
      <header>
        <h1 className="build-your-own"><em>"</em> B U I L D &nbsp;&nbsp;&nbsp;Y O U R </h1>
        <h1 className="build-your-own"> O W N<em>"</em> </h1>
        <h1>
          {" "}
          <b className="meal-planner">Meal Planner</b>
        </h1>
      </header>
      <MealPlanner></MealPlanner>
      
    </>
  );
}

export default App;
