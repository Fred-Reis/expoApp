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
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}
export const CategorySelect = ({
  category,
  closeSelectCategory,
  setCategory,
}: CategoryProps) => {
  function handleCategorySelect(item: Category) {
    setCategory(item);
  }

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>
      <FlatList
        data={categories}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <Category
            isActive={category.key === item.key}
            onPress={() => handleCategorySelect(item)}>
            <Icon isActive={category.key === item.key} name={item.icon} />
            <Label isActive={category.key === item.key}>{item.name}</Label>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button onPress={closeSelectCategory} title="Select" />
      </Footer>
    </Container>
  );
};
