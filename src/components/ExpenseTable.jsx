// src/components/ExpenseTable.jsx
import React from 'react';

const ExpenseTable = ({ expenses }) => {
    return (
        <table className="min-w-full border border-gray-300">
            <thead>
                <tr>
                    <th className="border border-gray-300 p-2">Description</th>
                    <th className="border border-gray-300 p-2">Amount</th>
                    <th className="border border-gray-300 p-2">Category</th>
                    <th className="border border-gray-300 p-2">Date</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map(expense => (
                    <tr key={expense.id}>
                        <td className="border border-gray-300 p-2">{expense.description}</td>
                        <td className="border border-gray-300 p-2">${expense.amount}</td>
                        <td className="border border-gray-300 p-2">{expense.category}</td>
                        <td className="border border-gray-300 p-2">{new Date(expense.date).toLocaleDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseTable;
