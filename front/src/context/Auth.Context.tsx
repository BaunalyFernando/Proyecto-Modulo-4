"use client";
import { IUserSession } from "@/types";
import { createContext, useContext, useState, useEffect } from "react";

export interface AuthContextProps {
    userData: IUserSession | null;
    setUserData: (userData: IUserSession) => void;
}

export const AuthContext = createContext<AuthContextProps>({
    userData: null,
    setUserData: () => {},
});

export interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [userData, setUserData] = useState<IUserSession | null>(() => {
        // Inicializa el estado con los datos del localStorage si existen
        const storedData = localStorage.getItem("userSession");
        return storedData ? JSON.parse(storedData) : null;
    });

    useEffect(() => {
        if (userData) {
            localStorage.setItem("userSession", JSON.stringify({ token: userData.token, user: userData.user }));
        }
    }, [userData]);

    return (
        <AuthContext.Provider value={{ userData, setUserData }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
