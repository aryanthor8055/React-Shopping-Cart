import { createContext, useReducer } from "react"
import { faker } from '@faker-js/faker';
import { cartReducer } from "./Reducers";
import { useContext } from "react";

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {

    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.finance.amount(),
        image: faker.image.image(640, 480, true),
        inStock: faker.helpers.arrayElement([0, 3, 5, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5])
    }))

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    })

    return (
        <Cart.Provider value={{ state, dispatch }}>
            {children}
        </Cart.Provider>
    )
}

export default Context;

export const CartState = () => {
    return useContext(Cart)
}