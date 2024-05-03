import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';

function HeaderWithConditionalRendering() {
  const location = useLocation();
  const value = useStateValue();
  useEffect(()=>{

    auth.onAuthStateChanged(authUser=>{
      console.log("the user is >>>>",authUser);
      if(authUser){
        value.dispatch({
          type : 'SET_USER',
          user : authUser
        });
      }else{
       value.dispatch({
          type : 'SET_USER',
          user : null
        });
      }


    })


  },[value]);

  
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
