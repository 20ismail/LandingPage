import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Coach  from './components/Acceuil/Coach'

function App() {
  return (
    
    <Router basename="/LandingPage">
      <>
        <ToastContainer position="top-right" autoClose={3000} />
        
        <Routes>
          <Route path="/" element={<Coach />} />
          {/* Ajoute d'autres routes ici si besoin */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
