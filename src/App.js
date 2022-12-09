import React, { createContext } from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Login from "./components/forms/Login";
import Register from "./components/forms/Register";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import account from "./appwrite/config";
import { useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  async function checkAuth() {
    try {
      const auth = await account.get();
      auth ? setIsLoggedIn(true) : setIsLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    checkAuth();
    console.log(isLoggedIn);
  }, []);
  return (
    <BrowserRouter>
      <main>
        <Navbar loggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/signup" element={<Register />} />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/"
            element={
              <Hero loggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
