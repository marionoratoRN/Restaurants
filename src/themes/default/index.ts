import {CustomTheme} from '../types';
import {colors} from './colors';
import {metrics} from './metrics';
import {styledStyles, styleSheetStyles} from './typography';

export const defaultTheme: CustomTheme = {
  colors,
  metrics,
  typography: {styleSheetStyles, styledStyles},
};

export * from './typography';
