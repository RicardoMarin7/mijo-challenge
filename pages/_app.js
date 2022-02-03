import React, { useMemo, useEffect, useState } from 'react'
import CartContext from '../context/CartContext'
import { addProductCart, changeCartProductQuantity, countProductsCart, getProductsCart, removeProductCart, removerAllProductsCart} from '../api/cart'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import 'semantic-ui-css/semantic.min.css'
import '../scss/global.scss'

function MyApp({ Component, pageProps }) {

  const [totalProductsCart, setTotalProductsCart] = useState(0);
  const [reloadCart, setReloadCart] = useState(false);

  useEffect(() => {
    setTotalProductsCart(countProductsCart())
    setReloadCart(false)
  }, [reloadCart]);

  const cartData = useMemo(
    ()=>({
      productsCart: totalProductsCart,
      addProductCart,
      getProductsCart,
      removeProductCart,
      removerAllProductsCart,
      changeCartProductQuantity,
    }),
    [totalProductsCart]
  )


  return (
    <CartContext.Provider value={cartData}>
      <Component {...pageProps} />
      <ToastContainer 
            position="top-right"
            autoClose={5000}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pausenHover
            theme='dark'
      />
    </CartContext.Provider>
    )
}

export default MyApp
