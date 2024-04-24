import React from 'react'
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';


const Header = () => {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='header'>
     <Link to="/" > <img src="https://imgs.search.brave.com/CF3gDsXAob3TFMqj_31vmu9UQ138cd9q99dzGUN7mqA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvQW1hem9u/LUxvZ28tRG93bmxv/YWQtUE5HLUltYWdl/LnBuZw" alt="" className='header_logo' /></Link>

      <div className="haeder_search">
        <input type="text" name="" id="" className='header_searchInput' />
        {/* logo */}
        <SearchIcon className='header_searchIcon' />
      </div>
      <div className="header_nav">
        <div className="header_option">
            <span className="header_otpionLineOne">Hello Guest</span>
            <span className="header_optionLineTwo"> Sign in </span>
        </div>
        <div className="header_option">
        <span className="header_otpionLineOne">Returns</span>
            <span className="header_optionLineTwo"> &Orders </span>
        </div>
        <div className="header_option">
        <span className="header_otpionLineOne">Your</span>
            <span className="header_optionLineTwo"> Prime </span>
        </div>
        <div className="header_optionBasket">
          <Link to="checkout" className='link'>  <ShoppingCartIcon  className='' /></Link>
            <span className="header_otpionLineTwo  header_basketCount ">{basket?.length}</span>
        </div>
      </div>
    </div>
  )
}

export default Header
