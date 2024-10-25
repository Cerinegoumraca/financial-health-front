// src/components/CashFlowGauge.jsx
/*
import React from 'react';
import  GaugeChart from 'react-gauge-chart';

const CashFlowGauge = ({ cashFlow }) => {
    // Convertir le cash flow en pourcentage pour la jauge
    // Adapte le seuil (par exemple 1000) selon tes besoins
    const cashFlowRatio = cashFlow > 0 ? cashFlow / 1000 : 0; // Change 1000 à une valeur appropriée

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl">Jauge de Cash Flow</h2>
            <GaugeChart 
                id="gauge-chart"
                nrOfLevels={30}
                percent={cashFlowRatio}
                arcsLength={[0.5, 0.5]} // Ajuste la longueur des arcs si nécessaire
                colors={["#FF0000", "#00FF00"]}
                arcPadding={0.02}
                style={{ width: "100%", height: "200px" }}
            />
            <p className="mt-2">Cash Flow: {cashFlow > 0 ? '+' : ''}{cashFlow}</p>
        </div>
    );
};

export default CashFlowGauge;
*/