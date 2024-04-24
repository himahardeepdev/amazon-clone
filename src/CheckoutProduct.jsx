import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
const CheckoutProduct = ({id , title , image ,price , rating  }) => {

    const [{basket} , dispacth ] = useStateValue();
    const removeFromBasket= ()=>{
        dispacth({
            type : "REMOVE_FROM_BASKET",
            id : id 
        })
    }
  
  return (
    <div className='checkoutProduct' >
        <img className='checkoutProduct_image'
         src={image} alt="product_image" />
      
        <div className="checkoutProduct_info">
            <p className='checkoutProduct_title'>{title}</p>
            <p className="checkoutProduct_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="chekoutProduct_rating">
                {Array(rating).fill().map((_,i)=>{
                   return <p key={i+1} >⭐</p>
                })}
            </div>
            <button onClick={removeFromBasket} >Remove from basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct
