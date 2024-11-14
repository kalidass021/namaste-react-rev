import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({ resData }) => {
  // console.log('resData', resData);
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  return (
    <div
      className='m-4 p-4 w-[220px] rounded-lg bg-gray-100 hover:bg-gray-200'
    >
      <img
        className='rounded-lg'
        alt='res-image'
        src={`${CDN_URL}${resData.info.cloudinaryImageId}`}
      />
      <h3 className='font-bold py-4 text-xl'>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating}stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
