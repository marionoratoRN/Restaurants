import React, {useEffect} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {defaultTheme} from './themes/default';
import {RestaurantsScreen} from './modules/Restaurants/RestaurantsScreen';

export const App: React.FC = () => {
  // TODO: uncomment comments to load storybook
  // const [showStorybook, setShowStorybook] = useState(false);
  // const [StorybookUIRoot, setStorybookUIRoot] =
  //   useState<React.ReactElement | null>(null);
  useEffect(() => {
    // const story = require('../storybook').StorybookUIRoot;
    // setStorybookUIRoot(() => story);
  }, []);

  return (
    // <StorybookUIRoot />
    <ThemeProvider theme={defaultTheme}>
      <RestaurantsScreen />
    </ThemeProvider>
  );
};
