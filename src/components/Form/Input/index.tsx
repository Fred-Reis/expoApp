import React from 'react';
import {TextInputProps} from 'react-native';

type InputProps = TextInputProps;

import {Container} from './styles';

export const Input = ({...rest}: InputProps) => {
  return <Container {...rest} />;
};
