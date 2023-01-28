import React from 'react'
import { Link } from 'react-router-dom';
import {
    Navbar,
    Container,
    FormControl,
    Dropdown,
    Badge,
    Nav
} from 'react-bootstrap';

import { FaShoppingCart } from 'react-icons/fa';


export const Header = () => {
    return (
        <Navbar bg='dark' variant='dark' style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl style={{ width: 500 }} placeholder='search for a product' className='m-auto' />

                </Navbar.Text>
                <Nav>
                    <Dropdown alignRight>
                        <Dropdown.Toggle variant='success'>
                            <FaShoppingCart color="white" fontSize="25px" />
                            <Badge className='bg-success'>{10}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 370 }}>
                            <span className='span' style={{ padding: 10 }}>Cart is Empty!</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}
