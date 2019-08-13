import React from 'react';
import { render } from '@testing-library/react';
import ResultList from './ResultsList';

describe('components/ResultList', () => {
  it('Renders the component', () => {
    const { getByText } = render(<ResultList />);
    expect(getByText('Search Results:')).toBeTruthy();
  });
});