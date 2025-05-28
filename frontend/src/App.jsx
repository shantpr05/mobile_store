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
import CookieConsent from 'react-cookie-consent';
import Privacy from './pages/Privacy';

const TrackRoutes = () => {
  const location = useLocation();

  useEffect(() => {
        const consentGiven = document.cookie.includes('site_consent=true');
    if (consentGiven) {
      trackPageView(location.pathname + location.search);
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/products/new" element={<PrivateRoute adminOnly><ProductForm /></PrivateRoute>} />
      <Route path="/products/edit/:id" element={<PrivateRoute adminOnly><ProductForm /></PrivateRoute>} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <TrackRoutes /> {/* ✅ custom component to track pages */}
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="site_consent"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
          onAccept={() => {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: 'consent_update',
              ad_storage: 'granted',
              analytics_storage: 'granted'
            });
          }}
        >
          We use cookies to personalize content and track usage. Read our{' '}
          <a href="/privacy" style={{ color: '#ffd700' }}>Privacy Policy</a>.
        </CookieConsent>
      </Router>
    </AuthProvider>
  );
}

export default App;
