import React from 'react';
import { render } from '@testing-library/react';
import Terms from './Terms';

describe('componenets/Terms', () => {
  it('Renders the component', () => {
    const { getByText } = render(<Terms />);
    expect(getByText('Always read the fine print.')).toBeTruthy();
  });
});