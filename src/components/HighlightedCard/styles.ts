import styled, {css} from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import {RFValue} from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeProps>`
  border-radius: 5px;
  padding: 19px 23px ${RFValue(42)}px;
  margin-right: 16px;

  background-color: ${({theme, type}) =>
    type === 'total' ? theme.colors.secondary : theme.colors.shape};
  width: ${RFValue(300)}px;
`;

export const TopHalf = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_highlight};
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;

  ${({type}) =>
    type === 'up' &&
    css`
      color: ${({theme}) => theme.colors.success};
    `};

  ${({type}) =>
    type === 'down' &&
    css`
      color: ${({theme}) => theme.colors.attention};
    `};

  ${({type}) =>
    type === 'total' &&
    css`
      color: ${({theme}) => theme.colors.shape};
    `};
`;

export const BottomHalf = styled.View``;

export const Amount = styled.Text<TypeProps>`
  margin-top: 38px;
  font-size: ${RFValue(32)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_highlight};
`;

export const LastTransaction = styled.Text<TypeProps>`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_highlight};
`;
