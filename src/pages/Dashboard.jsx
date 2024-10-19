// src/pages/Dashboard.js
import React from 'react';


import CashFlowChart from '../components/charts/CashFlowChart'
import ProfitsChart from '../components/charts/ProfitsChart';


const Dashboard = () => {
    return (
        <div className="flex flex-col h-screen">
            
            <main className="flex-grow p-4">
                <h1 className="text-2xl font-bold">Financial Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CashFlowChart />
                    
                    <ProfitsChart />
                   
                </div>
            </main>
           
        </div>
    );
};

export default Dashboard;
