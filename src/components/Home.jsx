import React from 'react'
import { CartState } from '../context/Context'
import SingleProducts from './SingleProducts';
import './styles.css'
import Filters from './Filters';

const Home = () => {

    const { state: { products },
        productState: { sort, byStock, byFastDelivery, byRating, searchQuery }, } = CartState();

    const transformProducts = () => {
        let sortedProducts = products;

        if (sort) {
            sortedProducts = sortedProducts.sort((a, b) => (
                sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
            ))
        }

        if (!byStock) {
            sortedProducts = sortedProducts.filter((product) => product.inStock)
        }

        if (byFastDelivery) {
            sortedProducts = sortedProducts.filter((product) => product.fastDelivery)
        }

        if (byRating) {
            sortedProducts = sortedProducts.filter((product) => product.ratings >= byRating)
        }

        if (searchQuery) {
            sortedProducts = sortedProducts.filter((product) => product.name.toLowerCase().includes(searchQuery))
        }

        return sortedProducts;
    }

    return (
        <div className='Home'>
            <div className='productContainer'>
                {transformProducts().map((product) => {
                    return <SingleProducts product={product} key={product.id} />
                })}
            </div>
            <Filters />
        </div>
    )
}

export default Home