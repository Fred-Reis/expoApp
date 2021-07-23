import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import {RFValue} from 'react-native-responsive-fontsize';

interface TransactionProps {
  type: 'income' | 'outcome';
}

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.shape};
  border-radius: 5px;
  padding: 17px 24px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text_highlight};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`;

export const Amount = styled.Text<TransactionProps>`
  margin-top: 2px;
  color: ${({theme, type}) =>
    type === 'income' ? theme.colors.success : theme.colors.attention};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 19px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.text};
`;

export const CategoryName = styled.Text`
  margin-left: 17px;
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text};
`;

export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text};
`;
