// src/components/Charts/ExpenseChart.jsx
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

const ExpenseChart = () => {
    const [expenseData, setExpenseData] = useState({
        labels: [], // Pour les dates ou catégories
        datasets: [
            {
                label: 'Expences',
                data: [], // Données de dépenses
                backgroundColor: 'rgba(255,99,132,0.6)',
            },
        ],
    });

    useEffect(() => {
        // Simuler la récupération de données en temps réel
        const fetchData = async () => {
            // Remplacez ceci par un appel API réel
            const response = await fetch('/api/expenses'); // Votre API pour les dépenses
            const data = await response.json();
            
            // Mettez à jour les labels et les données avec les données de l'API
            setExpenseData({
                labels: data.map(entry => entry.date || entry.category), // Ex. ['Jan', 'Feb', 'Mar'] ou ['Alimentation', 'Transport']
                datasets: [
                    {
                        ...expenseData.datasets[0],
                        data: data.map(entry => entry.amount), // Ex. [100, 200, 300]
                    },
                ],
            });
        };

        fetchData();
    }, []);

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl">Expenses</h2>
            <Bar data={expenseData} />
        </div>
    );
};

export default ExpenseChart;
