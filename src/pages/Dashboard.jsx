import React, { useContext } from 'react';
import { FinancialContext } from '../components/context/FinancialContext';
import MetricsCard from '../components/MetricsCard';
import ExpenseChart from '../components/charts/ExpenseChart';
import CashFlowChart from '../components/charts/CashFlowChart';
import ProfitChart from '../components/charts/ProfitChart';

const Dashboard = () => {
    const { metrics, expenseData, cashFlowData, profitData } = useContext(FinancialContext);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Tableau de Bord Financier</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <MetricsCard title="Total Dépenses" value={`$${metrics.totalExpenses}`} icon={<i className="fas fa-dollar-sign"></i>} />
                <MetricsCard title="Flux de Trésorerie" value={`$${metrics.cashFlow}`} icon={<i className="fas fa-money-bill-wave"></i>} />
                <MetricsCard title="Bénéfices Totals" value={`$${metrics.totalProfits}`} icon={<i className="fas fa-chart-line"></i>} />
            </div>
            
            <h2 className="text-xl font-semibold mb-2">Dépenses</h2>
            <ExpenseChart data={expenseData} />
            
            <h2 className="text-xl font-semibold mb-2">Flux de Trésorerie</h2>
            <CashFlowChart data={cashFlowData} />
            
            <h2 className="text-xl font-semibold mb-2">Bénéfices</h2>
            <ProfitChart data={profitData} />
        </div>
    );
};

export default Dashboard;
