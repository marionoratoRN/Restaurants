import {isIos} from '../utils/platformUtils';
import {TextStyle} from 'react-native';
import {FontWeight, Size} from './types';
import {metrics} from './default/metrics';
import {css} from 'styled-components/native';

export const fontSize = 18;

export enum FontSizes {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  PARAGRAPH = 'p',
}

export type TypeStyle = Pick<
  TextStyle,
  'fontWeight' | 'fontFamily' | 'fontStyle' | 'fontSize'
>;

export const relativeSize = (size: Size | number) => {
  if (typeof size === 'string') {
    return fontSize * metrics[size];
  } else {
    return fontSize * size;
  }
};

export const fontBuilder =
  (iosBaseName: string, androidBaseName: string) =>
  (
    weightName: string,
    fontWeight: FontWeight,
    isItalic?: boolean,
  ): TypeStyle => {
    if (isIos) {
      return {
        fontFamily: iosBaseName,
        fontWeight,
        fontStyle: isItalic ? 'italic' : 'normal',
      };
    }
    return {
      fontFamily: `${androidBaseName}-${weightName}`,
    };
  };

export const styledTypeAsStylesheet = (typeStyle?: TypeStyle) => {
  if (isIos) {
    return {
      fontFamily: typeStyle?.fontFamily,
      fontWeight: typeStyle?.fontWeight,
      fontStyle: typeStyle?.fontStyle,
    };
  }
  return {
    fontFamily: typeStyle?.fontFamily,
  };
};

export const styledType = (typeStyle?: TypeStyle) => {
  if (isIos) {
    return css`
      font-family: ${typeStyle?.fontFamily};
      font-weight: ${typeStyle?.fontWeight};
      font-style: ${typeStyle?.fontStyle};
    `;
  }
  return css`
    font-family: ${typeStyle?.fontFamily};
  `;
};
