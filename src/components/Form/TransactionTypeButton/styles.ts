import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import {RectButton} from 'react-native-gesture-handler';

import {RFValue} from 'react-native-responsive-fontsize';

interface IconProps {
  type: 'up' | 'down';
}

interface ContainerProps {
  isActive: boolean;
  type: 'up' | 'down';
}

export const Container = styled(RectButton)<ContainerProps>`
  flex-direction: row;
  width: 48%;
  align-items: center;

  border-width: 1.5px;
  padding: 16px 35px;
  justify-content: center;

  border-style: solid;
  border-radius: 5px;
  border-color: ${({isActive, type, theme}) =>
    isActive && type === 'down'
      ? theme.colors.attention
      : isActive && type === 'up'
      ? theme.colors.success
      : theme.colors.text};

  background-color: ${({isActive, type, theme}) =>
    isActive && type === 'down'
      ? theme.colors.attention_light
      : isActive && type === 'up'
      ? theme.colors.success_light
      : theme.colors.shape};
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
  color: ${({theme, type}) =>
    type === 'down' ? theme.colors.attention : theme.colors.success};
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
