import React from 'react';
import { render } from '@testing-library/react';
import SearchResults from './SearchResults';

describe('components/SearchResults', () => {
  it('Renders the component', () => {
    const { getByText } = render(<SearchResults />);
    expect(getByText('Search Results:')).toBeTruthy();
  });
});