import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';

function HeaderWithConditionalRendering() {
  const location = useLocation();

  
  const shouldShowHeader = () => {
    const { pathname } = location;
    return pathname !== "/login";
  };

  return shouldShowHeader() ? <Header /> : null;
}

function App() {
  return (
    <div className='hi'>
      <BrowserRouter>
        <HeaderWithConditionalRendering />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
