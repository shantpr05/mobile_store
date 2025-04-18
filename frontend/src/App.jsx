import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetails from './pages/ProductDetails';
import ProductForm from './pages/ProductForm';
import PrivateRoute from './components/PrivateRoute'; 
import { AuthProvider } from './context/AuthContext';
import { trackPageView } from './utils/analytics'; 

const TrackRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/products/new" element={<PrivateRoute><ProductForm /></PrivateRoute>} />
      <Route path="/products/edit/:id" element={<PrivateRoute><ProductForm /></PrivateRoute>} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <TrackRoutes /> {/* ✅ custom component to track pages */}
      </Router>
    </AuthProvider>
  );
}

export default App;
