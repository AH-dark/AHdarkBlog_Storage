import React from "react";
import ReactDOM from "react-dom";
import APP from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
    <Provider store={store}>
        <APP />
    </Provider>,
    document.getElementById("root")
);
