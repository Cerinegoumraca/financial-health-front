import React from 'react';
import './App.css';
import ExpenseTracker from './pages/ExpenseTracker';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
       {/* Affichage du Header sur toutes les pages */}
      <Routes>
        <Route exact path="/" element={<ExpenseTracker />} />
        {/* Ajoutez d'autres routes ici si nécessaire */}
      </Routes>
      {/* Affichage du Footer sur toutes les pages */}
    </Router>
  );
}

export default App;
