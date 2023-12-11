import { Routes, Route, useNavigate, createSearchParams } from "react-router-dom"
import { NavBar } from "./components/navbar"
import { Products } from "./pages/products"
import { Product } from "./pages/product"
import { Cart } from "./pages/cart"
import { NotFound } from "./pages/not-found"

import { useCart } from './context/cart'
import Loggin from "./pages/account/loggin/loggin"
import Register from "./pages/account/register/register"
import {Allproducts} from "./pages/allProducts/allproducts"
import Productsreview from "./pages/ProductReview/ProductReview"
import Thanks from "./pages/ProductReview/thanks"
import Chatbot from "./pages/chatbot/chatbot"
import Footer from "./pages/footer/footer"
import './index.css'
import ScrollToTop from "./components/gotop/gotop"
import PaymentForm from "./pages/payment/payment"
function App() {

  const navigate = useNavigate();
  const { cartItemCount } = useCart()

  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }

  return (
    <div className="Appp">
      <NavBar onSearch={onSearch} cartItemCount={cartItemCount()} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/loggin" element={<Loggin/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/allproducts" element={<Allproducts/>} />
        <Route path="/productsreview" element={<Productsreview/>} />
        <Route path="/thanks" element={<Thanks/>} />
        <Route path="/payment" element={<PaymentForm/>} />
      </Routes>
      {/* chatbot */}
      <Chatbot/>
      {/* icon dich len tren trang */}
      <ScrollToTop/>
      {/* footer */}
      <Footer/>
    </div>
  );
}

export default App;
