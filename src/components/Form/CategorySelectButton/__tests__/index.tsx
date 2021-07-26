import React from 'react';
import {CategorySelectButton} from '..';

import {render} from '../../../../utils/testUtils';

test('Render correct category title', () => {
  const {getByText} = render(
    <CategorySelectButton title="category 111" onPress={jest.fn()} />,
  );
  expect(getByText('category 111')).toBeTruthy();
});
