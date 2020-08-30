import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Data, ScrollUp, Nav } from "./Imports/index";
import { routes } from "./routes";
function App() {
    const location = useLocation();
    return (
        <Data>
            <ScrollUp />
            <Nav />
            <Switch location={location} key={location.pathname}>
                {routes.map(({ path, Component }) => (
                    <Route key={path} exact path={path} component={Component} />
                ))}
            </Switch>
        </Data>
    );
}
export default App;
