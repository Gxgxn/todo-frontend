import React from "react";
import Sidebar from "./components/Sidebar";
import Task from "./components/Task";
import Navbar from "./components/Navbar";
function App() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto grid bg-slate-700  grid-cols-[minmax(400px,_1fr)_3fr] p-5 gap-2">
        <Sidebar />
        <Task />
      </div>
    </main>
  );
}

export default App;
