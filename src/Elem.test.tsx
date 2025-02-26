import { render, screen } from '@testing-library/react';
import Elem from './Elem';
//import {expect, jest, test} from '@jest/globals';

test('renders learn react link', () => {
  render(<Elem />);
  const linkElement = screen.getByText(/Elem/);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveClass('navbar-brand');
});
