import React from 'react'
import './Product.css';
import PropTypes from 'prop-types';
import { useStateValue } from './StateProvider';

const Product = ({id , title , image ,price , rating  }) => {
  const [{basket} , dispacth ] = useStateValue();
  console.log(basket);
  const addToBasket = ()=>{
    ///dispacth the item into the data layer 
    dispacth({
      type : "ADD_TO_BASKET",
      item : {
        id : id , 
        title : title , 
        image : image , 
        price : price ,
        rating : rating,
      },
    });
  }
  return (
    <div className='product'>
      <div className="prodcut_info">
        <p>{title}</p>

        <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="product_rating">
            {
                Array(rating).fill().map((_,i)=>{
                    return <p key={i+1} >⭐</p>
                })
            }
            
        </div>
      </div>
      <img src={image}
         alt="product_img"
         
         />
         <button onClick={addToBasket} >Add to busket</button>
    </div>
  )
}

Product.prototype = {
title : PropTypes.string.isRequired,
price : PropTypes.number.isRequired,
image : PropTypes.string.isRequired,
rating : PropTypes.number.isRequired
}

export default Product
