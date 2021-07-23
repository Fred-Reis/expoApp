import React from 'react';

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date
} from './styles';

interface Category {
  name: string;
  icon:string
}

export interface TransactionCardProps {
  title: string;
  amount: string;
  category: Category;
  date: string;
  type: 'income' | 'outcome'
}

interface CardProps {
  data: TransactionCardProps
}

export const TransactionCard= ({data}: CardProps) => {
  return (
    <Container>
      <Title>
        {data.title}
      </Title>

      <Amount type={data.type}>
        {data.type === 'outcome' && '- '}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon}/>

          <CategoryName>
            {data.category.name}
          </CategoryName>
        </Category>

        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}

