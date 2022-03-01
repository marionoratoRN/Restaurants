import axios from 'axios';

const instance = axios.create({
  baseURL:
    'https://storage.googleapis.com/nandos-engineering-public/coding-challenge-rn',
  timeout: 10000,
});

interface Geo {
  address: {
    addressLocality: string;
    postalCode: string;
    streetAddress: string;
  };
}

export interface Restaurant {
  geo: Geo;
  name: string;
  url: string;
}

interface RestaurantResponse {
  data: {
    restaurant: {
      items: Restaurant[];
    };
  };
}

export const getRestaurants: () => Promise<
  Restaurant[] | undefined
> = async () => {
  try {
    const response = await instance.get<RestaurantResponse>(
      '/restaurantlist.json',
    );
    return response?.data?.data?.restaurant?.items;
  } catch (e) {
    console.log('error', e);
  }
};
