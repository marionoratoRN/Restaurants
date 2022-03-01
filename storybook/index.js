// if you use expo remove this line
import React from 'react';

import {getStorybookUI, configure, addDecorator} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';

import './rn-addons';
import {loadStories} from './storyLoader';

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
  loadStories();
}, module);

const StorybookUI = getStorybookUI({
  port: 9001,
  host: 'localhost',
  onDeviceUI: true,
  asyncStorage: null,
});

export function StorybookUIRoot() {
  return <StorybookUI />;
}
