// src/pages/ExpenseTracker.jsx
import React, { useState, useEffect } from 'react';
import ExpenseTable from '../components/ExpenseTable';
import ExpenseChart from '../components/charts/ExpenseChart'; 
import ExpenseForm from '../components/ExpenseForm'; // Pour le formulaire d'ajout de dépense

const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState([]);
    const [filteredExpenses, setFilteredExpenses] = useState([]);
    const [filters, setFilters] = useState({ category: '', amount: '', date: '' });

    useEffect(() => {
        // Fonction pour récupérer les dépenses
        const fetchExpenses = async () => {
            const response = await fetch('/api/expenses'); // Remplacez par votre API
            const data = await response.json();
            setExpenses(data);
            setFilteredExpenses(data); // Initialement, toutes les dépenses sont affichées
        };
        
        fetchExpenses();
    }, []);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const applyFilters = () => {
        let filtered = expenses;
        if (filters.category) {
            filtered = filtered.filter(expense => expense.category.includes(filters.category));
        }
        if (filters.amount) {
            filtered = filtered.filter(expense => expense.amount <= filters.amount);
        }
        if (filters.date) {
            filtered = filtered.filter(expense => new Date(expense.date) >= new Date(filters.date));
        }
        setFilteredExpenses(filtered);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">Expense Tracking</h1>
            <ExpenseForm setExpenses={setExpenses} /> {/* Formulaire pour ajouter des dépenses */}
            <div className="flex gap-4">
                <input
                    type="text"
                    name="category"
                    placeholder="Filtrer par catégorie"
                    value={filters.category}
                    onChange={handleFilterChange}
                />
                <input
                    type="number"
                    name="amount"
                    placeholder="Filtrer par montant max"
                    value={filters.amount}
                    onChange={handleFilterChange}
                />
                <input
                    type="date"
                    name="date"
                    value={filters.date}
                    onChange={handleFilterChange}
                />
                <button onClick={applyFilters}>Appliquer les filtres</button>
            </div>
            <ExpenseChart expenses={filteredExpenses} /> {/* Graphique des dépenses */}
            <ExpenseTable expenses={filteredExpenses} /> {/* Tableau des dépenses */}
        </div>
    );
};

export default ExpenseTracker;
