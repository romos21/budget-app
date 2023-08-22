import {render, screen} from "@testing-library/react";
import React from "react";
import userEvent from '@testing-library/user-event';
import App from "../components/App/App";

test('Tab 1 selected by default', () => {
    render(<App />); // Render the component
    const buttonTab = screen.getByText("Tab 1");
    expect(buttonTab.classList.contains('Mui-selected')).toBe(true);
});

test('switching on Tab 2', async () => {
    render(<App />); // Render the component
    const buttonTab = screen.getByText("Tab 2");
    await userEvent.click(buttonTab);
    expect(buttonTab.classList.contains('Mui-selected')).toBe(true);
});