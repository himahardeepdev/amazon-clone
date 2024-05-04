import React, { useEffect } from 'react'
import Subtotal from './Subtotal'
import './Checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
  const [{basket , user } , dispatch] = useStateValue();
 
  return (
    <div className='checkout'>
      <div className="chechout_left">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/11cd504bbc3a1493.jpg?q=20" 
        className='cehckout_ad' alt="cehckout_ad" />
        <h3>  {user.email}</h3>
        <div>
            <h2 className="checkout_title">
                Your Shopping Basket 
            </h2>
            {
              basket.map((item)=>{
                return <CheckoutProduct id={item.id} image={item.image} rating={item.rating} price={item.price}  title={item.title} />
              })
            }
        </div>
      </div>
      <div className="checkout_rigth">
        <Subtotal/>
        
      </div>
    </div>
  )
}

export default Checkout
