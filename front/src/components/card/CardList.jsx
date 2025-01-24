import React from 'react';
import Card from '@/components/card';
import { getProductsDB } from '../../helpers/products.helper';

export const CardList = async () => {
  const products = await getProductsDB();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          description={product.description}
          name={product.name}
          price={product.price}
          stock={product.stock}
          image={product.image}
          categoryId={product.categoryId}
        />
      ))}
    </div>
  );
};

export default CardList;
