import React from 'react';
import { render } from '@testing-library/react';
import Support from './Support';

describe('components/Support', () => {
  it('Renders the component', () => {
    const { getByText } = render(<Support />);
    expect(getByText('Questions, Comments, Requests?')).toBeTruthy();
  });
});