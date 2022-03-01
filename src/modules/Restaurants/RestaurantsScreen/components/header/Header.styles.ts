import Styled from 'styled-components/native';

export const Title = Styled.Text`
${({theme}) => theme.typography.styledStyles.h1}
margin-bottom: 5px;
`;

export const Version = Styled.Text`
${({theme}) => theme.typography.styledStyles.p}
`;

export const Container = Styled.View`
  align-items: center;
  margin-bottom: ${({theme}) => theme.metrics.small}px;
  shadow-opacity: 0.6;
  shadow-offset: 0 1px;
  shadow-radius: 0;
  shadow-color: ${({theme}) => theme.colors.baseText};
  elevation: 5;
  background-color: ${({theme}) => theme.colors.white};
  padding-bottom: 5px;
  `;
