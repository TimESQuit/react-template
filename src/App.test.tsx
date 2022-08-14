import { render, screen } from '@testing-library/react';

import App from './App';

describe('Simple working test', () => {
  it('Should render the App', () => {
    render(<App />);
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });
});
