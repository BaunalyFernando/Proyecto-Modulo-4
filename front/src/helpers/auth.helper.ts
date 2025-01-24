import { ILoginProps, IProducts, IRegisterProps } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const register = async (userData: IRegisterProps) => {
    try {   
        const response = await fetch(`${API_URL}/users/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
          });

          return response.json();
    } catch (error: any) {
        console.error("Error in register user", error);
        throw new Error(`Error in register user`);
    }
};

export const login = async (loginData: ILoginProps) => {
    try {
        const response = await fetch(`${API_URL}/users/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginData),
        });
        const user = await response.json();
        return user;
    } catch (error: any) {
        console.error("Error in login user", error);
        throw new Error(`Error in login user`);
    }
};
