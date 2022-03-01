import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {HeaderComponent} from './Header.component';
import {ThemeProvider} from 'styled-components/native';
import {defaultTheme} from '../../../../../themes/default';

storiesOf('Restaurant Screen', module).add('Header', () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HeaderComponent />
    </ThemeProvider>
  );
});
