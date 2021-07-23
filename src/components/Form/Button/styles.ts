import {TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${({theme}) => theme.colors.secondary};
  align-items: center;
  border-radius: 5px;
  padding: 18px;
`;

export const ButtonText = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
`;
