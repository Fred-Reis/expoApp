import React from 'react';
import {CategorySelectButton} from '../src/components/Form/CategorySelectButton';

import {render} from './testUtils';

test('Render correct category title', () => {
  const {getByText} = render(
    <CategorySelectButton title="category 111" onPress={jest.fn()} />,
  );
  expect(getByText('category 111')).toBeTruthy();
});
