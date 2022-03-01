import {FontMetric, Sizes} from '../types';

import {PixelRatio} from 'react-native';

export const sizeFactor = (desiredPixelSize: number): number => {
  return Math.round(PixelRatio.roundToNearestPixel(desiredPixelSize));
};

export const gridSize = 8;

export const metrics: Sizes = {
  xSmall: sizeFactor(gridSize / 2),
  small: sizeFactor(gridSize),
  regular: sizeFactor(gridSize * 1.5),
  medium: sizeFactor(gridSize * 2),
  large: sizeFactor(gridSize * 3),
  xLarge: sizeFactor(gridSize * 5),
  xxLarge: sizeFactor(gridSize * 7),
  xxxLarge: sizeFactor(gridSize * 12),
  xxxxLarge: sizeFactor(gridSize * 15),
};

export const fontMetrics: FontMetric = {
  H1: 26,
  H2: 24,
  H3: 20,
  H4: 16,
  subHeader: 16,
  avatar: 24,
  buttonCTA: 20,
  p: 16,
  tertiaryText: 14,
  subTitle1: 12,
  subtitle: 12,
  label: 10,
};
