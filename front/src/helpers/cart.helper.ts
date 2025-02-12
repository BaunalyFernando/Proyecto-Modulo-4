import { IOrder, IProducts } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const addOrder = async (userId:string, products: number[], token: string) => {
    try {
        const response = await fetch(`${API_URL}/orders`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json", 
                Authorization: token
            },
            body: JSON.stringify({
                userId,
                products
            }),
        });
        const user = await response.json();
        return user;
    } catch (error: any) {
        console.error("Error in creating order", error);
        throw new Error(`Error in creating order`);
    }
};