import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import About from './Components/About/about'; // Adjust the path if necessary
import face_banner from './Components/Assets/banner.webp';
import eyes_banner from './Components/Assets/banner2.webp';
import lips_banner from './Components/Assets/banner3.webp';
import { AuthProvider } from './Context/AuthContext'; // Import AuthProvider
import ShopContextProvider from './Context/ShopContext'; // Import ShopContextProvider
import PrivateRoute from './PrivateRoute'; // Correct default import

function App() {
  return (
    <AuthProvider>
      <ShopContextProvider>
        <div>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/face" element={<ShopCategory banner={face_banner} category="face" />} />
              <Route path="/eyes" element={<ShopCategory banner={eyes_banner} category="eyes" />} />
              <Route path="/lips" element={<ShopCategory banner={lips_banner} category="lips" />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/about" element={<About />} />
              
              {/* Protect Cart Route */}
              <Route path="/cart" element={<PrivateRoute element={<Cart />} />} />
              
              <Route path="/login" element={<LoginSignup />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </ShopContextProvider>
    </AuthProvider>
  );
}

export default App;
