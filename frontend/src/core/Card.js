import React, {useState, useEffect} from "react";
import { Redirect } from "react-router";
import { addItemToCart, removeFromLoacalStorage } from "./helper/cartHelper";
import ImageHelper from "./helper/ImageHelper";

const Card = ({ product, addToCart = true, removeFromCart = false }) => {

  const [redirect, setRedirect] = useState(false)

  const cardTitle = product ? product.name : "Photo From Internet";
  const cardCatagory = product?.category?.name ? product.category.name : "no clear catagory" 
  const cardDescription = product ? product.description : "No Details Found";
  const cardPrice = product ? product.price : "DEFAULT";

  const addToTheCart = () => {
    addItemToCart(product, ()=> setRedirect(true))
  }

  const getRedirect = (redirect) => {
    if(redirect){
      return <Redirect to="/cart" />
    }
  }

  const showAddToCart = () => {
    return (
      addToCart && (
        <button
          onClick={addToTheCart}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };
  const showRemoveFromCart = () => {
    return (
      removeFromCart && (
        <button
          onClick={removeFromLoacalStorage}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };

  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">{cardTitle}</div>
      <div className="card-body">
      <div className="lead text-muted">{cardCatagory}</div>
        {getRedirect(redirect)}
        <ImageHelper product={product} />
        <p className="lead bg-success font-weight-normal text-wrap">
          {cardDescription}
        </p>
        <p className="btn btn-success rounded  btn-sm px-4">$ {cardPrice}</p>
        <div className="row">
          <div className="col-12">{showAddToCart(addToCart)}</div>
          <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
