import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navigation from '../customer/components/Navigation/Navigation.jsx'
import HomePage from '../customer/pages/HomePage.jsx'
import Product from '../customer/components/Product/Product/Product.jsx'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails.jsx'
import Cart from '../customer/components/Cart/Cart.jsx'
import Checkout from '../customer/components/Checkout/Checkout.jsx'
import Order from '../customer/components/Order/Order.jsx';
import OrderDetails from '../customer/components/Order/OrderDetails.jsx';
import OrderTracker from '../customer/components/Order/OrderTracker.jsx'


const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation/>
      </div>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/login" element={<HomePage/>} />
        <Route exact path="/register" element={<HomePage/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/:LevelOne/:levelTwo/:levelThree" element={<Product/>} />
        <Route path="/product/:productId" element={<ProductDetails/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/orderDetails" element={<OrderDetails/>} />
        <Route path="/order" element={<Order/>} />



        
      </Routes>
    </div>
  )
}

export default CustomerRouters
