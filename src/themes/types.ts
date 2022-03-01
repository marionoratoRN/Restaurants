import {ThemeColor} from './colors';
import {fontBuilder, TypeStyle} from './typography';

export type FontMetric = {
  H1: number;
  H2: number;
  H3: number;
  H4: number;
  subHeader: number;
  avatar: number;
  buttonCTA: number;
  p: number;
  tertiaryText: number;
  subTitle1: number;
  subtitle: number;
  label: number;
};

export type Size =
  | 'xSmall'
  | 'small'
  | 'medium'
  | 'regular'
  | 'large'
  | 'xLarge'
  | 'xxLarge'
  | 'xxxLarge'
  | 'xxxxLarge';

export type Sizes = {[key in Size]: number};

export interface CustomTheme {
  colors: ThemeColor;
  metrics: any;
  typography: any;
}

export type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export interface RegularTypeWeightStyles {
  bold: TypeStyle; // 700
  regular: TypeStyle; // 400
  light: TypeStyle; // 300
}

export interface TypeStyles {
  regular: RegularTypeWeightStyles;
}

export enum FontWeights {
  BLACK = 'black',
  BOLD = 'bold',
  MEDIUM = 'medium',
  REGULAR = 'regular',
  LIGHT = 'light',
  SYSTEM_REGULAR = 'systemRegular',
  SYSTEM_BOLD = 'systemBold',
}

export const regular = fontBuilder('System', 'System');
export const system = fontBuilder('System', 'System');
