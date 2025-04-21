import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import  face_banner from './Components/Assets/banner.webp'
import  women_banner from './Components/Assets/banner2.webp'
import kids_banner from './Components/Assets/banner3.webp'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>  
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/face" element={<ShopCategory banner= {face_banner} category="men"/>} />
        <Route path="/eyes" element={<ShopCategory banner= {women_banner} category="women"/>} />
        <Route path="/kids" element={<ShopCategory  banner= {kids_banner}  category="kid"/>} />
        <Route path="/product" element={<Product/>}>
        <Route path=':productId' element={<Product/>} />
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignup/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
