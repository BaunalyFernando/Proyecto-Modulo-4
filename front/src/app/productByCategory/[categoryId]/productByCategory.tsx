
import Card from "@/components/card";
import { getProductsDBByCategoryId } from "@/helpers/products.helper";
import Link from "next/link";
import React from "react";

export const ProductByCategory: React.FC<{params: {categoryId: string}}> = async ({ params }) => {
  const { categoryId } = await params;

  const products = await getProductsDBByCategoryId(categoryId);

  return (
    <div>
      {
        products && products.map((product) => {
          return (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Card key={product.id} {...product} />
            </Link>
          )
        })
      }
    </div>
  );
};

export default ProductByCategory;