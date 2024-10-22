import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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

const Header = () => {
  return (
    <div className='header'>
      <div>
        <img
          className='logo'
          src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?industry=COMPANY+NAME'
        />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resData }) => {
  console.log('resData', resData);
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  return (
    <div className='res-card' style={{ backgroundColor: '#f0f0f0' }}>
      <img
        className='res-logo'
        alt='res-image'
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating}stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: '609737',
      name: 'Pizza Hut',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/1bd1323a-6c54-48bd-a0f3-f53b4f1ef02a_609737.jpg',
      locality: 'Kailash Nagar',
      areaName: 'Perumbakkam',
      costForTwo: '₹350 for two',
      cuisines: ['Pizzas'],
      avgRating: 3.8,
      parentId: '721',
      avgRatingString: '3.8',
      totalRatingsString: '2.7K+',
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.1,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '2.1 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-10-22 00:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png',
            description: 'Delivery!',
          },
          {
            imageId: 'Rxawards/_CATEGORY-Pizza.png',
            description: 'Delivery!',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png',
                },
              },
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Rxawards/_CATEGORY-Pizza.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {
      context: 'seo-data-e34ed387-e607-49fa-a768-fa88eb3db762',
    },
    cta: {
      link: 'https://www.swiggy.com/city/chennai/pizza-hut-kailash-nagar-perumbakkam-rest609737',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '104680',
      name: "Domino's Pizza",
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/7/8/e3083f7c-d59f-49af-99bd-8e42a53c8480_104680.jpg',
      locality: 'KAILASH OMR SHOLINAGANALLUR CHENNAI',
      areaName: 'Sholinganallur',
      costForTwo: '₹400 for two',
      cuisines: ['Pizzas', 'Italian', 'Pastas', 'Desserts'],
      avgRating: 4.2,
      parentId: '2456',
      avgRatingString: '4.2',
      totalRatingsString: '7.2K+',
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.2,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '1.2 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-10-22 01:59:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png',
            description: 'Delivery!',
          },
          {
            imageId: 'Rxawards/_CATEGORY-Pizza.png',
            description: 'Delivery!',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png',
                },
              },
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Rxawards/_CATEGORY-Pizza.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹1199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {
      context: 'seo-data-e34ed387-e607-49fa-a768-fa88eb3db762',
    },
    cta: {
      link: 'https://www.swiggy.com/city/chennai/dominos-pizza-kailash-omr-sholinaganallur-sholinganallur-rest104680',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '748065',
      name: 'Burger King',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_748065.JPG',
      locality: 'OMR Semmanchey',
      areaName: 'Kancheepuram',
      costForTwo: '₹350 for two',
      cuisines: ['Burgers', 'American'],
      avgRating: 4.1,
      parentId: '166',
      avgRatingString: '4.1',
      totalRatingsString: '1.1K+',
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3.7,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '3.7 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-10-22 03:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png',
            description: 'Delivery!',
          },
          {
            imageId: 'Rxawards/_CATEGORY-Burger.png',
            description: 'Delivery!',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png',
                },
              },
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Rxawards/_CATEGORY-Burger.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {
      context: 'seo-data-e34ed387-e607-49fa-a768-fa88eb3db762',
    },
    cta: {
      link: 'https://www.swiggy.com/city/chennai/burger-king-omr-semmanchey-kancheepuram-rest748065',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '612571',
      name: 'KFC',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/6267ecd0-c240-4ef8-8050-527a15356426_612571.JPG',
      locality: 'Kailash Nagar',
      areaName: 'Perumbakkam',
      costForTwo: '₹400 for two',
      cuisines: ['Burgers', 'Fast Food', 'Rolls & Wraps'],
      avgRating: 4,
      parentId: '547',
      avgRatingString: '4.0',
      totalRatingsString: '3.7K+',
      sla: {
        deliveryTime: 19,
        lastMileTravel: 2.1,
        serviceability: 'SERVICEABLE',
        slaString: '15-20 mins',
        lastMileTravelString: '2.1 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-10-22 01:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Rxawards/_CATEGORY-Burger.png',
            description: 'Delivery!',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Rxawards/_CATEGORY-Burger.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: 'ITEMS',
        subHeader: 'AT ₹89',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {
      context: 'seo-data-e34ed387-e607-49fa-a768-fa88eb3db762',
    },
    cta: {
      link: 'https://www.swiggy.com/city/chennai/kfc-kailash-nagar-perumbakkam-rest612571',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '698364',
      name: "McDonald's",
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/118d064e-20b1-4385-bd1d-efa291e1fe49_698364.jpg',
      locality: 'Perumbakkam',
      areaName: 'Sekaran Mall',
      costForTwo: '₹400 for two',
      cuisines: ['Burgers', 'Beverages', 'Cafe', 'Desserts'],
      avgRating: 4.2,
      parentId: '630',
      avgRatingString: '4.2',
      totalRatingsString: '933',
      sla: {
        deliveryTime: 19,
        lastMileTravel: 2.2,
        serviceability: 'SERVICEABLE',
        slaString: '15-20 mins',
        lastMileTravelString: '2.2 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-10-21 22:45:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png',
            description: 'Delivery!',
          },
          {
            imageId: 'Rxawards/_CATEGORY-Burger.png',
            description: 'Delivery!',
          },
        ],
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png',
                },
              },
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Rxawards/_CATEGORY-Burger.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {
      context: 'seo-data-e34ed387-e607-49fa-a768-fa88eb3db762',
    },
    cta: {
      link: 'https://www.swiggy.com/city/chennai/mcdonalds-perumbakkam-sekaran-mall-rest698364',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '25881',
      name: 'Subway',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/250d7054-1254-4158-b1a5-67141ea2d51f_25881.JPG',
      locality: 'Shollinganalur',
      areaName: 'Sholinganallur',
      costForTwo: '₹350 for two',
      cuisines: ['Salads', 'Snacks', 'Desserts', 'Beverages'],
      avgRating: 4.2,
      parentId: '2',
      avgRatingString: '4.2',
      totalRatingsString: '14K+',
      sla: {
        deliveryTime: 12,
        lastMileTravel: 1,
        serviceability: 'SERVICEABLE',
        slaString: '10-15 mins',
        lastMileTravelString: '1.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-10-21 23:57:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Rxawards/_CATEGORY-Sandwiches.png',
            description: 'Delivery!',
          },
        ],
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Rxawards/_CATEGORY-Sandwiches.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {
      context: 'seo-data-e34ed387-e607-49fa-a768-fa88eb3db762',
    },
    cta: {
      link: 'https://www.swiggy.com/city/chennai/subway-shollinganalur-sholinganallur-rest25881',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '678546',
      name: 'Wow! China',
      cloudinaryImageId: '95982cfa57cb3b7e504f2015c375fd55',
      locality: 'ST. Thomas Mount',
      areaName: 'Sholinganallur Signal',
      costForTwo: '₹300 for two',
      cuisines: [
        'Tibetan',
        'Chinese',
        'Asian',
        'Snacks',
        'Continental',
        'Desserts',
        'Beverages',
      ],
      avgRating: 3.8,
      parentId: '226836',
      avgRatingString: '3.8',
      totalRatingsString: '546',
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.6,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '1.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-10-22 03:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png',
            description: 'Delivery!',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: 'ITEMS',
        subHeader: 'AT ₹129',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {
      context: 'seo-data-e34ed387-e607-49fa-a768-fa88eb3db762',
    },
    cta: {
      link: 'https://www.swiggy.com/city/chennai/wow-china-st-thomas-mount-sholinganallur-signal-rest678546',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '592991',
      name: 'Great Indian Khichdi by EatFit',
      cloudinaryImageId: '6e44fd7f1e5cd9967edfe47c10247671',
      locality: '4th Cross Street',
      areaName: 'Muthamzhil Nagar',
      costForTwo: '₹200 for two',
      cuisines: ['Indian', 'Home Food', 'Healthy Food', 'Snacks'],
      avgRating: 4.2,
      parentId: '319582',
      avgRatingString: '4.2',
      totalRatingsString: '858',
      sla: {
        deliveryTime: 17,
        lastMileTravel: 3.5,
        serviceability: 'SERVICEABLE',
        slaString: '15-20 mins',
        lastMileTravelString: '3.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-10-21 23:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'brand',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'brand',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: 'ITEMS',
        subHeader: 'AT ₹159',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {
      context: 'seo-data-e34ed387-e607-49fa-a768-fa88eb3db762',
    },
    cta: {
      link: 'https://www.swiggy.com/city/chennai/great-indian-khichdi-by-eatfit-4th-cross-street-muthamzhil-nagar-rest592991',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '815877',
      name: 'Olio - The Wood Fired Pizzeria',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/10/19/2b191798-f1d6-4940-950a-d4d95cf06fe3_815877.jpg',
      locality: 'Perumbakkam',
      areaName: 'St.Thomas Mount Block',
      costForTwo: '₹300 for two',
      cuisines: ['Pizzas', 'Pastas', 'Fast Food', 'Snacks', 'Beverages'],
      avgRating: 4.6,
      parentId: '11633',
      avgRatingString: '4.6',
      totalRatingsString: '39',
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '3.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-10-22 05:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'newg.png',
            description: 'Gourmet',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Gourmet',
                  imageId: 'newg.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {
      context: 'seo-data-e34ed387-e607-49fa-a768-fa88eb3db762',
    },
    cta: {
      link: 'https://www.swiggy.com/city/chennai/olio-the-wood-fired-pizzeria-perumbakkam-st-thomas-mount-block-rest815877',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '681855',
      name: 'Louis Burger',
      cloudinaryImageId: 'a3535141ce7f8db939e999c2a7e06a0c',
      locality: 'MCN Nagar Extension',
      areaName: 'Thoraipakkam',
      costForTwo: '₹600 for two',
      cuisines: ['Burgers', 'American', 'Fast Food'],
      avgRating: 4.3,
      parentId: '22485',
      avgRatingString: '4.3',
      totalRatingsString: '1.8K+',
      sla: {
        deliveryTime: 33,
        lastMileTravel: 5.9,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '5.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-10-22 04:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'newg.png',
            description: 'Gourmet',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Gourmet',
                  imageId: 'newg.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹349',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {
      context: 'seo-data-e34ed387-e607-49fa-a768-fa88eb3db762',
    },
    cta: {
      link: 'https://www.swiggy.com/city/chennai/louis-burger-mcn-nagar-extension-thoraipakkam-rest681855',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '678545',
      name: 'Wow! Momo',
      cloudinaryImageId: '64fd45fd9f44c1737bc446e470bed666',
      locality: 'ST. Thomas Mount',
      areaName: 'Sholinganallur Signal',
      costForTwo: '₹300 for two',
      cuisines: [
        'Tibetan',
        'Healthy Food',
        'Asian',
        'Chinese',
        'Snacks',
        'Continental',
        'Desserts',
        'Beverages',
      ],
      avgRating: 4.2,
      parentId: '1776',
      avgRatingString: '4.2',
      totalRatingsString: '1.1K+',
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1.6,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '1.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-10-22 03:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Rxawards/_CATEGORY-Chinese.png',
            description: 'Delivery!',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Rxawards/_CATEGORY-Chinese.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: 'ITEMS',
        subHeader: 'AT ₹89',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {
      context: 'seo-data-e34ed387-e607-49fa-a768-fa88eb3db762',
    },
    cta: {
      link: 'https://www.swiggy.com/city/chennai/wow-momo-st-thomas-mount-sholinganallur-signal-rest678545',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '42949',
      name: 'Behrouz Biryani',
      cloudinaryImageId: 'a4ffed13eb197c6df43dfe1c756560e5',
      locality: 'Ex-Service Man colony,1st Street',
      areaName: 'Medavakkam',
      costForTwo: '₹500 for two',
      cuisines: [
        'Biryani',
        'Kebabs',
        'Mughlai',
        'Lucknowi',
        'Hyderabadi',
        'Desserts',
        'Beverages',
      ],
      avgRating: 4.1,
      parentId: '1803',
      avgRatingString: '4.1',
      totalRatingsString: '8.5K+',
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '3.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-10-21 23:59:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png',
            description: 'Delivery!',
          },
          {
            imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Kebab.png',
            description: 'Delivery!',
          },
          {
            imageId: 'newg.png',
            description: 'Gourmet',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png',
                },
              },
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Kebab.png',
                },
              },
              {
                attributes: {
                  description: 'Gourmet',
                  imageId: 'newg.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {
      context: 'seo-data-e34ed387-e607-49fa-a768-fa88eb3db762',
    },
    cta: {
      link: 'https://www.swiggy.com/city/chennai/behrouz-biryani-ex-service-man-colony-1st-street-medavakkam-rest42949',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '62987',
      name: 'LunchBox - Meals and Thalis',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/5dba8993-14c2-4c98-a7f6-6ebd807eee2a_62987.jpg',
      locality: 'Ex Service Man colony,1st Street',
      areaName: 'Medavakkam',
      costForTwo: '₹200 for two',
      cuisines: [
        'Biryani',
        'North Indian',
        'Punjabi',
        'Healthy Food',
        'Desserts',
        'Beverages',
      ],
      avgRating: 4.3,
      parentId: '4925',
      avgRatingString: '4.3',
      totalRatingsString: '16K+',
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '3.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-10-21 23:59:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png',
            description: 'Delivery!',
          },
          {
            imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Meals.png',
            description: 'Delivery!',
          },
        ],
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png',
                },
              },
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Meals.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: 'ITEMS',
        subHeader: 'AT ₹159',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {
      context: 'seo-data-e34ed387-e607-49fa-a768-fa88eb3db762',
    },
    cta: {
      link: 'https://www.swiggy.com/city/chennai/lunchbox-meals-and-thalis-ex-service-man-colony-1st-street-medavakkam-rest62987',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '324245',
      name: 'The Belgian Waffle Co.',
      cloudinaryImageId: '5116a385bac0548e06c33c08350fbf11',
      locality: 'Yellow Bells Food Stall',
      areaName: 'Perumbakkam',
      costForTwo: '₹200 for two',
      cuisines: ['Waffle', 'Desserts', 'Ice Cream', 'Beverages'],
      avgRating: 4.5,
      veg: true,
      parentId: '2233',
      avgRatingString: '4.5',
      totalRatingsString: '2.3K+',
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.7,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '2.7 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-10-21 23:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Green%20Dot%20Awards/Best%20In%20Waffle.png',
            description: 'Delivery!',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Green%20Dot%20Awards/Best%20In%20Waffle.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'UPTO ₹50',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {
      context: 'seo-data-e34ed387-e607-49fa-a768-fa88eb3db762',
    },
    cta: {
      link: 'https://www.swiggy.com/city/chennai/the-belgian-waffle-co-yellow-bells-food-stall-perumbakkam-rest324245',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '31709',
      name: 'A2B - Adyar Ananda Bhavan',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/9/16/da808920-734a-4e00-a9bc-a7c48af27f74_31709.jpg',
      locality: '200 ft Road',
      areaName: 'Madipakkam',
      costForTwo: '₹300 for two',
      cuisines: ['South Indian', 'Sweets', 'Chinese'],
      avgRating: 4.4,
      veg: true,
      parentId: '22',
      avgRatingString: '4.4',
      totalRatingsString: '58K+',
      sla: {
        deliveryTime: 33,
        lastMileTravel: 8,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '8.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-10-21 23:59:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Green%20Dot%20Awards/Best%20In%20Mithai.png',
            description: 'Delivery!',
          },
          {
            imageId: 'Green%20Dot%20Awards/Best%20In%20Idli%20Vada.png',
            description: 'Delivery!',
          },
          {
            imageId: 'Rxawards/_CATEGORY-South%20Indian.png',
            description: 'Delivery!',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Green%20Dot%20Awards/Best%20In%20Mithai.png',
                },
              },
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Green%20Dot%20Awards/Best%20In%20Idli%20Vada.png',
                },
              },
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Rxawards/_CATEGORY-South%20Indian.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹175 OFF',
        subHeader: 'ABOVE ₹449',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {
      context: 'seo-data-e34ed387-e607-49fa-a768-fa88eb3db762',
    },
    cta: {
      link: 'https://www.swiggy.com/city/chennai/a2b-adyar-ananda-bhavan-200-ft-road-madipakkam-rest31709',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '42955',
      name: 'Faasos - Wraps, Rolls & Shawarma',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/a9379907-8670-4fa0-939f-550da412ca6a_42955.JPG',
      locality: 'Ex-Service Man colony,1st Street',
      areaName: 'Medavakkam',
      costForTwo: '₹200 for two',
      cuisines: [
        'Kebabs',
        'Fast Food',
        'Snacks',
        'American',
        'Healthy Food',
        'Desserts',
        'Beverages',
      ],
      avgRating: 4.2,
      parentId: '21809',
      avgRatingString: '4.2',
      totalRatingsString: '20K+',
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '3.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-10-21 23:59:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {
      context: 'seo-data-e34ed387-e607-49fa-a768-fa88eb3db762',
    },
    cta: {
      link: 'https://www.swiggy.com/city/chennai/faasos-wraps-rolls-and-shawarma-ex-service-man-colony-1st-street-medavakkam-rest42955',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '355768',
      name: 'Grameen Kulfi',
      cloudinaryImageId: 'cen5ate9scfbku6jr7y9',
      locality: 'Anna Street',
      areaName: 'Sholinganallur',
      costForTwo: '₹120 for two',
      cuisines: ['Ice Cream', 'Desserts'],
      avgRating: 4.1,
      veg: true,
      parentId: '12175',
      avgRatingString: '4.1',
      totalRatingsString: '166',
      sla: {
        deliveryTime: 17,
        lastMileTravel: 3.5,
        serviceability: 'SERVICEABLE',
        slaString: '15-20 mins',
        lastMileTravelString: '3.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-10-21 23:20:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {
      context: 'seo-data-e34ed387-e607-49fa-a768-fa88eb3db762',
    },
    cta: {
      link: 'https://www.swiggy.com/city/chennai/grameen-kulfi-anna-street-sholinganallur-rest355768',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '678547',
      name: 'Wow! Chicken By Wow! Momo',
      cloudinaryImageId: 'ee9c2f12dd4fe8e3cb8c0e8a7ecc56be',
      locality: 'Ward-197',
      areaName: 'Sholinganallur',
      costForTwo: '₹300 for two',
      cuisines: ['American', 'Snacks', 'Beverages', 'Continental'],
      avgRating: 3.5,
      parentId: '268366',
      avgRatingString: '3.5',
      totalRatingsString: '440',
      sla: {
        deliveryTime: 33,
        lastMileTravel: 1.6,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '1.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-10-22 03:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: 'ITEMS',
        subHeader: 'AT ₹109',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '3.0',
          ratingCount: '186',
        },
        source: 'GOOGLE',
        sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag',
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {
      context: 'seo-data-e34ed387-e607-49fa-a768-fa88eb3db762',
    },
    cta: {
      link: 'https://www.swiggy.com/city/chennai/wow-chicken-by-wow-momo-ward-197-sholinganallur-rest678547',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '402123',
      name: 'Baskin Robbins - Ice Cream Desserts',
      cloudinaryImageId: '85ccae4e3576f9330af102c46ca85395',
      locality: 'Perungudi Fc',
      areaName: 'Kandanchavadi',
      costForTwo: '₹250 for two',
      cuisines: ['Desserts', 'Ice Cream'],
      avgRating: 4,
      veg: true,
      parentId: '5588',
      avgRatingString: '4.0',
      totalRatingsString: '154',
      sla: {
        deliveryTime: 33,
        lastMileTravel: 9.7,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '9.7 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-10-21 23:59:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Rxawards/_CATEGORY-Ice-creams.png',
            description: 'Delivery!',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Rxawards/_CATEGORY-Ice-creams.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {
      context: 'seo-data-e34ed387-e607-49fa-a768-fa88eb3db762',
    },
    cta: {
      link: 'https://www.swiggy.com/city/chennai/baskin-robbins-ice-cream-desserts-perungudi-fc-kandanchavadi-rest402123',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '651748',
      name: 'Taco Bell',
      cloudinaryImageId: 'd3b3db238b6448c3f297c851e9d0b96b',
      locality: 'RAJIV GANDHI SALAI',
      areaName: 'Karapakkam',
      costForTwo: '₹300 for two',
      cuisines: ['Mexican', 'Fast Food', 'Snacks'],
      avgRating: 4.1,
      parentId: '1557',
      avgRatingString: '4.1',
      totalRatingsString: '1.4K+',
      sla: {
        deliveryTime: 20,
        lastMileTravel: 3,
        serviceability: 'SERVICEABLE',
        slaString: '15-20 mins',
        lastMileTravelString: '3.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-10-22 01:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '4.0',
          ratingCount: '355',
        },
        source: 'GOOGLE',
        sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag',
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {
      context: 'seo-data-e34ed387-e607-49fa-a768-fa88eb3db762',
    },
    cta: {
      link: 'https://www.swiggy.com/city/chennai/taco-bell-rajiv-gandhi-salai-karapakkam-rest651748',
      type: 'WEBLINK',
    },
  },
];

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

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
