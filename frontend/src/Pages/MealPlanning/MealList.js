import React from "react";
import Meal from "./Meal";
import "./MealList.css";

export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;

  return (
    <main>
      <section className="nutrients">
        <h1 className="nutrients-title">Macros</h1>
        <ul className="nutrients-list">
          <li className="nutrients-item">Calories: {nutrients.calories.toFixed(0)}</li>
          <li className="nutrients-item">Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
          <li className="nutrients-item">Fat: {nutrients.fat.toFixed(0)}</li>
          <li className="nutrients-item">Protein: {nutrients.protein.toFixed(0)}</li>
        </ul>
      </section>

      <section className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
}
