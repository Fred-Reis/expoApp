import React from 'react';
import {RectButtonProps} from 'react-native-gesture-handler';

import {Container, ButtonText} from './styles';

export interface ButtonProps extends RectButtonProps {
  title: string;
  onPress: () => void;
}

export const Button = ({title, onPress, ...rest}: ButtonProps) => {
  return (
    <Container onPress={onPress} {...rest}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
};
