import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./styles/GlogalStyle";

import Store from "./utils/Store";
import { Provider } from "react-redux";

ReactDOM.render(
    <Router>
        <Provider store ={Store}>
            <GlobalStyle />
            <App />
        </Provider>
    </Router>,
    document.getElementById("root")
);

serviceWorker.unregister();
