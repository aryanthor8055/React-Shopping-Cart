import React from 'react'
import { CartState } from '../context/Context'
import SingleProducts from './SingleProducts';
import './styles.css'
import Filters from './Filters';

const Home = () => {

    const { state: { products } } = CartState();


    return (
        <div className='Home'>
            <div className='productContainer'>
                {products.map((product) => {
                    return <SingleProducts product={product} key={product.id} />
                })}
            </div>
            <Filters />
        </div>
    )
}

export default Home