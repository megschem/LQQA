import React from 'react';
import { render } from '@testing-library/react';
import Privacy from './Privacy';

describe('components/Privacy', () => {
  it('Renders the component', () => {
    const { getByText } = render(<Privacy />);
    expect(getByText('Your privacy matters to us.')).toBeTruthy();
  });
});