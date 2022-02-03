import { toast } from 'react-toastify'
import { size, find, remove, map} from 'lodash'

const CART = 'cart'

export const getProductsCart = () => {    
    
    const cart = JSON.parse(localStorage.getItem(CART))
    if(!cart){
        return null
    }else{
        return cart
    }
}

export const addProductCart = (product, quantity) =>{
    if(isNaN(quantity)){
        toast.error("Introduce una cantidad valida")
        return
    }

    if(!quantity){
        toast.error("El producto necesita una cantidad")
        return
    }

    if(quantity > product.stock){        
        toast.error("No hay stock suficiente")
        return
    }

    const cart = getProductsCart()

    if(!cart){
        localStorage.setItem(CART, JSON.stringify([{product: product, quantity:  parseInt(quantity)}]))
        toast.success("Producto añadido al carrito")
    }else{
        const productFound = find( cart, {product: product})
        if(productFound){
            toast.warning("El producto ya existe en tu carrito")
        }else{
            cart.push({product:product, quantity: parseInt(quantity)})
            localStorage.setItem(CART, JSON.stringify(cart))
            toast.success("Producto añadido al carrito")
        }
    }
}

export const countProductsCart = () =>{
    const cart = getProductsCart()

    if(!cart){
        return 0
    }else{
        let total = 0
        map(cart, cartItem => {
            if(cartItem.quantity){
                total += cartItem.quantity
            }
        })
        return total
    }
}

export const changeCartProductQuantity = (product, quantity) =>{
    if(!quantity) return null
    if(quantity > product.stock){
        toast.error('Insufficient Stock')
        return null
    }
    const cart = JSON.parse(localStorage.getItem(CART))
    const cartTemp = []

    for(let i = 0; i < cart.length; i++){
        if(cart[i].product.id !== product.id){
            cartTemp.push(cart[i])
        }
        else{
            cartTemp.push({product, quantity:quantity})
        }
    }
    localStorage.setItem(CART, JSON.stringify(cartTemp))
}

export const removeProductCart = (id) =>{
    const cart = JSON.parse(localStorage.getItem(CART))
    
    remove(cart, (item) =>{                
        return (item.product.id === id)
    })

    if(size(cart) > 0 ){
        localStorage.setItem(CART, JSON.stringify(cart))
    }else{
        localStorage.removeItem(CART)
    }
}

export const removerAllProductsCart = () => {
    localStorage.removeItem(CART)
}