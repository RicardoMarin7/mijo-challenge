import React from 'react'
import { Placeholder, Button, Input } from 'semantic-ui-react';

const Product = ({product}) => {
    return (
        <div className="Product">
            <div className="Product__info">
                <Placeholder inverted style={{height: 200, width: '100%'}}>
                    <Placeholder.Image />
                </Placeholder>
                <p className='Product__id'>ID: {product.id}</p>
                <h3 className='Product__name'>{product.product}</h3>
                <p className='Product__price'>{product.price}</p>
            </div>
            <div className="Product__actions">
                <Input placeholder='0' type='number' />
                <Button primary>Añadir al carrito</Button>
            </div>
        </div>
    );
}
 
export default Product;