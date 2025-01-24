import React from "react";
import { IProducts } from "@/types";
import ProductDetailsView from "@/views/ProductDetailsView";
import { getProductsDBById } from "@/helpers/products.helper";

export const ProductDetails: React.FC<{params: { productId: string}}> = async ({ params }) => {
  
  const {productId} = await params;
  const product = await getProductsDBById(productId);
  return (
    <ProductDetailsView {...product} />
  )
}

export default ProductDetails;
