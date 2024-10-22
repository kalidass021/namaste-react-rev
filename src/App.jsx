import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import '../index.css';

/* 
* Header
    - logo
    - nav items
* Body
    - search
    - Restaurant container
        - Restaurant card
            - Image
            - Name of the Res, Star Rating, cuisin,.. etc
* Footer
    - Copyright
    - Links
    - Address
    - Contact
*/

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
