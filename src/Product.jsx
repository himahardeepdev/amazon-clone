import React from 'react'
import './Product.css';
import PropTypes from 'prop-types';
const Product = ({title , image ,price , rating  }) => {
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
                    return <p>⭐</p>
                })
            }
            
        </div>
      </div>
      <img src={image}
         alt="product_img"
         
         />
         <button>Add to busket</button>
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
