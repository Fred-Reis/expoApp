import React from 'react';
import {TransactionTypeButton} from '..';

import {render} from '../../../../../__tests__/testUtils';

test('Render text input', () => {
  const {getByText} = render(
    <TransactionTypeButton title="test 111" type="up" isActive={true} />,
  );
  expect(getByText('test 111')).toBeTruthy();
});
