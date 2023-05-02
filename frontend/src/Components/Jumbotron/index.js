import React, { useState, useContext } from "react";
import "./style.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { MyContext } from "../../context";
import axios from "axios";

function MyJumbotron() {
  const [searchInput, setsearchInput] = useState("");
  const { setMeals } = useContext(MyContext);

  function handleSearch() {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
      )
      .then(({ data }) => setMeals(data.meals));
  }
  return (
    <div className="my-jumbotron">
      <h1>Welcome</h1>
      <h4>You can search for your meal</h4>
      <div className="button-input">
        <InputGroup className="mb-3 ">
          <FormControl
            placeholder="Search For Your Meal..."
            aria-label="Meal Search Input"
            aria-describedby="Meal-Search-button"
            value={searchInput}
            onChange={(e) => setsearchInput(e.target.value)}
          />
          <Button
            variant="danger"
            id="Meal-Search-button"
            onClick={handleSearch}
          >
            Search
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}

export default MyJumbotron;
