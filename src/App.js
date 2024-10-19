import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';  // Appelé une seule fois
import Footer from './components/footer';  // Appelé une seule fois
import Dashboard from './pages/Dashboard';
import ExpenseTracking from './pages/ExpenseTracking';
import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Affiché partout */}
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/expense-tracking" element={<ExpenseTracking />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </main>
        <Footer /> {/* Affiché partout */}
      </div>
    </Router>
  );
}

export default App;
