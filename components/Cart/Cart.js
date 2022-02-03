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
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setProducts(getProductsCart())        
    }, [reloadCart]);

    useEffect(() => {
        setReloadCart(false)
    }, [reloadCart]);    

    useEffect(() => {
        setTotal(calculateTotal())
    }, [products]);

    const handleRemove = (id) =>{
        removeProductCart(id)
        setReloadCart(true)
    }

    const getPrice = (stringPrice) => Number(stringPrice.replace('$',''))

    const calculateSubtotal = (product, quantity) =>{
        let price = getPrice(product.price)
        let subtotal = price * quantity
        return subtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})        
    }

    const calculateTotal = () =>{
        if(size(products) < 1) return 0

        let total = 0

        for (let i = 0; i < products.length; i++) {
            let productData = products[i].product
            let price = getPrice(productData.price)
            total += price * products[i].quantity
        }

        return total
    }

    const handleQuantityChange = (product, quantity) =>{        
        quantity += ''
        quantity = quantity.replace(/[^1-9]*/,'')
        if(quantity > product.stock){
            toast.error('No hay suficiente stock')
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
                            <h3 className="">${calculateSubtotal(productData, product.quantity)}</h3>
                        </Table.Cell>

                        <Table.Cell width="1">
                            <Button icon className="Cart__delete" onClick={ () => handleRemove(productData.id)}>
                                <Icon name='trash alternate outline' />
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                )
            })}            
        </Table.Body>
        
        <Table.Footer fullWidth className='Cart__footer'>
            <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell />
                <Table.HeaderCell />
                <Table.HeaderCell>
                    <h3>Total:</h3>
                </Table.HeaderCell>
                <Table.HeaderCell colSpan="4">
                    <h3>${total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h3>
                </Table.HeaderCell>
            </Table.Row>
        </Table.Footer>
        


    </Table>
    );
}

export default Cart;