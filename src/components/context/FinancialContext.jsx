import React, { createContext, useState, useEffect } from 'react';

// Créer le contexte
export const FinancialContext = createContext();

// Créer un provider pour fournir les données du contexte
export const FinancialProvider = ({ children }) => {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    // Simuler une récupération de données financières
    const fetchMetrics = async () => {
      const fetchedMetrics = {
        totalExpenses: 1200,
        cashFlow: 5000,
        totalProfits: 3000,
      };
      setMetrics(fetchedMetrics);
    };

    fetchMetrics();
  }, []);

  return (
    <FinancialContext.Provider value={{ metrics }}>
      {children}
    </FinancialContext.Provider>
  );
};
