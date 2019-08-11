import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('components/Footer', () => {
  it('Renders the component', () => {
    const userName='Bob';
    const { getByText } = render(<Footer name={userName}/>);
    expect(getByText(`Greeting: ${userName}`)).toBeTruthy();
  });
});