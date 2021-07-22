import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View`
  border-radius: 5px;
  padding: 19px 23px ${RFValue(42)}px;
  margin-right: 16px;

  background-color: ${({theme}) => theme.colors.shape};
  width: ${RFValue(300)}px;
`;

export const TopHalf = styled.View`
  flex-direction: row;
  justify-content: space-between;

`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_highlight};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(40)}px;
`;

export const BottomHalf = styled.View``;

export const Amount = styled.Text`
  margin-top: 38px;
  font-size: ${RFValue(32)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_highlight};
`;

export const LastTransaction = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
`;
