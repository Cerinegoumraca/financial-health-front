// src/components/MetricsCard.jsx
import React from 'react';
import { Card } from './ui/card'; // Assurez-vous que vous avez ce composant dans votre dossier ui

const MetricsCard = ({ title, value, icon }) => {
  return (
    <Card className="flex flex-col justify-between p-4 border border-gray-200 rounded-lg shadow-md">
      <div className="flex items-center">
        {icon}
        <h3 className="text-lg font-semibold ml-2">{title}</h3>
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </Card>
  );
};

export default MetricsCard;
