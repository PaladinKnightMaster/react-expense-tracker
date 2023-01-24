import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar';
import MainContainer from './components/MainContainer';
import Expenses from './components/Expenses';


function App({ onDelete }) {
  const [expenses, setExpenses] = useState({ 'items': [] });

  // Load expenses on load and refresh
  if (JSON.parse(localStorage.getItem('items')) != null) {
    expenses['items'] = JSON.parse(localStorage.getItem('items'));
  }


  // Add Expense Function

  const addExpense = (ex) => {
    const expenseTracker = expenses['items'];
    expenseTracker.push(ex);
    localStorage.setItem('items', JSON.stringify(expenseTracker));
    setExpenses({ items: expenseTracker });
  }

  // Delete Expense Function

  const deleteExpense = (id) => {
    const expenseTracker = expenses['items'];
    const index = expenseTracker.findIndex(a => a.id === id);
    expenseTracker.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(expenseTracker))
    setExpenses({ items: expenseTracker });
  }


  return (
    <>
      <Navbar />
      <MainContainer onAddExpense={addExpense} />
      <Expenses expenses={expenses['items']} onDelete={deleteExpense} />
    </>
  );
}

export default App;
