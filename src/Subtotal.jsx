import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './subtotal.css';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

const Subtotal = () => {
  const [{basket} , dispactch] = useStateValue();
  
  return (
    <div className='subtotal'>  
       <CurrencyFormat
        renderText={(value)=>(
            <div>
            <p>
                Subtotal ({basket?.length} items ) : <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
                <input type='checkbox' className='checkout'  name="" id="" />
               <h4> This order contains a gift </h4>
            </small>
            
            </div>
  )}
  decimalScale={2}
  value={getBasketTotal(basket)}
  displayType={"text"}
  thousandSeparator={true}
  prefix={"$"}
       
       />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
