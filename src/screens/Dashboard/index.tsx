import React from 'react';
import {HighlightedCard} from '../../components/HighlightedCard';
import {
  TransactionCard,
  TransactionCardProps,
} from '../../components/TransactionCard';

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
  HighlightedCards,
  Transactions,
  Title,
  TransactionsList,
  LogoutButton,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export const Dashboard = () => {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'income',
      title: 'Desenvolvimento de Site',
      amount: 'U$$ 12,000.00',
      category: {
        name: 'Sales',
        icon: 'dollar-sign',
      },
      date: '2021/07/14',
    },
    {
      id: '2',
      type: 'outcome',
      title: 'Hamburgueria',
      amount: 'U$$ 23.00',
      category: {
        name: 'Food',
        icon: 'coffee',
      },
      date: '2021/07/12',
    },
    {
      id: '3',
      type: 'outcome',
      title: 'Apartment rental',
      amount: 'U$$ 400.00',
      category: {
        name: 'House',
        icon: 'shopping-bag',
      },
      date: '2021/07/10',
    },
  ];

  return (
    <Container>
      <Header>
        <UserContainer>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/52092659?v=4',
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Fred</UserName>
            </User>
          </UserInfo>
          <LogoutButton onPress={() => {}}>
            <Icon name="power" />
          </LogoutButton>
        </UserContainer>
      </Header>

      <HighlightedCards>
        <HighlightedCard
          type="up"
          title="Entradas"
          amount="U$$ 12,000.00"
          lastTransaction="Last income in July 13th"
        />
        <HighlightedCard
          type="down"
          title="Saída"
          amount="U$$ 100.00"
          lastTransaction="Last outcome in July 14th"
        />
        <HighlightedCard
          type="total"
          title="Total"
          amount="U$$ 11,900.00"
          lastTransaction="Last income in July 14th"
        />
      </HighlightedCards>

      <Transactions>
        <Title>Transactions</Title>

        <TransactionsList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
};
