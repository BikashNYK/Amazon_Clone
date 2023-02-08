import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvide';
import Subtotal from './Subtotal';
const Checkout = () => {
  const [{basket,user},dispatch] = useStateValue()
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__ad' src="https://www.custompcreview.com/wp-content/uploads/2016/07/amazon-prime-day-banner.jpg" alt="" />
        <div>
          <h5>{user ?`Hello, ${user.email}`: ''}</h5>
          <h2 className='checkout__title'>
            Your shopping basket
          </h2>
          {basket.map((e)=>{
            return <CheckoutProduct 
            id={e.id}
            title={e.title}
            image={e.image}
            price={e.price}
            rating={e.rating}
            />
          })}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;