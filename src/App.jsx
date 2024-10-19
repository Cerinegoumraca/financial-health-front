// src/App.jsx
import React from 'react';
import FinancialProvider from './components/context/FinancialContext'; // Correction de l'import ici
import Dashboard from './pages/Dashboard';
import Login from './pages/login';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <FinancialProvider>
      <div className="min-h-screen bg-gray-100">
        <Login />
      </div>
    </FinancialProvider>
  );
};

export default App;
