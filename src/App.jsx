import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// import './App.css'
import Navigation from './customer/components/Navigation/Navigation.jsx'
import HomePage from './customer/pages/HomePage.jsx'
import Product from './customer/components/Product/Product/Product.jsx'
import ProductDetails from './customer/components/ProductDetails/ProductDetails.jsx'
import Cart from './customer/components/Cart/Cart.jsx'
import Checkout from './customer/components/Checkout/Checkout.jsx'
import Order from './customer/components/Order/Order.jsx';
import OrderDetails from './customer/components/Order/OrderDetails.jsx';
import CustomerRouters from './Routers/CustomerRouters.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    // <div>
    //   <Navigation/>
    //   <div>
    //     {/* <HomePage/> */}
    //     {/* <Product/> */}
    //     {/* <ProductDetails/> */}
    //     {/* <Cart/> */}
    //     <Checkout/>
    //   </div>
      
    // </div>

    // <div>
    //   <Navigation/>
    //   <Routes>
    //     {/* navbar */}
    //     {/* Define your routes here */}
    //     <Route exact path="/" element={<HomePage/>} />
    //     {/* <Route path="/login" element={<LoginPage />} />
    //     <Route path="/signup" element={<Signup />} />
    //     <Route path="/profile" element={<Profile />} /> */}
    //     <Route path="/product" element={<Product/>} />
    //     {/* pagination & filter */}
    //     <Route path="/productDetails" element={<ProductDetails/>} />
    //     {/* customisation */}
    //     <Route path="/cart" element={<Cart/>} />
    //     <Route path="/checkout" element={<Checkout/>} />
    //     {/* active stage */}
    //     <Route path="/order" element={<Order/>} />
    //     <Route path="/orderDetails" element={<OrderDetails/>} />

    //   </Routes>
    // </div>




    <div>
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>
    </div>
  )
}

export default App
