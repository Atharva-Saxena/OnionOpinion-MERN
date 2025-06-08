import Home from "./pages/Home"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Faq from "./pages/Faq"
import Register from "./pages/Register"
import ProductList from "./pages/ProductList"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"
import AboutUs from "./pages/AboutUs"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Locations from "./pages/Locations"

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/locations" element={<Locations/>} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  )
}

export default App
