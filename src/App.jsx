import { Routes, Route, Link } from 'react-router'
import './styles/App.css'
import { Provider } from 'react-redux';

import NavBar from './components/NavBar'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Footer from "./components/Footer.jsx";
import store from './Data/store';
import ShoppingCart from "./pages/ShoppingCart.jsx";
import ProductDetails from "./pages/Product.jsx";
import Products from "./pages/Products.jsx";
import Search from "./pages/Search.jsx";
import AllCategories from "./pages/AllProducts.jsx";

function App() {
  return (
    <Provider store={store}>
      {/*<nav>*/}
      {/*  <Link to="/">Home</Link>*/}
      {/*  <Link to="/about">About</Link>*/}
      {/*</nav>*/}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<AllCategories/>} />
          <Route path="/products/:category" element={<Products/>} />
          <Route path="/search/:value" element={<Search />} />
          <Route path="/search" element={<Search />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
      <Footer/>
    </Provider>
  )
}

export default App
