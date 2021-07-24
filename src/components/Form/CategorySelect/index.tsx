import React from 'react';

import {Container, Category, Icon} from './styles';

interface CategoryProps {
  title: string;
}

export const CategorySelect = ({title}: CategoryProps) => {
  return (
    <Container>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
};
