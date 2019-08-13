import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';
import { exportAllDeclaration } from '@babel/types';

describe('components/Search', () => {
  it('Renders the component', () => {
    const { getByText } = render(<Search />);
    expect(getByText('No result? Then submit a question.')).toBeTruthy();
  });
});