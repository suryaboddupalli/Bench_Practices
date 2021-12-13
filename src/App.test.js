import { render, screen } from '@testing-library/react';
import App from './App';

test('renders component', () => {
  render(<App />);
  const linkElement = screen.render(<Home/>);
  expect(linkElement).toBeInTheDocument();
});
