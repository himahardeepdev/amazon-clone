import React from 'react'
import Subtotal from './Subtotal'
import './Checkout.css';

const Checkout = () => {
  return (
    <div className='checkout'>
      <div className="chechout_left">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/11cd504bbc3a1493.jpg?q=20" 
        className='cehckout_ad' alt="cehckout_ad" />

        <div>
            <h2 className="checkout_title">
                Your Shopping Basket 
            </h2>
            {/* Basket item  */}
        </div>
      </div>
      <div className="checkout_rigth">
        <Subtotal/>
        
      </div>
    </div>
  )
}

export default Checkout
