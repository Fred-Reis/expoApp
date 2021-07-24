import React from 'react';
import {FlatList} from 'react-native';
import {Button} from '../../components/Form/Button';
import {categories} from '../../utils/categories';

import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Label,
  Separator,
  Footer,
} from './styles';

interface Category {
  key: string;
  name: string;
}

interface CategoryProps {
  category: string;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}
export const CategorySelect = ({
  category,
  closeSelectCategory,
  setCategory,
}: CategoryProps) => {
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>
      <FlatList
        data={categories}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <Category>
            <Icon name={item.icon} />
            <Label>{item.name}</Label>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button title="Select" />
      </Footer>
    </Container>
  );
};
