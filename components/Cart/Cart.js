import React,  { useEffect, useState }  from 'react'
import { Table, Placeholder, Button, Icon, Input } from 'semantic-ui-react'
import { toast } from 'react-toastify'
import { size, map, forEach } from 'lodash'
import useCart from '../../hooks/useCart'
import { changeCartProductQuantity } from '../../api/cart'

const Cart = () => {
    const { getProductsCart, removeProductCart } = useCart()
    const [reloadCart, setReloadCart] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProductsCart())
    }, [reloadCart]);

    useEffect(() => {
        setReloadCart(false)
    }, [reloadCart]);

    const handleRemove = (id) =>{
        removeProductCart(id)
        setReloadCart(true)
    }

    const handleQuantityChange = (product, quantity) =>{        
        quantity += ''
        quantity = quantity.replace(/[^1-9]*/,'')
        if(quantity > product.stock){
            toast.error('Insufficient Stock')
            return
        }
        
        const productsTemp = []        

        for (let i = 0; i < products.length; i++) {
            if(products[i].product.id !== product.id){                
                productsTemp.push(products[i])
            }
            else{
                if(quantity){
                    productsTemp.push({product, quantity: parseInt(quantity)})
                    changeCartProductQuantity(product, quantity)
                }else{
                    productsTemp.push({product, quantity: quantity})
                    changeCartProductQuantity(product, quantity)
                }
            }
        }
        setProducts(productsTemp)        
        return        
    }

    return (
        <Table striped className="Cart">
        <Table.Header className="Cart__header">
            <Table.Row>
                <Table.HeaderCell colSpan='3'>
                    <h1 className="">Carrito de Compras</h1>
                </Table.HeaderCell>
                <Table.HeaderCell colSpan='1'>
                    <p className="">{size(products)} Productos</p>
                </Table.HeaderCell>

                <Table.HeaderCell colSpan='2'>
                    <p className="">Subtotal</p>
                </Table.HeaderCell>
            </Table.Row>
        </Table.Header>        

        <Table.Body>
            {map(products, product => {
                const productData = product.product

                return (
                    <Table.Row  key={productData.id}>
                        <Table.Cell width={2}>
                            <Placeholder inverted style={{height: 120, width: '100%'}}>
                                <Placeholder.Image />
                            </Placeholder>
                        </Table.Cell>

                        <Table.Cell width="9">
                            <h3 className="">{productData.product}</h3>
                            <p className="">{productData.stock} in Stock</p>
                        </Table.Cell>

                        <Table.Cell width="1">
                            <h3 className="">{productData.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h3>
                        </Table.Cell>

                        <Table.Cell width="1">
                            <div className="Cart__quantity">
                                <Input 
                                    value={product.quantity} 
                                    name="quantity" 
                                    id="quantity" 
                                    onChange={ (data) => handleQuantityChange(productData, data.target.value)} 
                                />
                            </div>
                        </Table.Cell>

                        <Table.Cell width="1">
                            {/* <h3 className="">${product.quantity ? (productData.price * product.quantity).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) : 0}</h3> */}
                            0
                        </Table.Cell>

                        <Table.Cell width="1">
                            <Button icon className="FullCart__row_delete" onClick={ () => handleRemove(productData.id)}>
                                <Icon name='close' />
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                )
            })}
            
        </Table.Body>

    </Table>
    );
}

export default Cart;