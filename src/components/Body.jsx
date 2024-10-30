import { useEffect, useState } from 'react';

import resList from '../utils/mockData';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import '../../index.css';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');
  // let listOfRestaurants = [...resList];
  // console.log('listOfRestaurants before', listOfRestaurants);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      );
      const json = await data.json();
      // console.log('json', json);
      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.error(`Error while fetching the data ${err}`);
      throw err;
    }
  };

  // render the loading
  // conditinal rendering
  // listOfRestaurants.length === 0
  // if (!listOfRestaurants.length) {
  //   return <Shimmer />;
  // }

  return !listOfRestaurants.length ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div
        className='filter'
        onClick={() => {
          // filter logic here
          const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4
          );
          setListOfRestaurants(filteredList);
          // console.log('resList after filter', filteredList);
        }}
      >
        <div className='search'>
          <input
            type='text'
            className='search-box'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />
          <button
            onClick={() => {
              // filter the restaurant cards and update the ui
              // search text
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
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
