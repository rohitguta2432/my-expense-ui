import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './component/home/Home';
import AddExpense from './component/expense/AddExpense';

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/expense" exact component={AddExpense} />
      </Router>
    </>
  );
}

export default App;
