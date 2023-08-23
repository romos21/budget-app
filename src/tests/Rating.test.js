import {render} from "@testing-library/react";
import React from "react";
import App from "../components/App/App";

test('Default rating value check', () => {
    render(<App />); // Render the component
    const checkedStars = document.getElementsByClassName('MuiRating-icons');
    expect(Array.from(checkedStars).length).toEqual(0);
});

test('Default channels list', async () => {
    render(<App />); // Render the component
    const accordions = document.getElementsByClassName('MuiAccordionSummary-content');
    expect(Array.from(accordions).length).toEqual(3);
});

//span[class^='MuiRating-icon']