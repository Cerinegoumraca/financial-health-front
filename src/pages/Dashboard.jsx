



import {React,  useContext } from 'react';

import { FinancialContext } from '../components/context/FinancialContext';
import MetricsCard from '@/components/MetricsCard';

import ProfitChart from '../components/charts/income/ProfitChart';
import ExpenseChart from '../components/Charts/ExpenseChart';
import CashFlowChart from '../components/Charts/cashflow/CashFlowChart';
import CashFlowGauge from '../components/Charts/cashflow/CashFlowGauge';

const Dashboard = () => {
    const { metrics } = useContext(FinancialContext);
   // const { metrics } = useContext(FinancialContext);
    // Exemple de pourcentage d'objectif, à remplacer par les données réelles
    const goalPercentage = 0.75; // Remplace avec la logique réelle pour obtenir ce pourcentage
    const cashFlow = 500; // Remplace avec la logique réelle pour obtenir le cash flow
    
    if (!metrics) {
        return <div>Loading metrics...</div>;
      }
    return (
        <div className="p-4">

        <h1 className="text-2xl font-bold mb-4">Tableau de Bord Financier</h1>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <MetricsCard 
                    title="Total Dépenses" 
                    value={`$${metrics.totalExpenses}`} 
                    icon={<i className="fas fa-dollar-sign"></i>} 
                />
                <MetricsCard 
                    title="Flux de Trésorerie" 
                    value={`$${metrics.cashFlow}`} 
                    icon={<i className="fas fa-money-bill-wave"></i>} 
                />
                <MetricsCard 
                    title="Bénéfices Totals" 
                    value={`$${metrics.totalProfits}`} 
                    icon={<i className="fas fa-chart-line"></i>} 
                />
            </div>
            
            <ProfitChart />
                <ExpenseChart />
                <CashFlowChart />
                <CashFlowGauge cashFlow={cashFlow} />
        </div>
    );
};

export default Dashboard;
