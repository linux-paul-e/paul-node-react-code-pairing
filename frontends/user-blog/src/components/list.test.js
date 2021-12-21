import './../../test/helper';
import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import List from './list';

describe('List Component', () => {
  let renderResult;
  const mockItems = [
    {id: '1', title: 'title', description: 'description'}
  ];
  beforeEach(() => {
    renderResult = render(
      <List items={mockItems}></List>
    );
  });

  describe('List Item', () => {
    it('display the title and description', () => {
      renderResult.getByText(/title/);
      renderResult.getByText(/description/);
    });
  });
});