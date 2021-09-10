import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './component/home/Home';
import AddExpense from './component/expense/AddExpense';
import Category from './component/catgory/Category';
import Login from './component/signin/Login';
import UnAuthorize from './component/unauthorized/UnAuthorize';
function App() {
  const isLoggedIn = localStorage.getItem('isAuthenticated');
  return (
    <>
      <Router>
        <Route path="/" exact component={Login} />
        {/* <Route  path ="/home" exact component={Home} isLoggedIn/> */}
        <Route path="/home" exact render={props => {
          if (isLoggedIn) {
            return <Home />
          } else {
            return <UnAuthorize />
          }
        }} />
        <Route path="/expense/:id" exact render={props => {
          if (isLoggedIn) {
            return <AddExpense />
          } else {
            return <UnAuthorize />
          }
        }} />
        <Route path="/expense" exact render={props => {
          if (isLoggedIn) {
            return <AddExpense />
          } else {
            return <UnAuthorize />
          }
        }} />
        <Route path="/category" exact render={props => {
          if (isLoggedIn) {
            return <Category />
          } else {
            return <UnAuthorize />
          }
        }} />
      </Router>
    </>
  );
}

export default App;
