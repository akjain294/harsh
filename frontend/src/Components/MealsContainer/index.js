import React from "react";
import "./style.css";
import MealCard from "../MealCard";
function MealsContainer({ meals }) {
  return (
    <div className="meals-container">
      {meals.map((meal) => (
        <MealCard key={meal.strMeal} {...meal} />
      ))}
    </div>
  );
}

export default MealsContainer;
