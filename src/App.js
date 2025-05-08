import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import About from './Components/About/about'; // Adjust path if needed
import face_banner from './Components/Assets/banner.webp';
import eyes_banner from './Components/Assets/banner2.webp';
import lips_banner from './Components/Assets/banner3.webp';
import { AuthProvider } from './Context/AuthContext'; // Import AuthProvider
import ShopContextProvider from './Context/ShopContext'; // Import ShopContextProvider

function App() {
  return (
    <AuthProvider> {/* Wrap everything with AuthProvider */}
      <ShopContextProvider> {/* Wrap everything with ShopContextProvider */}
        <div>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/face" element={<ShopCategory banner={face_banner} category="face" />} />
              <Route path="/eyes" element={<ShopCategory banner={eyes_banner} category="eyes" />} />
              <Route path="/lips" element={<ShopCategory banner={lips_banner} category="lips" />} />
              <Route path="/product" element={<Product />}>
                <Route path=":productId" element={<Product />} />
              </Route>
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
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
