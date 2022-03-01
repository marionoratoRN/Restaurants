import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {RestaurantCardComponent} from './RestaurantCard.component';
import {ThemeProvider} from 'styled-components/native';
import {defaultTheme} from '../../../../../themes/default';
import {View} from 'react-native';

storiesOf('Restaurant Screen', module).add('Restaurant Card', () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <View style={{padding: 10}}>
        <RestaurantCardComponent
          isLast={false}
          name={'Test name'}
          address={'Test Address'}
          city={'Test city'}
          postCode={'Test Post Code'}
          url={'https://google.co.uk'}
        />
      </View>
    </ThemeProvider>
  );
});
