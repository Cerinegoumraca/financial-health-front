// src/components/Charts/RevenueProgressionChart.jsx
/*
import React, { useEffect, useState } from 'react';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import axios from "axios";

ChartJS.register(...registerables);

const RevenueProgressionChart = () => {
    const [progressionData, setProgressionData] = useState({
        labels: [], // Pour les périodes (mois, trimestres, etc.)
        datasets: [
            {
                label: 'Revenus',
                data: [], // Données de revenus
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
            {
                label: 'Objectif',
                data: [], // Données de l'objectif
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: false,
            },
        ],
    });

    useEffect(() => {
        // Appel API pour récupérer les données de progression
        axios.get("/api/progression-revenus")
            .then((response) => {
                const data = response.data; // Adapte cela selon ton format de données
                const labels = data.map(item => item.period); // Modifie cela
                const revenues = data.map(item => item.revenue); // Modifie cela
                const goals = data.map(item => item.goal); // Modifie cela

                setProgressionData({
                    labels: labels,
                    datasets: [
                        {
                            label: 'Revenus',
                            data: revenues,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            fill: true,
                        },
                        {
                            label: 'Objectif',
                            data: goals,
                            borderColor: 'rgba(255, 99, 132, 1)',
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            fill: false,
                        },
                    ],
                });
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl">Progression des Revenus</h2>
            <Line data={progressionData} />
        </div>
    );
};

export default RevenueProgressionChart;
*/