// src/App.jsx
import React from 'react';
import FinancialProvider from './components/context/FinancialContext'; // Correction de l'import ici
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <FinancialProvider>
      <div className="min-h-screen w-full bg-gray-100">
        <Dashboard />
      </div>
    </FinancialProvider>
  );
};

export default App;
