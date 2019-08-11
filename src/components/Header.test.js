import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('components/Header', () => {
  it('Renders the component', () => {
    const { getByText } = render(<Header something="Pudge" />);
    expect(getByText('Message: Pudge')).toBeTruthy();
  });
});