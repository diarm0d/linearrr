import React from "react";
import Home from "./pages/Home";


function App() {
  return (
    <div className="bg-linea-black w-screen h-screen flex justify-center items-center relative overflow-hidden">
      {!window.location.search.includes('?address=') ? <Home /> : <img src='/brr.gif' alt='Brrrrr' width='400' />}
    </div>
  );
}

export default App;



