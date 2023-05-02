import React from "react";
import Layout from "../../Components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../../Components/Images/banner.jpeg";
import Nutrition from "../../Components/Images/nutrition.png";
import Fork from "../../Components/Images/fork.jpg";
import "./style.css";

const About = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Meal Planning</h1>
          <p>Plan your life with</p>
          <p>Meal Planning.</p>
          <Link to="/Home">
            <button>For More</button>
          </Link>
        </div>
      </div>
      <div className="home" style={{ backgroundImage: `url(${Fork})` }}>
        <div className="headerContainer">
          <h1>About Us</h1>
          <p>NutriBuddy is a revolutionary healthcare application designed to simplify healthy living. 
            With our user-friendly platform, you can create delicious and nutritious meals, 
            plan your daily diet and display calorie data using calendar, and even shop for healthy products from the comfort of your own home.
            Whether you're looking to maintain a healthy lifestyle or manage a specific health condition, 
            NutriBuddy is the platform which serves all the beneficial features to do so. </p>
          <p></p>
          <Link to="/Home">
            <button>For More</button>
          </Link>
        </div>
      </div>
      <div className="home" style={{ backgroundImage: `url(${Nutrition})` }}>
        <div className="headerContainer">
          <h2>Nutrtion Planning</h2>
          <h4>Healthy diet means taking</h4>
          <h4>right amount of nutrients.</h4>
          <Link to="/mealPlanning">
            <button>For More</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default About;
