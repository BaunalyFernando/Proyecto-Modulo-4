import { IProducts } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getProductsDBById = async (id: string) => {
    try {
        const response = await fetch(`${API_URL}/products`, {
            next: { revalidate: 1200 },
        });
        const products: IProducts[] = await response.json();
        const productFiltered = products.find((product) => product.id.toString() === id);
        if (!productFiltered) {
            throw new Error(`Product with id ${id} not found`);
        }
        return productFiltered;
    } catch (error: any) {
        console.error("Error in getProductsDBById:", error);
        throw new Error(`Failed to fetch product by id: ${error.message || error}`);
    }
};

export const getProductsDBByCategoryId = async (categoryId: string) => {
    try {
        const response = await fetch(`${API_URL}/products`, {
            next: { revalidate: 1200 },
        });
        const products: IProducts[] = await response.json();
       
        let productFiltered: IProducts[] = products.filter((product) => product.categoryId.toString() === categoryId);
        if (!productFiltered) {
            throw new Error(`Product with id ${categoryId} not found`);
        }
        return productFiltered;
    } catch (error: any) {
        console.error("Error in getProductsDBById:", error);
        throw new Error(`Failed to fetch product by id: ${error.message || error}`);
    }
};


export const getProductsDB = async () => {
    try {
        const response = await fetch(`${API_URL}/products`, {
            next: { revalidate: 1200 },
            method: "GET",
        });
        const products: IProducts[] = await response.json();
        return products;
    } catch (error: any) {
        console.error("Error in getProductsDB:", error);
        throw new Error(`Failed to fetch products: ${error.message || error}`);
    }
};
