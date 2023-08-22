import React from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

{/* <img src='/brr.gif' alt='Brrrrr' width='400' /> */}


function App() {
  return (
    <div className="bg-linea-black w-full h-screen flex justify-center items-center relative overflow-hidden">
      {!window.location.search.includes('?address=') ? <Home /> : <Dashboard /> }
    </div>
  );
}

export default App;



