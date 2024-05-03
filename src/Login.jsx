import React,{useState} from 'react'
import './login.css';
import { Link } from 'react-router-dom';
import { auth } from './firebase';

const Login = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const signIn = e=>{
        e.preventDefault();
        // some API calls 
    }

    const register = e=>{
        e.preventDefault();
        
        auth.createUserWithEmailAndPassword(email , password).then(
            (auth)=>{
                console.log(auth);
            }
        ).catch(error => alert(error.message));
        // some API calls 
    }

  return (
    <div className='login'>
      <Link to="/" >
      <img 
        className='login_logo'
        src='https://assets.aboutamazon.com/dims4/default/c1f10ce/2147483647/strip/true/crop/1200x800+0+0/resize/324x216!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F75%2Fab%2F53dea402445d83406077763cfde7%2Famazon-logo-1200x800.png'
        alt="amazon_logo" />
      </Link>
      <div className='login_container' >
        <h1>Sign-in</h1>
        <form>
            <h5>E-mail</h5>
            <input type='email' onChange={(e)=>{setEmail(e.target.value)}}  value={email} required/>
            
            <h5>Password</h5>
            <input type='password' onChange={(e)=>{ setPassword(e.target.value)}}  value={password} required />
            <button type='submit' onClick={signIn}  className='login_signInButton' >Sign in</button>
        </form>
        <p>
        By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Intere Based Ads Notice.
        </p>
    <button onClick={register}  className='login_registerButton' >Create your Account</button>
      </div>
    </div>
  )
}

export default Login
