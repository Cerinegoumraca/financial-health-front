// src/context/FinancialContext.jsx
import  { createContext, useState, useEffect } from 'react';

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


//mocked data to simulate the backend for now :
useEffect(() => {
    const fetchData = async () => {
        const metricsData = { totalExpenses: 500, cashFlow: 1000, totalProfits: 200 };
        setMetrics(metricsData);

        const mockExpenseData = [
            { date: '2024-10-01', amount: 150 },
            { date: '2024-10-02', amount: 200 },
        ];
        setExpenseData({
            labels: mockExpenseData.map(entry => entry.date),
            values: mockExpenseData.map(entry => entry.amount),
        });

        const mockCashFlowData = [
            { date: '2024-10-01', cashFlow: 300 },
            { date: '2024-10-02', cashFlow: 700 },
        ];
        setCashFlowData({
            labels: mockCashFlowData.map(entry => entry.date),
            values: mockCashFlowData.map(entry => entry.cashFlow),
        });

        const mockProfitData = [
            { category: 'Retail', profit: 500 },
            { category: 'Wholesale', profit: 150 },
        ];
        setProfitData({
            labels: mockProfitData.map(entry => entry.category),
            values: mockProfitData.map(entry => entry.profit),
        });
    };

    fetchData();
}, []);

//real one:

    // useEffect(() => {
    
    //     const fetchData = async () => {
    //         const metricsResponse = await fetch('/api/metrics');
    //         const metricsData = await metricsResponse.json();
    //         setMetrics(metricsData);

    //         const expenseResponse = await fetch('/api/expenses');
    //         const expenseData = await expenseResponse.json();
    //         setExpenseData({
    //             labels: expenseData.map(entry => entry.date),
    //             values: expenseData.map(entry => entry.amount),
    //         });

    //         const cashFlowResponse = await fetch('/api/cash-flow');
    //         const cashFlowData = await cashFlowResponse.json();
    //         setCashFlowData({
    //             labels: cashFlowData.map(entry => entry.date),
    //             values: cashFlowData.map(entry => entry.cashFlow),
    //         });

    //         const profitResponse = await fetch('/api/profits');
    //         const profitData = await profitResponse.json();
    //         setProfitData({
    //             labels: profitData.map(entry => entry.category),
    //             values: profitData.map(entry => entry.profit),
    //         });
    //     };

    //     fetchData();
    // }, []);

    return (
        <FinancialContext.Provider value={{ metrics, expenseData, cashFlowData, profitData }}>
            {children}
        </FinancialContext.Provider>
    );
};

export default FinancialProvider;
