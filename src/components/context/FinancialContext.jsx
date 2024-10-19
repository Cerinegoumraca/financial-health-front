// src/context/FinancialContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const FinancialContext = createContext();

const FinancialProvider = ({ children }) => {
    const [metrics, setMetrics] = useState({
        totalExpenses: 0,
        cashFlow: 0,
        totalProfits: 0,
    });

    const [expenseData, setExpenseData] = useState({ labels: [], values: [] });
    const [cashFlowData, setCashFlowData] = useState({ labels: [], values: [] });
    const [profitData, setProfitData] = useState({ labels: [], values: [] });

    useEffect(() => {
        const fetchData = async () => {
            const metricsResponse = await fetch('/api/metrics');
            const metricsData = await metricsResponse.json();
            setMetrics(metricsData);

            const expenseResponse = await fetch('/api/expenses');
            const expenseData = await expenseResponse.json();
            setExpenseData({
                labels: expenseData.map(entry => entry.date),
                values: expenseData.map(entry => entry.amount),
            });

            const cashFlowResponse = await fetch('/api/cash-flow');
            const cashFlowData = await cashFlowResponse.json();
            setCashFlowData({
                labels: cashFlowData.map(entry => entry.date),
                values: cashFlowData.map(entry => entry.cashFlow),
            });

            const profitResponse = await fetch('/api/profits');
            const profitData = await profitResponse.json();
            setProfitData({
                labels: profitData.map(entry => entry.category),
                values: profitData.map(entry => entry.profit),
            });
        };

        fetchData();
    }, []);

    return (
        <FinancialContext.Provider value={{ metrics, expenseData, cashFlowData, profitData }}>
            {children}
        </FinancialContext.Provider>
    );
};

export default FinancialProvider;
