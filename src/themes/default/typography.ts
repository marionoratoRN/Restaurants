import {
  FontSizes,
  styledType,
  styledTypeAsStylesheet,
  TypeStyle,
} from '../typography';
import {css} from 'styled-components/native';
import {TextStyle} from 'react-native';
import {colors} from './colors';
import {DEFAULT_COLOURS} from '../colors';
import {fontMetrics} from './metrics';
import {FontWeights, regular} from '../types';

export const typeStyles: {[key in FontWeights]?: TypeStyle} = {
  black: regular('Black', '800'),
  bold: regular('Bold', '700'),
  light: regular('Light', '200'),
  medium: regular('Medium', '500'),
  regular: regular('Regular', '400'),
};

export const styleSheetStyles: {[key in FontSizes]: TextStyle} = {
  [FontSizes.H1]: {
    ...styledTypeAsStylesheet(typeStyles.black),
    fontSize: fontMetrics.H1,
    color: colors[DEFAULT_COLOURS.BASE_TEXT],
  },
  [FontSizes.H2]: {
    ...styledTypeAsStylesheet(typeStyles.bold),
    fontSize: fontMetrics.H2,
    color: colors[DEFAULT_COLOURS.BASE_TEXT],
  },
  [FontSizes.H3]: {
    ...styledTypeAsStylesheet(typeStyles.bold),
    fontSize: fontMetrics.H3,
    color: colors[DEFAULT_COLOURS.BASE_TEXT],
  },
  [FontSizes.H4]: {
    ...styledTypeAsStylesheet(typeStyles.bold),
    fontSize: fontMetrics.H4,
    color: colors[DEFAULT_COLOURS.BASE_TEXT],
  },
  [FontSizes.PARAGRAPH]: {
    ...styledTypeAsStylesheet(typeStyles.regular),
    fontSize: fontMetrics.p,
    color: colors[DEFAULT_COLOURS.BASE_TEXT],
  },
};

export const styledStyles: {[key in FontSizes]: any} = {
  [FontSizes.H1]: css`
    ${styledType(typeStyles.black)}
    font-size: ${fontMetrics.H1}px;
    color: ${colors[DEFAULT_COLOURS.BASE_TEXT]};
  `,
  [FontSizes.H2]: css`
    ${styledType(typeStyles.bold)}
    font-size: ${fontMetrics.H2}px;
    color: ${colors[DEFAULT_COLOURS.BASE_TEXT]};
  `,
  [FontSizes.H3]: css`
    ${styledType(typeStyles.bold)}
    font-size: ${fontMetrics.H3}px;
    color: ${colors[DEFAULT_COLOURS.BASE_TEXT]};
  `,
  [FontSizes.H4]: css`
    ${styledType(typeStyles.bold)}
    font-size: ${fontMetrics.H3}px;
    color: ${colors[DEFAULT_COLOURS.BASE_TEXT]};
  `,
  [FontSizes.PARAGRAPH]: css`
    ${styledType(typeStyles.regular)}
    font-size: ${fontMetrics.p}px;
    color: ${colors[DEFAULT_COLOURS.BASE_TEXT]};
  `,
};
