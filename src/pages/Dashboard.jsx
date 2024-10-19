// src/pages/Dashboard.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

import CashFlowChart from '../components/charts/CashFlowChart'




const Dashboard = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-grow p-4">
                <h1 className="text-2xl font-bold">Financial Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CashFlowChart />
                   
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Dashboard;
