import React from 'react';
import {TransactionCard, TransactionCardProps} from '..';

import {render} from '../../../utils/testUtils';

test('Render correct data', () => {
  const data: TransactionCardProps = {
    title: 'test 111',
    amount: 'U$$ 12,000.00',
    category: {name: 'category 111', icon: 'coffee'},
    date: 'date 111',
    type: 'income',
  };

  const {getByText} = render(<TransactionCard data={data} />);
  expect(getByText('test 111')).toBeTruthy();
  expect(getByText('U$$ 12,000.00')).toBeTruthy();
  expect(getByText('category 111')).toBeTruthy();
  expect(getByText('date 111')).toBeTruthy();
});
