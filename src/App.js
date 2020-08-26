import React from "react";
import Data from "./data/Data";
import { Switch, Route, useLocation } from "react-router-dom";
import Nav from "./components/nav";
import { routes } from "./routes";

function App() {
    const location = useLocation();
    return (
        <>
            <Data>
                <Nav />
                <Switch location={location} key={location.pathname}>
                    {routes.map(({ path, Component }) => (
                        <Route
                            key={path}
                            exact
                            path={path}
                            component={Component}
                        />
                    ))}
                </Switch>
            </Data>
        </>
    );
}

export default App;
