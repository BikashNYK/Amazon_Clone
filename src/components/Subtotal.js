import React from 'react';
import { NumberFormatBase } from 'react-number-format';
import { getBasketTotal } from './Reducer';
import { useStateValue } from './StateProvide';
import './Subtotal.css';
function Subtotal() {
    const [{basket} , dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            <NumberFormatBase 
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items):
                            <strong>₹ {value}</strong>
                    </p>
                    <small className='subtotal_gift'>
                        <input type="checkbox" /> This order
                        contains a gift
                    </small>
                </>
            )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;