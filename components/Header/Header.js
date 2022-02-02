import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="Header">
            <div className="Header__logo">
                <Link href='/'>
                    <a>
                        <h2><span>M</span>yStore</h2>
                    </a>
                </Link>
            </div>

            <nav className='Navigation'>
                <Link href='/'>
                    <a>Inicio</a>
                </Link>

                <Link href='/productos'>
                    <a>Productos</a>
                </Link>

                <Link href='/carrito-de-compras'>
                    <a>Carrito</a>
                </Link>

            </nav>
        </header>
    );
}
 
export default Header;