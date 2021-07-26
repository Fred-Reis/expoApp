import React from 'react';
import {Control, Controller} from 'react-hook-form';
import {TextInputProps} from 'react-native';

import {Input} from '../Input';

import {Container, Error} from './styles';

interface InputProps extends TextInputProps {
  control: Control;
  name: string;
  error: string;
}

export const InputByHook = ({control, name, error, ...rest}: InputProps) => {
  return (
    <Container>
      {error && <Error>{error}</Error>}
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
        name={name}
      />
    </Container>
  );
};
