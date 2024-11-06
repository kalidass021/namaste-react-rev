import { useEffect, useState } from 'react';

import resList from '../utils/mockData';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';
import '../../index.css';
import { Link } from 'react-router-dom';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState();
  const [searchText, setSearchText] = useState('');

  // let listOfRestaurants = [...resList];
  // console.log('listOfRestaurants before', listOfRestaurants);

  console.log('Body rendered');
  useEffect(() => {
    console.log('list of restaurants updated');
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      );
      const json = await data.json();
      // console.log('json', json);
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfRestaurants(restaurants);
      // initially
      setFilteredRestaurants(restaurants);
    } catch (err) {
      console.error(`Error while fetching the data ${err}`);
      throw err;
    }
  };


  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>Looks like you're offline!! Please check your internet connection...</h1>
  }

  // render the loading
  // conditinal rendering
  // listOfRestaurants.length === 0
  // if (!listOfRestaurants.length) {
  //   return <Shimmer />;
  // }

  /*

<button
  onClick={() => {
    console.log(searchText);
    const filteredRestaurants = listOfRestaurants.filter(
      (restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestaurants(filteredRestaurants);
  }}
>
  Search
</button>


  */

  return !listOfRestaurants.length ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='search'>
        <input
          type='text'
          className='search-box'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            // filter the restaurant cards and update the ui
            // search text
            console.log(searchText);

            const filteredBySearch = listOfRestaurants.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );

            console.log('filteredRestaurants', filteredRestaurants);
            setFilteredRestaurants(filteredBySearch);
          }}
        >
          Search
        </button>
      </div>
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
        <button className='filter-btn'>Top Rated</button>
      </div>
      <div className='res-container'>
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
