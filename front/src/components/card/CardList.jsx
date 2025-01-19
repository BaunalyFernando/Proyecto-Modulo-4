import React from 'react'
import Card from '@/components/card';
import productsToPreLoad from '@/helpers/productsToPreLoad';


export const CardList = () => {
  return (
    <>
            <h1>hola</h1>
        {
        productsToPreLoad && productsToPreLoad.map((product) => {
          return (
            <Card key={product.id} {...product}/>
          )
        })
      }
    </>
  )
}

export default CardList;
