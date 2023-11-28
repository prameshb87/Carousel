import { render, screen } from '@testing-library/react';
import App from './App';

test('renders carousel', () => {
  render(<App />);
  const carouselElement = screen.getByTestId('carousel');
  expect(carouselElement).toBeInTheDocument();
});

test('renders arrow icons', () => {
  render(<App />);
  const leftArrowElement = screen.getByTestId('carousel-arrow-left');
  const rightArrowElement = screen.getByTestId('carousel-arrow-right');
  expect(leftArrowElement).toBeInTheDocument();
  expect(rightArrowElement).toBeInTheDocument();
});
