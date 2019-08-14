import React from 'react';
import { render } from '@testing-library/react';
import Menu from './Menu';

describe('componenets/Menu', () => {
  it('Renders the component', () => {
    const { getByText } = render(<Menu />);
    expect(getByText('Home')).toBeTruthy();
  });
});