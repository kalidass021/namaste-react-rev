import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constants';
import useOnlineStatus from '../utils/useOnlineStatus';
import '../../index.css';

const Header = () => {
  const [btnName, setBtnName] = useState('login');
  const onlineStatus = useOnlineStatus();
  return (
    <div className='flex justify-between bg-pink-100 shadow-lg mb-2'>
      <div>
        <img className='w-32' src={LOGO_URL} />
      </div>
      <div className='flex items-center'>
        <ul className='flex p-4 m-4'>
          <li className='px-2'>Online Status: {onlineStatus ? '✅':'🔴'}</li>
          <li className='px-2'><Link to='/'>Home</Link></li>
          <li className='px-2'><Link to='/about'>About</Link></li>
          <li className='px-2'><Link to='/contact'>Contact</Link></li>
          <li className='px-2'><Link to='/grocery'>Grocery</Link></li>
          <li className='px-2'>Cart</li>
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
