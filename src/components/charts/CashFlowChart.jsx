// src/components/Charts/CashFlowChart.jsx
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

const CashFlowChart = () => {
    const [cashFlowData, setCashFlowData] = useState({
        labels: [], // Pour les dates
        datasets: [
            {
                label: 'Flux de Trésorerie',
                data: [], // Données de flux de trésorerie
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    });

    useEffect(() => {
        // Simuler la récupération de données en temps réel
        const fetchData = async () => {
            // Remplacez ceci par un appel API réel
            const response = await fetch('/api/cash-flow'); // Votre API pour le flux de trésorerie
            const data = await response.json();
            
            // Mettez à jour les labels et les données avec les données de l'API
            setCashFlowData({
                labels: data.map(entry => entry.date), // Ex. ['Jan', 'Feb', 'Mar']
                datasets: [
                    {
                        ...cashFlowData.datasets[0],
                        data: data.map(entry => entry.cashFlow), // Ex. [1000, -500, 2000]
                    },
                ],
            });
        };

        fetchData();
    }, []);

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl">Flux de Trésorerie</h2>
            <Line data={cashFlowData} />
        </div>
    );
};

export default CashFlowChart;
