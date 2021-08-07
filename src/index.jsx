import React from "react";
import ReactDOM from "react-dom";
import APP from "./App";
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
    <React.Fragment>
        <CssBaseline />
        <APP />
    </React.Fragment>,
    document.getElementById('root')
)