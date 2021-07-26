import React from 'react';
import {HighlightedCard} from '..';

import {render} from '../../../../__tests__/testUtils';

test('Render correct data', () => {
  const {getByText} = render(
    <HighlightedCard
      type="up"
      title="title 111"
      amount="222"
      lastTransaction="333"
    />,
  );
  expect(getByText('title 111')).toBeTruthy();
  expect(getByText('222')).toBeTruthy();
  expect(getByText('333')).toBeTruthy();
});
