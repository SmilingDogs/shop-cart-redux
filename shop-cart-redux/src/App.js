import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SingleItem from "./components/SingleItem/SingleItem";
import { connect } from "react-redux";
import Favorites from "./components/Favorites/Favorites";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import CartModal from "./components/Modals/CartModal";
import FavoritesModal from "./components/Modals/FavoritesModal"

function App({ current }) {
  return (
    <div className="app">
      <CartModal />
      <FavoritesModal />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/favorites" component={Favorites} />
        {!current ?  <Redirect to="/" /> : <Route exact path="/product/:id" component={SingleItem} />}
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
