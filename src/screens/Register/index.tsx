import React, {useState} from 'react';
import {Modal, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import {InputByHook} from '../../components/Form/InputByHook';

import {CategorySelect} from '../CategorySelect';
// import {Input} from '../../components/Form/Input';
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

interface FormData {
  name: string;
  amount: string;
}

const validateSchema = Yup.object().shape({
  name: Yup.string().required('Name is required!'),
  amount: Yup.number()
    .typeError('Insert a valid format')
    .positive('Negative values is not allowed')
    .required('Amount is required!'),
});

export const Register = () => {
  const [category, setcategory] = useState({
    key: 'category',
    name: 'categoria',
  });
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpened, setCategoryModalOpened] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(validateSchema),
  });

  function handleTransactionType(type: 'up' | 'down') {
    setTransactionType(type);
  }

  function handleCloseCategoryModal() {
    setCategoryModalOpened(false);
  }

  function handleOpenCategoryModal() {
    setCategoryModalOpened(true);
  }

  function handleRegister(form: FormData) {
    if (!transactionType) {
      return Alert.alert('Transaction type must be seletected!');
    }

    if (category.key === 'category') {
      return Alert.alert('Category type must be seletected!');
    }

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };
    console.group(data);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputByHook
              control={control}
              name="name"
              placeholder="Name"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputByHook
              control={control}
              name="amount"
              placeholder="Value"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />

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

          <Button title="Submit" onPress={handleSubmit(handleRegister)} />
        </Form>

        <Modal visible={categoryModalOpened}>
          <CategorySelect
            category={category}
            setCategory={setcategory}
            closeSelectCategory={handleCloseCategoryModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
};
