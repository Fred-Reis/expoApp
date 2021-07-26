import React from 'react';
import {Button} from '..';

import {render} from '../../../../utils/testUtils';

test('Render correct button text', () => {
  const {getByText} = render(<Button title="button 111" />);
  expect(getByText('button 111')).toBeTruthy();
});
