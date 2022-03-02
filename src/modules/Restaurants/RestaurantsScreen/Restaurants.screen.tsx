import React from 'react';
import {HeaderComponent} from './components/header';
import {FlatList, SafeAreaView} from 'react-native';
import {Restaurant} from '../../../services/restaurantsService';
import {RestaurantCardComponent} from './components/restaurantCard/RestaurantCard.component';
import {styles} from './Restaurants.styles';
import {useRestaurantsScreenData} from '../../../hooks/useRestaurantsScreenData';

export const RestaurantsScreen: React.FC = () => {
  const {restaurants, appVersion} = useRestaurantsScreenData();
  const renderItem: (data: {
    item: Restaurant;
    index: number;
  }) => React.ReactElement = ({item, index}) => {
    return (
      <RestaurantCardComponent
        name={item.name}
        address={item.geo.address.streetAddress}
        city={item.geo.address.addressLocality}
        postCode={item.geo.address.postalCode}
        url={item.url}
        isLast={index === restaurants!.length - 1}
      />
    );
  };

  //TODO: implement Lazy loading
  return (
    <SafeAreaView>
      <HeaderComponent version={appVersion} />
      <FlatList
        keyExtractor={item => item.name}
        data={restaurants}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};
