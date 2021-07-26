import React, {useState} from 'react';
import {Modal} from 'react-native';

import {CategorySelect} from '../CategorySelect';
import {Input} from '../../components/Form/Input';
import {Button} from '../../components/Form/Button';
import {CategorySelectButton} from '../../components/Form/CategorySelectButton';
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
  const [category, setcategory] = useState({
    key: 'category',
    name: 'categoria',
  });
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpened, setCategoryModalOpened] = useState(false);

  function handleTransactionType(type: 'up' | 'down') {
    setTransactionType(type);
  }

  function handleCloseCategoryModal() {
    setCategoryModalOpened(false);
  }

  function handleOpenCategoryModal() {
    setCategoryModalOpened(true);
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

          <CategorySelectButton
            onPress={handleOpenCategoryModal}
            title={category.name}
          />
        </Fields>

        <Button title="Submit" />
      </Form>

      <Modal visible={categoryModalOpened}>
        <CategorySelect
          category={category}
          setCategory={setcategory}
          closeSelectCategory={handleCloseCategoryModal}
        />
      </Modal>
    </Container>
  );
};
