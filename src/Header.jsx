import React from 'react'
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';


const Header = () => {
  return (
    <div className='header'>
      <img src="https://imgs.search.brave.com/CF3gDsXAob3TFMqj_31vmu9UQ138cd9q99dzGUN7mqA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvQW1hem9u/LUxvZ28tRG93bmxv/YWQtUE5HLUltYWdl/LnBuZw" alt="" className='header_logo' />

      <div className="haeder_search">
        <input type="text" name="" id="" className='header_searchInput' />
        {/* logo */}
        <SearchIcon className='header_searchIcon' />
      </div>
      <div className="header_nav">
        <dv className="header_option">
            <span className="header_otpionLineOne">Hello Guest</span>
            <span className="header_optionLineTwo"> Sign in </span>
        </dv>
        <dv className="header_option">
        <span className="header_otpionLineOne">Returns</span>
            <span className="header_optionLineTwo"> &Orders </span>
        </dv>
        <dv className="header_option">
        <span className="header_otpionLineOne">Your</span>
            <span className="header_optionLineTwo"> Prime </span>
        </dv>
        <dv className="header_optionBasket">
            <ShoppingCartIcon  className='' />
            <span className="header_otpionLineTwo  header_basketCount ">0</span>
        </dv>
      </div>
    </div>
  )
}

export default Header
