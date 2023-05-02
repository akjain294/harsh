//import logo from './logo.svg';
import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AppContext from "./context";
import About from "./Pages/About";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./Pages/404/404";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Contact from "./Pages/Contact/Conatct";
import Meal from "./Pages/MealPlanning/MealDataList";
import { useUserContext } from "./Hooks/useUserContext";
import Loader from "./Components/Loader/Loader";
import Calender from "./Components/Calender/ShowCalender";
import AddEvents from "./Components/Calender/ShowCalender/AddEvents";
import UpdateEvent from "./Components/Calender/ShowCalender/UpdateEvent";

import Cart from "./Pages/Cart/Cart";
import Amazon from "./Pages/Cart/Amazon";
import { useState } from "react";

function App() {
  const { user, ready } = useUserContext();

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  return (
    <Router>
      <AppContext>
        {ready ? (
          <>
            {/* <Navbar /> */}
            <Navbar size={cart.length} show={show} setShow={setShow} />

            {}

            {warning && (
              <div className="warning">Item is already added to your cart</div>
            )}

            <Routes>
              <Route exact path="/" element={<About />} />
              <Route exact path="/Home" element={<Home />} />
              <Route
                exact
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              {/* <Route exact path="/login" element={<Login />} /> */}
              <Route
                exact
                path="/signup"
                element={!user ? <Signup /> : <Navigate to="/" />}
              />
              <Route exact path="/contactus" element={<Contact />} />

              <Route
                exact
                path="/mealPlanning/:routeCalories?"
                element={<Meal />}
              />
              <Route exact path="/calender" element={<Calender />} />
              <Route path="/events/add" element={<AddEvents />} />
              <Route path="/event/:id/update" element={<UpdateEvent />} />

              <Route
                path="/cart"
                element={
                  show ? (
                    <Amazon handleClick={handleClick} />
                  ) : (
                    <Cart
                      cart={cart}
                      setCart={setCart}
                      handleChange={handleChange}
                    />
                  )
                }
              />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route path="*" element={<Loader />} />
            </Routes>
          </>
        )}
      </AppContext>
    </Router>
  );
}

export default App;
