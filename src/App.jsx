import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Admin dashboard

import { ToastContainer } from "react-toastify";
import Coach  from './components/Acceuil/Coach'

// Shop (public site)



// Ajoutez cette route à votre configuration


function App() {
  return (
    <Router>

<>
      <ToastContainer position="top-right" autoClose={3000} />
      {/* Autres composants */}
    </>
      
      <Routes>
      
        <Route path="/" element={<Coach />}/>
      {/*  */}
     
      
      </Routes>
    </Router>
  );
}

export default App;
