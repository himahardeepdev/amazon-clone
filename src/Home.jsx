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
            <Product  title="The lean startup" price={29.09} image="https://imgs.search.brave.com/5oqWZ578CVFNDjJKn3PlRrbeOHHKPNeiQSMHAVIuMYE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtZXUuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxdnZnWnFDc2tM/Ll9BQ19VTDExNl9T/UjExNiwxMTZfLmpw/Zw" rating={5} />
            <Product  title="The lean startup" price={29.09} image="https://imgs.search.brave.com/5oqWZ578CVFNDjJKn3PlRrbeOHHKPNeiQSMHAVIuMYE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtZXUuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxdnZnWnFDc2tM/Ll9BQ19VTDExNl9T/UjExNiwxMTZfLmpw/Zw" rating={5} />
      </div>  

      <div className="home_row">
      {/* <Product/>
      <Product/>
      <Product/> */}
      <Product  title="The lean startup" price={29.09} image="https://imgs.search.brave.com/5oqWZ578CVFNDjJKn3PlRrbeOHHKPNeiQSMHAVIuMYE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtZXUuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxdnZnWnFDc2tM/Ll9BQ19VTDExNl9T/UjExNiwxMTZfLmpw/Zw" rating={5} />
      <Product  title="The lean startup" price={29.09} image="https://imgs.search.brave.com/5oqWZ578CVFNDjJKn3PlRrbeOHHKPNeiQSMHAVIuMYE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtZXUuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxdnZnWnFDc2tM/Ll9BQ19VTDExNl9T/UjExNiwxMTZfLmpw/Zw" rating={5} />
            <Product  title="The lean startup" price={29.09} image="https://imgs.search.brave.com/5oqWZ578CVFNDjJKn3PlRrbeOHHKPNeiQSMHAVIuMYE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtZXUuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxdnZnWnFDc2tM/Ll9BQ19VTDExNl9T/UjExNiwxMTZfLmpw/Zw" rating={5} />

        
      </div>

      <div className="home_row">
      <Product  title="The lean startup" price={29.09} image="https://imgs.search.brave.com/5oqWZ578CVFNDjJKn3PlRrbeOHHKPNeiQSMHAVIuMYE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtZXUuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxdnZnWnFDc2tM/Ll9BQ19VTDExNl9T/UjExNiwxMTZfLmpw/Zw" rating={5} />
       
      </div>
      </div>
    </div>
  )
}

export default Home
