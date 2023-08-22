import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {Provider} from 'react-redux';
import store from "./redux/store";
import {ThemeProvider} from '@mui/material/styles';
import theme from "./theme";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
);
