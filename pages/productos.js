import React, { useEffect, useState } from 'react';
import BasicLayout from '../layouts/BasicLayout';
import { getProducts } from '../utils/fetch'
import { Grid } from 'semantic-ui-react';
import Product from '../components/Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () =>{
            try {
                const response = await getProducts()
                setProducts(response)
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);

    useEffect(() => {
        console.log(products)
    }, [products]);    

    return (
        <BasicLayout>
            <Grid>
                {products.length > 0 ? (
                    products.map( product => (
                        <Grid.Column mobile={16} tablet={8} computer={4} key={product.id}>
                            <Product product={product}/>
                        </Grid.Column>
                    ))
                ) : <h1>No hay productos</h1>}
            </Grid>
            
        </BasicLayout>
    );
}
 
export default Products;