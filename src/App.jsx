import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import FinancialProvider from './components/context/FinancialContext';
import TransactionPage from './components/TransactionPage';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <FinancialProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transaction" element={<TransactionPage />} />


        </Routes>
      </FinancialProvider>
    </div>
  );
};

export default App;
