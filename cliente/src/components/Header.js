import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Header = () =>(
    <header className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
            <Link to='/productos' className='navbar-brand'>
                React CRUD and Routing
            </Link>
            <ul className='navbar-nav mr-auto'>
                <li>
                    <NavLink to='/productos' className='nav-link'>Productos</NavLink>
                </li>
                <li>
                    <NavLink to='/producto/nuevo' className='nav-link'>Nuevo Producto</NavLink>
                </li>
            </ul>
        </div>
    </header>
);

export default Header;