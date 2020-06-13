import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Component/Header';
import Banner from './Component/Banner';
import Main from './Component/Main';
import Breakfast from './Component/Breakfast';
import Lunch from './Component/Lunch';
import Dinner from './Component/Dinner';
import Blog from './Component/Blog';
import Footer from './Component/Footer';
import Copyright from './Component/Copyright';
import CartItem from './Component/CartItem';

function App() {
  return (
    <Router>
      <Header></Header>
      <Banner></Banner>
      <Main></Main>
        <Switch>
          <Route path="/breakfast">
            <Breakfast></Breakfast>
          </Route>
          <Route path="/lunch">
            <Lunch></Lunch>
          </Route>
          <Route path="/">
            <Lunch></Lunch>
          </Route>
          <Route path="/dinner">
            <Dinner></Dinner>
          </Route>
          <Route path="/cartItem">
            <CartItem></CartItem>
          </Route>
        </Switch>
        <Blog></Blog>
        <Footer></Footer>
        <Copyright></Copyright>
    </Router>
  );
}

export default App;
