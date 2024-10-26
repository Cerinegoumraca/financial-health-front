import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const ExpenseChart = () => {
    const [expensesData, setExpensesData] = useState({
        labels: [], // Catégories de dépenses
        datasets: [
            {
                label: 'Dépenses',
                data: [], // Montants des dépenses
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
        ],
    });

    useEffect(() => {
        axios.get('/api/depenses') // API pour récupérer les dépenses
            .then(response => {
                const categories = response.data.map(item => item.categorie);
                const montants = response.data.map(item => item.montant);

                setExpensesData({
                    labels: categories,
                    datasets: [
                        {
                            label: 'Dépenses',
                            data: montants,
                            backgroundColor: 'rgba(255, 99, 132, 0.6)',
                        },
                    ],
                });
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="bg-white rounded-lg shadow p-6 max-w-md mx-auto mt-5">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 mt-5">Expenses</h2>
            <Bar data={expensesData} />
        </div>
    );
};

export default ExpenseChart;
