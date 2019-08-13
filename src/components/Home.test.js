import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe('components/Home', () => {
  it('Renders the component', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Submit A Question')).toBeTruthy();
  });
});