import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './component/home/Home';
import AddExpense from './component/expense/AddExpense';
import Category from './component/catgory/Category';

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/expense/:id" exact component={AddExpense} />
        <Route path="/expense" exact component={AddExpense} />
        <Route path="/category" exact component={Category} />
      </Router>
    </>
  );
}

export default App;
