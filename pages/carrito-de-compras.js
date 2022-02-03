import React from 'react'
import Cart from '../components/Cart/Cart';
import Seo from '../components/Seo';
import BasicLayout from '../layouts/BasicLayout';


const Carrito = () => {
    

    return (
        <BasicLayout>
            <Seo
                title='Carrito de Compras'
            />
            <Cart />
        </BasicLayout>
    );
}
 
export default Carrito;