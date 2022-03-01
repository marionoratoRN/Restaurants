import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import {RestaurantCardComponent} from './RestaurantCard.component';
import {ThemeProvider} from 'styled-components/native';
import {defaultTheme} from '../../../../../themes/default';

const mockOpen = jest.fn();
jest.mock('react-native-inappbrowser-reborn', () => ({
  InAppBrowser: {isAvailable: () => true, open: () => mockOpen()},
}));

describe('RestaurantCard', () => {
  it('should render correctly', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <RestaurantCardComponent isLast={false} />
      </ThemeProvider>,
    );
  });

  it('opens the in app browser when a title is tapped', async () => {
    const {findByText} = render(
      <ThemeProvider theme={defaultTheme}>
        <RestaurantCardComponent isLast={false} name={'Test'} url={'test'} />
      </ThemeProvider>,
    );
    const title = await findByText('Test');
    await fireEvent(title, 'onPress');
    expect(mockOpen).toHaveBeenCalled();
  });
});
