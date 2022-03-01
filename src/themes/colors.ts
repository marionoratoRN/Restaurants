export enum DEFAULT_COLOURS {
  WHITE = 'white',
  BASE_TEXT = 'baseText',
  NANDO = 'nando',
}
export type ThemeColor = {
  [key in DEFAULT_COLOURS]?: string;
};
