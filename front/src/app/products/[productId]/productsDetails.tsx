import React from "react";

export const ProductDetails: React.FC<{params: {productId: string}}> = async ({ params }) => {
  const {productId} = await params;
  return (
    <>
      <h1>Product Details{productId}</h1>
    </>
  );
};

export default ProductDetails;