import './App.css';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Souk } from './pages/Souk.jsx';
import  ShopCategory from './pages/ShopCategory.jsx';
import  Product  from './pages/Product.jsx';
import  {Cart}  from './pages/Cart.jsx';
import {LoginSignup} from './pages/LoginSignup.jsx';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Souk/>}/>
            <Route path='/men' element={<ShopCategory category="men"/>}/>
            <Route path='/women' element={<ShopCategory category="women"/>}/>
            <Route path='product' element={<Product/>}>
            <Route path=':productId' element={<product/>}/>
            </Route>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<LoginSignup/>}/>
          </Routes>
         <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
