import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import nock from 'nock';

test('renders calculate button correctly', () => {
  render(<App />);
  const button = screen.getByText('Calculate');
  expect(button).toBeInTheDocument();
});

test('checks if result is returned correctly after submitting form', async () => {
  render(<App />);

  nock('http://localhost:4090')
  .post('/calculator', {
    number1: 15,
    number2: 10,
    operator: '+'
  })
  .reply(200);

    await waitFor(() => {
      expect(
        screen.getByText('25')
      ).toBeInTheDocument();
    });
});