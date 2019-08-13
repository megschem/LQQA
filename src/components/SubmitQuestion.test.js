import React from 'react';
import { render } from '@testing-library/react';
import SubmitQuestion from './SubmitQuestion';
import { exportAllDeclaration } from '@babel/types';

describe('components/SubmitQuestion', () => {
  it('Renders the component', () => {
    const { getByText } = render(<SubmitQuestion />);
    expect(getByText('Submit A Question')).toBeTruthy(); 
  });
});