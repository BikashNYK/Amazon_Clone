import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvide';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
const Header = () => {
  const [{basket,user} , dispatch] = useStateValue();
  const handleAuthentication = ()=>{
    signOut(auth);
  }
  return (
    <div className='header'>
      <Link to="/">
        <img src="./amazon_logo.png" alt="amazon_logo" className='header_logo' />
      </Link>
      <div className="header__search">
        <input type="text" className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className="header__nav">
        <Link to={!user && 'loginPage'}>      
        <div className='heade__option'>
          <span className='heade__optionOne'>{user ? `Hello ${user.email}`: 'Hello Guest'}</span>
          <span onClick={handleAuthentication} className='heade__optionTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>
        <div className='heade__option'>
          <span className='heade__optionOne'>Returns</span>
          <span className='heade__optionTwo'>& Orders</span>
        </div>
        <div className='heade__option'>
          <span className='heade__optionOne'>Your</span>
          <span className='heade__optionTwo'>Prime</span>
        </div>
        <Link to="checkout">       
        <div className="header__optionBasket">
          <ShoppingBasketIcon/>
          <span className='heade__optionTwo header__basketCount'>{basket?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;