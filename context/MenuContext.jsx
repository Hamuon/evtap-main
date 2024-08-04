"use client"
import React, { useState, createContext } from "react";

export const MenuContext = createContext();
export default function MenuContextProvider({ children }) {
    const [menu, setMenu] = useState(false);

    return (
        <MenuContext.Provider value={{ menu, setMenu }}>
            {children}
        </MenuContext.Provider>
    )
}





