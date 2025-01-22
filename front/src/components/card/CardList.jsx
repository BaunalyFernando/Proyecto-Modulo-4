import React from 'react'
import Card from '@/components/card';
import productsToPreLoad from '@/helpers/productsToPreLoad';

export const CardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        productsToPreLoad && productsToPreLoad.map((product) => {
          return (
            <Card key={product.id} {...product} /> 
          );
        })
      }
    </div>
  );
}

export default CardList;
