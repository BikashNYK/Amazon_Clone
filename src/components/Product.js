import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvide';
function Product({title,image,price,rating,id}) {
  const [{basket},dispatch] =useStateValue();
  const addToBasket=()=>{
    // dispatch the item into the data layer
    console.log(basket)
    dispatch({
      type : 'ADD_TO_BASKET',
      item : {
        id : id,
        title : title,
        image : image,
        price : price,
        rating : rating,
      }
    })

  }
  return (
    <div className='product'>
      <div className="product__Info" key={id}>
        <p className='product__title'>{title}</p>
        <p className="product__price">
          <small>Rs</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
          .fill()
          .map((_, i) => (
          <p key={i}>⭐</p>
          ))}
        </div>
      </div>
        <img src={image} alt="" />
      <button onClick={addToBasket} className="addToBasket">Add to Basket</button>
    </div>
  );
}

export default Product;