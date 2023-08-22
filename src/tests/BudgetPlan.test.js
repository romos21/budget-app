import {render, screen as page, queryByAttribute} from "@testing-library/react";
import React from "react";
import userEvent from '@testing-library/user-event';
import App from "../components/App/App";
import ChannelPopup from "../containers/ChannelPopup/ChannelPopup";

test('opening new budget plan modal', async () => {
    const getById = queryByAttribute.bind(null, 'id');
    const dom = render(<App />);

    const buttonAddChannel = page.getByText('Add Channel');
    console.log(buttonAddChannel);
    await userEvent.click(buttonAddChannel);
    const modal =  render(<ChannelPopup />);
    expect(modal).toBeInTheDocument();
    //expect(h2KeepMountedModalTitle).toBeInTheDocument();
});

test('creating new budget plan', async () => {
    render(<App/>); // Render the component
    const buttonAddChannel = page.getByText("Add Channel")
    await userEvent.click(buttonAddChannel);
    const divEnterNewChannelName = page.getByText("Enter New Channel Name")
    expect(divEnterNewChannelName).toBeInTheDocument();
    const inputMui = page.locator("#mui-20")
    userEvent.type(inputMui,'test channel')
});

