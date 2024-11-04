import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [score, setScore] = useState(0)
    return (
        <UserContext.Provider value={{ score, setScore }}>
            {children}
        </UserContext.Provider>
    )
}