import { createTheme, ThemeProvider } from '@material-ui/core';
import React from "react";
import ReactDOM from "react-dom";
import APP from "./App";

const theme = createTheme();

ReactDOM.render(
    <React.Fragment>
        <ThemeProvider theme={theme}>
            <APP />
        </ThemeProvider>
    </React.Fragment>,
    document.getElementById('root')
)