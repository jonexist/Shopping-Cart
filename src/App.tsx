import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { Features } from './pages/Features';
import { Footer } from './components/Footer';
import { Cart } from './pages/Cart';

const App = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='store' element={<Store />} />
          <Route path='features' element={<Features />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </ShoppingCartProvider>
  );
};

export default App;
