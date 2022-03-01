import {useEffect, useState} from 'react';
import {getRestaurants, Restaurant} from '../services/restaurantsService';
import {NativeModules} from 'react-native';

export const useRestaurantsScreenData = () => {
  const {AppVersionModule} = NativeModules;
  const [restaurants, setRestaurants] = useState<Restaurant[] | undefined>([]);
  const [appVersion, setAppVersion] = useState('0.0.1');
  useEffect(() => {
    const getData = async () => {
      const restaurantsResponse = await getRestaurants();
      setRestaurants(restaurantsResponse);
    };
    const getAppVersion = async () => {
      setAppVersion(await AppVersionModule.getAppVersion());
    };
    getAppVersion();
    getData();
  }, [AppVersionModule]);

  return {restaurants, appVersion};
};
