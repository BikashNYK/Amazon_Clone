import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvide';

const CheckoutProduct = ({id , image , title , price , rating}) => {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket =()=>{
        // remove the item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,

        })
    }
  return (
    <div className='checkoutProduct'>
        <img src={image} alt="" className='checkOutProduct_image' />
        <div className='checkoutProdcut__info'>
              <p className='checkoutProdcut__title'>{title}</p>
              <p className='checkoutProdcut__price'>
                  <small>₹</small>
                  <strong>{price}</strong>
              </p>
              <div className='checkoutProdcut__rating'>
                {Array(rating)
                .fill()
                .map((_,i)=>(
                    <p>⭐</p>
                ))}
              </div>
              <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct