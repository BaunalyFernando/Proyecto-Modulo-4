import {IProducts} from '../types/index';

export const productsToPreLoad: IProducts[] = [
     {
        id: 1,
        name: 'Product 1',
        description: 'Description 1',
        price: 100,
        stock: 10,
        image: 'https://m.media-amazon.com/images/I/61MG3m5FhIL.AC_SL1500.jpg',
        categoryId: 1
    },
    {
        id: 2 ,
        name: 'Product 2',
        description: 'Description 2',
        price: 200,
        stock: 20,
        image: 'https://m.media-amazon.com/images/I/71eXNIDUGjL.AC_SL1500.jpg',
        categoryId: 2
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'Description 3',
        price: 300,
        stock: 30,
        image: 'https://via.placeholder.com/150',
        categoryId: 3
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'Description 4',
        price: 400,
        stock: 40,
        image: 'https://via.placeholder.com/150',
        categoryId: 4
    },
    {
        id: 5,
        name: 'Product 5',
        description: 'Description 5',
        price: 500,
        stock: 50,
        image: 'https://via.placeholder.com/150',
        categoryId: 5
    }
]

export default productsToPreLoad;

