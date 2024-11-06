import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const {resId} = useParams();
  console.log('resId', resId);

  const resInfo = useRestaurantMenu(resId);

  // if resInfo === null
  if (!resInfo) {
    return <Shimmer />;
  }

  const { id, name, cuisines } = resInfo?.data?.cards[2]?.card?.card?.info;
  //   console.log({id, name, cuisines});
  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  console.log('itemCards', itemCards);
  return (
    <div className='menu'>
      <h1>{name}</h1>
      <h2>{cuisines.join(', ')}</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price/100}</li>
        ))}
        {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
