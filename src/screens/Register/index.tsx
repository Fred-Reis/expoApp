import React, {useState} from 'react';
import {Button} from '../../components/Form/Button';
import {CategorySelect} from '../../components/Form/CategorySelect';
import {Input} from '../../components/Form/Input';
import {TransactionTypeButton} from '../../components/Form/TransactionTypeButton';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsButtonContainer,
} from './styles';

export const Register = () => {
  const [transactionType, setTransactionType] = useState('');

  function handleTransactionType(type: 'up' | 'down') {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Name" />
          <Input placeholder="Value" />

          <TransactionsButtonContainer>
            <TransactionTypeButton
              onPress={() => handleTransactionType('up')}
              isActive={transactionType === 'up'}
              type="up"
              title="Income"
            />
            <TransactionTypeButton
              onPress={() => handleTransactionType('down')}
              isActive={transactionType === 'down'}
              type="down"
              title="Outcome"
            />
          </TransactionsButtonContainer>

          <CategorySelect title="Category" />
        </Fields>

        <Button title="Submit" />
      </Form>
    </Container>
  );
};
