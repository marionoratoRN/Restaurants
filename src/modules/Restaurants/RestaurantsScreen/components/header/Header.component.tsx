import React from 'react';
import {Container, Title, Version} from './Header.styles';

interface HeaderComponentProps {
  version?: string;
}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({
  version = '5.0.0',
}) => {
  return (
    <Container>
      <Title>Nando's restaurants</Title>
      <Version>Version {version}</Version>
    </Container>
  );
};
