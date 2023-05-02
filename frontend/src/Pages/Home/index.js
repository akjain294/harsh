import React, { useContext, useState } from "react";
import MyJumbotron from "../../Components/Jumbotron";
import { useEffect } from "react";
import axios from "axios";
import MealsContainer from "../../Components/MealsContainer";
import { MyContext } from "../../context";

//import Navbar from "../../components/Navbar";
function Home() {
  const { meals, setMeals } = useContext(MyContext);
  const [searchInput, setsearchInput] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
      )
      .then(({ data }) => setMeals(data.meals))
      .catch((error) => console.log(error));
  }, []);
  console.log(meals);
  return (
    <div>
      <MyJumbotron />
      <MealsContainer meals={meals} />
    </div>
  );
}

export default Home;
