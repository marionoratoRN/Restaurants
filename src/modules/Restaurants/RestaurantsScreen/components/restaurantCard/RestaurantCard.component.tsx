import React from 'react';
import {Alert, Linking, Pressable} from 'react-native';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';
import {useTheme} from 'styled-components/native';
import {
  inAppBrowserOptions,
  RestaurantParagraph,
  RestaurantCardContainer,
  RestaurantName,
} from './RestaurantCard.styles';

interface RestaurantCardComponentProps {
  name?: string;
  address?: string;
  city?: string;
  postCode?: string;
  url?: string;
  isLast: boolean;
}

export const RestaurantCardComponent: React.FC<
  RestaurantCardComponentProps
> = ({name, address, postCode, city, url, isLast}) => {
  const theme = useTheme();

  const openLink = async (_url?: string) => {
    try {
      if (_url && (await InAppBrowser?.isAvailable())) {
        await InAppBrowser?.open(_url, inAppBrowserOptions(theme.colors.nando));
      } else {
        if (_url && (await Linking.canOpenURL(_url))) {
          await Linking.openURL(_url);
        }
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <RestaurantCardContainer isLast={isLast}>
      <Pressable onPress={() => openLink(url)}>
        <RestaurantName>{name}</RestaurantName>
      </Pressable>
      <RestaurantParagraph>{address}</RestaurantParagraph>
      <RestaurantParagraph>{city}</RestaurantParagraph>
      <RestaurantParagraph>{postCode}</RestaurantParagraph>
    </RestaurantCardContainer>
  );
};
