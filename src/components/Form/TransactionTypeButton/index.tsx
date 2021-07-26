import React from 'react';
import {RectButtonProps} from 'react-native-gesture-handler';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

interface ButtonProps extends RectButtonProps {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
}

import {Container, Icon, Title} from './styles';

export const TransactionTypeButton = ({
  type,
  title,
  isActive,
  ...rest
}: ButtonProps) => {
  return (
    <Container type={type} isActive={isActive} {...rest}>
      <Icon type={type} name={icons[type]} />
      <Title>{title}</Title>
    </Container>
  );
};
