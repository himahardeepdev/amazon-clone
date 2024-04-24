import React from 'react'
import './Home.css';
import Product from './Product';
const Home = () => {
  return (
    <div className='home'>
      <div className="home_container">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/297fddd609f5c42d.jpg?q=20" 
        alt="home_logo" className="home_image" />
      

      <div className="home_row">
            <Product id="1"  title="The lean startup" price={29.09} image="https://imgs.search.brave.com/5oqWZ578CVFNDjJKn3PlRrbeOHHKPNeiQSMHAVIuMYE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtZXUuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxdnZnWnFDc2tM/Ll9BQ19VTDExNl9T/UjExNiwxMTZfLmpw/Zw" rating={5} />
            <Product id="2" title="Ozone Safe Locker for Home | 9.2 Litres | Ozone Digital Lock | Ozone Locker Safe For Home | Safety Locker For Home | Master & User" price={600.23} image="https://m.media-amazon.com/images/I/518MVQNUmbL._AC_UL480_FMwebp_QL65_.jpg" rating={4} />
      </div>  

      <div className="home_row">
      {/* <Product/>
      <Product/>
      <Product/> */}
      <Product id="3" title="Motorola G84 5G (Midnight Blue, 12GB RAM, 256GB Storage) | 50MP (OIS) | 16MP Front Camera | Snapdragon 695 Processor | Ultra Premium Vegan Leather Design | Unbelievable" 
        price={1400.90} 
        image="https://m.media-amazon.com/images/I/71KlgKqKAGL._SX679_.jpg" 
        rating={4} />
      
      <Product id="4" title="Winston Trimmer for Men - Nut Groomer 1.0-90 Min Runtime | Waterproof Trimmer for Men Private Part Shaving with No-Cut Ceramic Blade | Ultimate Body and Ball Trimmer for Men"
        price={29.09}
        image="https://m.media-amazon.com/images/I/71A9HuxL02L._SX679_.jpg" 
          rating={5} />
      
      <Product id="5" title="Fire-Boltt Ninja Call Pro Plus 1.83 Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution" 
            price={29.09}
            image="https://m.media-amazon.com/images/I/61AHiYyu3ZL._SX679_.jpg" 
            rating={5} />

        
      </div>

      <div className="home_row">
      <Product id="6" title="Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X74L (Black)" 
      price={45000} 
      image="https://m.media-amazon.com/images/I/81MRU+3RJLL._SX569_.jpg" 
      rating={4} />
      </div>
      </div>
    </div>
  )
}

export default Home
