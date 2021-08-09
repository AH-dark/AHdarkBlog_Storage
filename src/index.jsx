import { createTheme, ThemeProvider } from '@material-ui/core';
import React from "react";
import ReactDOM from "react-dom";
import APP from "./App";

export const theme = createTheme({
    palette: {
        common: { black: "#000", white: "#fff" },
        background: { paper: "#fff", default: "#fafafa" },
        primary: {
            light: "#7986cb",
            main: "#3f51b5",
            dark: "#303f9f",
            contrastText: "#fff",
        },
        secondary: {
            light: "#ff4081",
            main: "#f50057",
            dark: "#c51162",
            contrastText: "#fff",
        },
        error: {
            light: "#e57373",
            main: "#f44336",
            dark: "#d32f2f",
            contrastText: "#fff",
        },
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)",
        },
        explorer: {
            filename: "#474849",
            icon: "#8f8f8f",
            bgSelected: "#D5DAF0",
            emptyIcon: "#e8e8e8",
        },
    },
});

ReactDOM.render(
    <React.Fragment>
        <ThemeProvider theme={theme}>
            <APP />
        </ThemeProvider>
    </React.Fragment>,
    document.getElementById('root')
)