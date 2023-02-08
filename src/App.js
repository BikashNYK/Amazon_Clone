import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvide';

function App() {
  const location = useLocation();
  const [{},dispatch] = useStateValue();
  useEffect(()=>{
    // will run only once when the app component run
    auth.onAuthStateChanged((authUser)=>{
      console.log('The user is >>>>',authUser);
      if(authUser){
        // when the user is logged in / or was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        // when user is logged out
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
  },[])

  return (
    <div className="app">
      {location.pathname !== '/loginPage' && (
        <Header />
      )}
      <Routes>
        <Route path='/loginPage' element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default function RouterWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
