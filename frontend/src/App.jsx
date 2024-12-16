import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import LoginPopUp from "./components/Login/LoginPopUp";
import Teams from "./pages/Teams/Teams";
import Shop from "./pages/Shop/Shop";
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile/Profile";
import Demo from "./components/Demo/Demo";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {showLogin && (
        <LoginPopUp setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} />
      )}

      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route
            path="/"
            element={
              <Home setShowLogin={setShowLogin} isLoggedIn={isLoggedIn} />
            }
          />
          <Route path="/Demo" element={<Demo/>} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/profile" element = {<Profile/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
