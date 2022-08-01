import {BrowserRouter, Route, NavLink, Routes} from 'react-router-dom';
import CartIcon from './components/CartIcon';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import { Provider } from 'react-redux';
import store from "./store/store"
import './App.css';

const MyNavLink = (props) => <NavLink  {...props}>{props.children}</NavLink>
function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <MyNavLink className="navbar-brand" to="/">Cats Store</MyNavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <MyNavLink  className="nav-link" to="/" >Home</MyNavLink>
                </li>
                <li className="nav-item">
                  <MyNavLink className="nav-link" to="/products">Products</MyNavLink>
                </li>
                <li className="nav-item">
                  <MyNavLink className="nav-link" to="/cart">Cart</MyNavLink>
                </li>
              </ul>
            </div>
          </div>
          <CartIcon />
      </nav>
      <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/products' exact element={<Products />} />
          <Route path='/cart' exact element={<Cart />} />
          <Route path='/products/:id' exact element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}
function AppWithStore (){
  return(
    <Provider store={store}>
      <App />
    </Provider>
  )
}
export default AppWithStore;
