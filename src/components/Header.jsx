import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constants';
import '../../index.css';

const Header = () => {
  const [btnName, setBtnName] = useState('login');
  return (
    <div className='header'>
      <div>
        <img className='logo' src={LOGO_URL} />
      </div>
      <div className='nav-items'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li>Cart</li>
          <button
            className='login'
            onClick={() => {
              btnName === 'login' ? setBtnName('logout') : setBtnName('login');
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
