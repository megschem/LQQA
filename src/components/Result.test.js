import React from 'react';
import { render } from '@testing-library/react';
import Result from './Result';

describe('components/Result', () => {
  it('Renders the component', () => {
    const { getByText } = render(<Result />);
    expect(getByText('Question: Lorem Ipsum?')).toBeTruthy(); 
  });
});