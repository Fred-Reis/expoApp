import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Container, ButtonText} from './styles';

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export const Button = ({title, ...rest}: ButtonProps) => {
  return (
    <Container {...rest}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
};
