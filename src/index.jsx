import React from "react";
import ReactDOM from "react-dom";
import APP from "./App";
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

const theme = createTheme();

ReactDOM.render(
    <React.Fragment>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <APP />
        </ThemeProvider>
    </React.Fragment>,
    document.getElementById('root')
)