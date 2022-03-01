import React from 'react';
import {HeaderComponent} from './Header.component';
import {render} from 'react-native-testing-library';
import {ThemeProvider} from 'styled-components/native';
import {defaultTheme} from '../../../../../themes/default';

describe('Header', () => {
  const version = '5.0.0';

  it('should render correctly', async () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <HeaderComponent version={version} />
      </ThemeProvider>,
    );
  });

  it('should show the correct version', async () => {
    const {findByText} = render(
      <ThemeProvider theme={defaultTheme}>
        <HeaderComponent version={version} />
      </ThemeProvider>,
    );
    const nando = await findByText('Version 5.0.0');
    expect(nando).not.toBe(null);
  });
});
