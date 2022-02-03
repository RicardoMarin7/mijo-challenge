import React, {useState} from 'react'
import Link from 'next/link'
import { Button, Icon } from 'semantic-ui-react'

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggle = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <header className="Header">
            <div className="Header__logo">
                <Link href='/'>
                    <a>
                        <h2><span>M</span>yStore</h2>
                    </a>
                </Link>
            </div>

            <nav className={`Navigation ${toggleMenu ? 'Navigation--active': ''}`}>
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

            <Button className="Header__mobile" onClick={handleToggle}>
                <Icon name='bars'/>
            </Button>
        </header>
    );
}
 
export default Header;