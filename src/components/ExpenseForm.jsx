// src/components/ExpenseForm.jsx
import React, { useState } from 'react';

const ExpenseForm = ({ setExpenses }) => {
    const [newExpense, setNewExpense] = useState({ description: '', amount: '', category: '', date: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/expenses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newExpense),
        });
        const addedExpense = await response.json();
        setExpenses(prev => [...prev, addedExpense]); // Ajouter la dépense à l'état
        setNewExpense({ description: '', amount: '', category: '', date: '' }); // Réinitialiser le formulaire
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                placeholder="Description"
                value={newExpense.description}
                onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
                required
            />
            <input
                type="number"
                placeholder="Amount"
                value={newExpense.amount}
                onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Category"
                value={newExpense.category}
                onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
                required
            />
            <input
                type="date"
                value={newExpense.date}
                onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
                required
            />
            <button type="submit">Add expense</button>
        </form>
    );
};

export default ExpenseForm;
