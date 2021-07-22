import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight} from 'react-native-iphone-x-helper'

export const Container = styled.View`
  flex:1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: flex-start;

  height: ${RFPercentage(42)}px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const UserContainer = styled.View`
  width: 100%;
  
  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.shape};
`;

export const UserName = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.shape};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.secondary};
`;

export const HighlightedCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 }
})`
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
  width: 100%;
`;