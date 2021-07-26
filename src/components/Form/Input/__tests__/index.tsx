import React from 'react';
import {Input} from '..';

import {render} from '../../../../utils/testUtils';

test('Render text input', () => {
  const {getByTestId} = render(<Input />);
  expect(getByTestId('text-input')).toBeTruthy();
});
