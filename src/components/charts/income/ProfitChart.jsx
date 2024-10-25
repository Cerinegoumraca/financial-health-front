import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import axios from "axios";

ChartJS.register(...registerables);

const ProfitChart = () => {
    const [profitsData, setProfitsData] = useState({
        labels: [], 
        datasets: [
            {
                label: 'Profits',
                data: [], 
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 1,
            },
        ],
    });

    useEffect(() => {
        axios.get("/api/revenus")
            .then((response) => {
                const data = response.data; 
                const labels = data.map(item => item.category);
                const profits = data.map(item => item.profit); 

                setProfitsData({
                    labels: labels,
                    datasets: [{
                        label: 'Profits',
                        data: profits,
                        backgroundColor: 'rgba(54, 162, 235, 0.6)',
                        borderColor: 'rgba(0, 0, 0, 1)',
                        borderWidth: 1,
                    }]
                });
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="bg-white rounded-lg shadow p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Profits</h2>
            <Bar data={profitsData} />
        </div>
    );
};

export default ProfitChart;
