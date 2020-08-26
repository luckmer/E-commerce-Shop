import React, { createContext, useState } from "react";
import { fetchData } from "./Api";

export const DataContext = createContext();
function Data({ children }) {
    const [state] = useState({ fetchData });
    return (
        <DataContext.Provider value={state}>{children}</DataContext.Provider>
    );
}

export default Data;
