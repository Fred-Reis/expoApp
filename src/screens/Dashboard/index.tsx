import React from 'react';
import { TouchableOpacity } from 'react-native';
import { HighlightedCard } from '../../components/HighlightedCard';

import { 
  Container,
  Header,
  UserContainer,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightedCards
} from './styles';

export const Dashboard = () => {
  return (
    <Container>
      <Header>
        <UserContainer>
          <UserInfo>
            <Photo source={{uri: 'https://avatars.githubusercontent.com/u/52092659?v=4'}} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Fred</UserName>
            </User>
          </UserInfo>
          <TouchableOpacity>
            <Icon name="power"/>
          </TouchableOpacity> 
        </UserContainer>
      </Header>
      
      <HighlightedCards>
        <HighlightedCard/>
        <HighlightedCard/>
        <HighlightedCard/>
      </HighlightedCards>
    </Container>
  );
}