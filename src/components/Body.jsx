import { useState } from 'react';

import resList from '../utils/mockData';
import RestaurantCard from './RestaurantCard';
import '../../index.css';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  // let listOfRestaurants = [...resList];
  console.log('listOfRestaurants before', listOfRestaurants);
  return (
    <div className='body'>
      <div
        className='filter'
        onClick={() => {
          // filter logic here
          const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4
          );
          setListOfRestaurants(filteredList);
          console.log('resList after filter', filteredList);
        }}
      >
        <button className='filter-btn'>Top Rated</button>
      </div>
      <div className='res-container'>
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
