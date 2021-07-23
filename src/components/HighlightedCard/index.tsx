import React from 'react';

import { 
  Container,
  TopHalf,
  Title,
  Icon,
  BottomHalf,
  Amount,
  LastTransaction
} from './styles';

interface CardProps {
  type: 'up' | 'down' | 'total';
  title: string;
  amount: string;
  lastTransaction: string;
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}

export const HighlightedCard = ({type, title, amount, lastTransaction}: CardProps) => {
  return (
    <Container type={type}>
      <TopHalf>
        <Title type={type}>
          {title}
        </Title>
        <Icon 
          name={icon[type]}
          type={type}/>
      </TopHalf>
      <BottomHalf>
        <Amount type={type}>
          {amount}
        </Amount>
        <LastTransaction type={type}>
          {lastTransaction}
        </LastTransaction>
      </BottomHalf>
    </Container>
  );
}

