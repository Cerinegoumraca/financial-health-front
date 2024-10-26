



import {React, useState ,useContext } from 'react';

import { FinancialContext } from '../components/context/FinancialContext';
import MetricsCard from '@/components/MetricsCard';

import ProfitChart from '../components/charts/income/ProfitChart';
import ExpenseChart from '../components/Charts/ExpenseChart';
import CashFlowChart from '../components/Charts/cashflow/CashFlowChart';
import { Button } from '../components/ui/button'; // Importation du bouton


const Dashboard = () => {
    const { metrics } = useContext(FinancialContext);
   // const { metrics } = useContext(FinancialContext);
    // Exemple de pourcentage d'objectif, à remplacer par les données réelles
    const goalPercentage = 0.75; // Remplace avec la logique réelle pour obtenir ce pourcentage
    const cashFlow = 500; // Remplace avec la logique réelle pour obtenir le cash flow
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleAddTransactionClick = () => {
        setIsFormOpen(!isFormOpen);
    };

    const handleDownloadClick = () => {
        // Logique de téléchargement des transactions
        console.log("Téléchargement des transactions");
    };
    if (!metrics) {
        return <div>Loading metrics...</div>;
      }
    return (
        <div className="p-4">

        <h1 className="text-2xl font-bold mb-4">Financial Dashboard</h1>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <MetricsCard 
                    title="Total Expenses" 
                    value={`$${metrics.totalExpenses}`} 
                    icon={<i className="fas fa-dollar-sign"></i>} 
                />
                <MetricsCard 
                    title="Cash Flow" 
                    value={`$${metrics.cashFlow}`} 
                    icon={<i className="fas fa-money-bill-wave"></i>} 
                />
                <MetricsCard 
                    title="Total profits" 
                    value={`$${metrics.totalProfits}`} 
                    icon={<i className="fas fa-chart-line"></i>} 
                />
            </div>
            
            <ProfitChart />
                <ExpenseChart />
                <CashFlowChart />


            {/* Boutons d'action */}
            <div className="flex justify-start space-x-4 mb-6">
                <Button variant="default" size="lg" onClick={handleAddTransactionClick}>
                    ADD TRANSACTIONS
                </Button>
                <Button variant="outline" size="lg" onClick={handleDownloadClick}>
                    DOWNLOAD TRANSACTIONS
                </Button>
            </div> 


        </div>
    );
};

export default Dashboard;
