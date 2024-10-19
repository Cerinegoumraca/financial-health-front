// src/components/Charts/ProfitsChart.jsx
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

const ProfitsChart = () => {
    const [profitsData, setProfitsData] = useState({
        labels: [], // Pour les dates
        datasets: [
            {
                label: 'Profits',
                data: [], // Données de profits
                fill: false,
                backgroundColor: 'rgba(54,162,235,0.6)',
                borderColor: 'rgba(54,162,235,1)',
            },
        ],
    });

    useEffect(() => {
        // Simuler la récupération de données en temps réel
        const fetchData = async () => {
            // Remplacez ceci par un appel API réel
            const response = await fetch('/api/profits'); // Votre API pour les profits
            const data = await response.json();
            
            // Mettez à jour les labels et les données avec les données de l'API
            setProfitsData({
                labels: data.map(entry => entry.date), // Ex. ['Jan', 'Feb', 'Mar']
                datasets: [
                    {
                        ...profitsData.datasets[0],
                        data: data.map(entry => entry.profit), // Ex. [1000, 2000, 3000]
                    },
                ],
            });
        };

        fetchData();
    }, []);

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl">Profits</h2>
            <Line data={profitsData} />
        </div>
    );
};

export default ProfitsChart;
