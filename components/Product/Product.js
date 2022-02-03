import React, { useState } from 'react'
import { Placeholder, Button, Input } from 'semantic-ui-react';
import useCart from '../../hooks/useCart'

const Product = ({product}) => {

    const [quantity, setQuantity] = useState(1);
    const { addProductCart } = useCart()

    return (
        <div className={`Product ${ product.stock < 1 ? 'Product--disabled' : ''}`}>
            <div className="Product__info ">
                <Placeholder inverted style={{height: 200, width: '100%'}}>
                    <Placeholder.Image />
                </Placeholder>
                <div className='Product__head'>
                    <p>ID: {product.id}</p>
                    <p>Stock: {product.stock}</p>
                </div>
                <h3 className='Product__name'>{product.product}</h3>
                <p className='Product__price'>{product.price}</p>
            </div>
            <div className="Product__actions">
                { product.stock < 1 ? <h3>Sin Stock </h3> : (
                    <>
                        <Input placeholder='0' onChange={ e => setQuantity(e.target.value)} value={quantity}/>
                        <Button 
                            primary
                            onClick={() => addProductCart(product, quantity)}
                        >Añadir al carrito</Button>
                    </>
                )}
                
            </div>
        </div>
    );
}

export default Product;