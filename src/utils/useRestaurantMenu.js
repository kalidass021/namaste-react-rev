import { useEffect, useState } from 'react';
import { MENU_API } from './constants';

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
  // fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(`${MENU_API}${resId}`);
      const json = await data.json();
      console.log('json', json);
      setResInfo(json);
    } catch (err) {
      console.error(`Error while fetching the data ${err.message}`);
      throw err;
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
