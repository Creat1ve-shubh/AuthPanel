"use client"

import { createContext, useState, useEffect } from "react";
import { fetchUser } from "../utils/api";

export const AuthContext = createContext(null); // ✅ Make sure this is exported correctly

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            fetchUser(token)
                .then(setUser)
                .catch(() => localStorage.removeItem("token"));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
