import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const CashFlowChart = () => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Cash Flow',
                data: [],
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false,
            },
        ],
    });

    useEffect(() => {
        const fetchFinancialData = async () => {
            try {
                const revenueResponse = await axios.get('/api/revenus'); // Assure-toi que cette route existe
                const expenseResponse = await axios.get('/api/depenses'); // Assure-toi que cette route existe
                
                // Transformation des données
                const labels = revenueResponse.data.map(item => item.date); // Les dates
                const revenues = revenueResponse.data.map(item => item.amount); // Les revenus
                const expenses = expenseResponse.data.map(item => item.amount); // Les dépenses
                
                // Calcul du Cash Flow
                const cashFlow = revenues.map((revenue, index) => revenue - (expenses[index] || 0)); // Soustraction

                setChartData({
                    labels: labels,
                    datasets: [
                        {
                            label: 'Cash Flow',
                            data: cashFlow,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            fill: false,
                        },
                    ],
                });
            } catch (error) {
                console.error('Erreur lors de la récupération des données financières:', error);
            }
        };

        fetchFinancialData();
    }, []);

    return (
        <div className="bg-red-300 rounded-lg shadow p-4">
            <h2 className="text-xl">Cash Flow</h2>
            <Line data={chartData} />
        </div>
    );
};

export default CashFlowChart;
