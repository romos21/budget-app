import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App/App';

test('check button Add Channel', () => {
    render(<App />); // Render the component
    const h1BuildYourBudgetPlan = screen.getByText("Build your budget plan")
    expect(h1BuildYourBudgetPlan).toBeInTheDocument();
});


