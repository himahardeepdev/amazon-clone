import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './subtotal.css';
const Subtotal = () => {
  return (
    <div className='subtotal'>  
       <CurrencyFormat
        renderText={(value)=>(
            <div>
            <p>
                Subtotal (0 items ) : <strong>0</strong>
            </p>
            <small className="subtotal_gift">
                <input type='checkbox' className='checkout'  name="" id="" />
               <h4> This order contains a gift </h4>
            </small>
            
            </div>
  )}
  decimalScale={2}
  value={0}
  displayType={"text"}
  thousandSeparator={true}
  prefix={"$"}
       
       />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
