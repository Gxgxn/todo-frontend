import React from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import account from "./appwrite/config";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function clickHandler() {}
function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Hero />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
