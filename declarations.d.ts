import {CustomTheme} from './src/themes/types';

declare module 'styled-components' {
  interface DefaultTheme extends CustomTheme {}
}
