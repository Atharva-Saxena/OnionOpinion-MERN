import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ProductList from "./pages/ProductList"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"
import Faq from "./pages/Faq"
import AboutUs from "./pages/AboutUs"
import Locations from "./pages/Locations"

// Components
import Navbar from "./components/Navbar"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    // Check for saved user in localStorage and restore auth state
    const userInfo = localStorage.getItem('userInfo')
    if (userInfo) {
      dispatch({ type: 'AUTH_SUCCESS', payload: JSON.parse(userInfo) })
    }
    
    // Check for saved cart in localStorage and restore cart state
    const cartItems = localStorage.getItem('cartItems')
    if (cartItems) {
      const parsedItems = JSON.parse(cartItems)
      parsedItems.forEach(item => {
        dispatch({ type: 'ADD_TO_CART', payload: item })
      })
    }
  }, [dispatch])

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        
        {/* Protected Routes - will be implemented later */}
        {/* <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/checkout" element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        } /> */}
      </Routes>
    </Router>
  )
}

export default App
