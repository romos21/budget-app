import AvenirNext from './assets/fonts/Roboto-Black.ttf';

import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#000",
            light: "#2F3B66",
            dark: "#222A41",
        },
    },
    typography: {
        fontFamily: "AvenirNext, sans-serif",
        h1: {
            fontSize: "24px",
            color: "#182033",
        },
        h3: {
            fontSize: "18px",
            color: "#182033",
        },
        h4: {
            fontSize: "16px",
            color: "#99A4C2",
        },
        h5: {
            fontSize: "14px",
            color: "#99A4C2",
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
              font-family: 'AvenirNext';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('AvenirNext'), local('AvenirNext'), url(${AvenirNext}) format('ttf');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }`,
        },
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    background: "none",
                    color: "#000",
                    position: "static",
                }
            }
        },
        MuiTabPanel: {
            styleOverrides: {
                root: {
                    padding: 0,
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontSize: "20px",
                    fontWeight: 600,
                    padding: ".5em 0",
                    minWidth: "auto",
                    margin: "0 13px",
                    textTransform: "none",
                },
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    margin: "8px 0",
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                }
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    padding: 0,
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    padding: 0
                }
            }
        },
    },
});

export default theme;
