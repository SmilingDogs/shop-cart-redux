import React, { useEffect } from "react";
import styles from "./Products.module.css";
import Product from "../Product/Product";
// Redux
import { connect } from "react-redux";
import { loadData } from "../../redux/Shopping/shopping-actions";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "./Loader.css"

const Products = ({ products, loadData, isLoading }) => {
  useEffect(() => {
    if (!products || !products.length) {
      loadData();
    }
  }, [products, loadData]);

  const productList = products.map((product) => (
    <Product key={product.id} product={product} />
  ));

  if (isLoading) {
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
        className='loader'
      />
    );
  }

  return <div className={styles.products}>{productList}</div>;
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
    isLoading: state.shop.isLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(loadData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
