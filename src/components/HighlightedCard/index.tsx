import React from 'react';
import { View } from 'react-native';

import { 
  Container,
  TopHalf,
  Title,
  Icon,
  BottomHalf,
  Amount,
  LastTransaction
} from './styles';

export const HighlightedCard = () => {
  return (
    <Container>
      <TopHalf>
        <Title>Entradas</Title>
        <Icon name="arrow-up-circle"/>
      </TopHalf>
      <BottomHalf>
        <Amount>U$$ 12,000.00 </Amount>
        <LastTransaction>Last income in July 13th</LastTransaction>
      </BottomHalf>
    </Container>
  );
}

