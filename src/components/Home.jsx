import React from 'react'
import { CartState } from '../context/Context'
import SingleProducts from './SingleProducts';
import './styles.css'

const Home = () => {

    const { state: { products } } = CartState();


    return (
        <div className='Home'>
            {/* <Filters/>  */}
            <div className='productContainer'>
                {products.map((product) => {
                    return <SingleProducts product={product} key={product.id} />
                })}
            </div>
        </div>
    )
}

export default Home