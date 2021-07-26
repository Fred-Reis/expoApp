import React from 'react';
import {Input} from '..';

import {render} from '../../../../../__tests__/testUtils';

test('Render text input', () => {
  const {getByTestId} = render(<Input />);
  expect(getByTestId('text-input')).toBeTruthy();
});
