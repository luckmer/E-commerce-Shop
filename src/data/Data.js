import React, { createContext, useState } from "react";
import { fetchData } from "./Api";

export const DataContext = createContext();
function Data({ children }) {
    const [DataControl, setDataControl] = useState({
        fetchData,
        table: [],
    });

    return (
        <DataContext.Provider value={{ DataControl, setDataControl }}>
            {children}
        </DataContext.Provider>
    );
}

export default Data;
