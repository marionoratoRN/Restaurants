import styled from 'styled-components/native';

export const inAppBrowserOptions = (color?: string) => ({
  // iOS Properties
  dismissButtonStyle: 'cancel',
  preferredBarTintColor: color,
  preferredControlTintColor: 'white',
  readerMode: false,
  animated: true,
  modalPresentationStyle: 'fullScreen',
  modalTransitionStyle: 'coverVertical',
  modalEnabled: true,
  enableBarCollapsing: false,
  // Android Properties
  showTitle: true,
  toolbarColor: color,
  secondaryToolbarColor: 'black',
  navigationBarColor: 'black',
  navigationBarDividerColor: 'white',
  enableUrlBarHiding: true,
  enableDefaultShare: true,
  forceCloseOnRedirection: false,
  // Specify full animation resource identifier(package:anim/name)
  // or only resource name(in case of animation bundled with app).
  animations: {
    startEnter: 'slide_in_right',
    startExit: 'slide_out_left',
    endEnter: 'slide_in_left',
    endExit: 'slide_out_right',
  },
  headers: {
    'my-custom-header': 'my custom header value',
  },
});

export const RestaurantName = styled.Text`
  ${({theme}) => theme.typography.styledStyles.h3}
  margin-bottom: 10px;
`;

export const RestaurantParagraph = styled.Text`
  ${({theme}) => theme.typography.styledStyles.p}
  margin-bottom: 5px;
`;

interface RestaurantCardContainerProps {
  isLast: boolean;
}

export const RestaurantCardContainer = styled.View<RestaurantCardContainerProps>`
  ${({theme, isLast}) => `
    padding: ${theme.metrics.small}px;
    border-radius: ${theme.metrics.regular}px;
    border-color: ${theme.colors.baseText};
    margin-bottom: ${!isLast ? theme.metrics.small : theme.metrics.xxxxLarge}px;
  `}
  border-width: 1px;
`;
