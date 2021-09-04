import { render, screen } from '@testing-library/react';
import App from './App';
import DogFacts from "./DogFacts";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders dog facts from an api call', async() => {
  const callDogApi = require('./CallDogApi');
  jest.spyOn(callDogApi,'callDogFactsApi').mockReturnValue(Promise.resolve('dogs are cute'));
  await render(<App />);
  const linkElement = screen.getByText(/Dog Facts: \w/g);
  expect(linkElement).toBeInTheDocument();
});


