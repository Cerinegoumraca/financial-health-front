import React, { useState } from 'react';
import axios from 'axios';

const TransactionPage = () => {
  const [transactionData, setTransactionData] = useState({
    amount: '',
    type: 'Income',
    category: '',
    country: '',
    date: '',
    description: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const categories = ["Rent", "Utilities", "Salary", "Food", "Transportation"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTransactionData({ ...transactionData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post('/api/transactions', transactionData);
      console.log("Réponse du serveur:", response.data);
      setSuccess(true);
      setTransactionData({
        amount: '',
        type: 'Income',
        category: '',
        country: '',
        date: '',
        description: '',
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout de la transaction:", error);
      setError(error.response?.data?.message || "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-lg bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4">Add a new transaction</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Champ Montant */}
        <div>
          <label htmlFor="amount" className="block text-sm font-medium">Montant</label>
          <input
            type="number"
            name="amount"
            placeholder="Entrez le montant"
            value={transactionData.amount}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Type de Transaction */}
        <div>
          <label htmlFor="type" className="block text-sm font-medium">Type of Transaction</label>
          <select
            name="type"
            value={transactionData.type}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        {/* Catégorie */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium">Category</label>
          <select
            name="category"
            value={transactionData.category}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Pays */}
        <div>
          <label htmlFor="country" className="block text-sm font-medium">Countries</label>
          <input
            type="text"
            name="country"
            placeholder="Entrez le pays"
            value={transactionData.country}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={transactionData.date}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            placeholder="Ajoutez une description"
            value={transactionData.description}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Message d'erreur */}
        {error && <p className="text-red-500">{error}</p>}
        {/* Message de succès */}
        {success && <p className="text-green-500">Transaction ajoutée avec succès !</p>}
        
        {/* Bouton d'Ajout */}
        <button type="submit" className="w-full p-2 mt-4 bg-blue-600 text-white rounded-md" disabled={loading}>
          {loading ? "En cours..." : "Ajouter la Transaction"}
        </button>
      </form>
    </div>
  );
};

export default TransactionPage;
