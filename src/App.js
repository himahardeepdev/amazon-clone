import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';


function App() {
  return (
    <div className='hi'>
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/checkout' element={<Checkout/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
