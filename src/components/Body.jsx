import { useEffect, useState } from 'react';

import resList from '../utils/mockData';
import RestaurantCard, { withSpeedyLabel } from './RestaurantCard';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';
import '../../index.css';
import { Link } from 'react-router-dom';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState();
  const [searchText, setSearchText] = useState('');

  const RestaurantCardSpeedy = withSpeedyLabel(RestaurantCard);

  // let listOfRestaurants = [...resList];
  // console.log('listOfRestaurants before', listOfRestaurants);

  console.log('listOfRestaurants', listOfRestaurants);
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
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection...
      </h1>
    );
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
    <div className=''>
      <div className='m-4 p-4'>
        <input
          type='text'
          className='border border-solid border-black'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className='px-4 py-2 bg-green-100 m-4 rounded-lg'
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
      <div className=''>
        <button
          className='px-4 py2 bg-gray-100 rounded-lg'
          onClick={() => {
            // filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            // console.log('resList after filter', filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className='flex flex-wrap'>
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
          >
            {/* if deliveryTime is < 30 add speedy label to it */}
            {
              restaurant?.info?.sla?.deliveryTime < 30 ? (
              <RestaurantCardSpeedy resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
