import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=dac93ee70a0e470090ac62a1c5ffa8dd&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <article className="meal-details">
      <h1 className="meal-h">{meal.title}</h1>
      <div className="meal-image">
        <img src={imageUrl} alt="recipe" />
      </div>
      <div className="secondPart">
      <div className="meal-info">
        <ul className="meal-instructions">
          <li>Preparation time: {meal.readyInMinutes} minutes</li>
          <li>Number of servings: {meal.servings}</li>
        </ul>
      </div>
      <a href={meal.sourceUrl} className="meal-link">
        Go to Recipe
      </a>
      </div>

    </article>
  );
}
