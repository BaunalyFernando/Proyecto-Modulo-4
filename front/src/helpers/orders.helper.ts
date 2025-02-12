import { IOrder, IProducts } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getOrders = async (token: string) => {
    try {
        const response = await fetch(`${API_URL}/users/orders`, {
            method: "GET",
            headers: { 
                "Content-Type": "application/json", 
                Authorization: token
            },
        });
        return response.json();
       
    } catch (error: any) {
        console.error("Error in getting orders", error);
        throw new Error(`Error in getting orders`);
    }
};