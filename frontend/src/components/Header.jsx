import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/axios';

const Header = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = async () => {
    await api.get('/logout');
    setUser(null); 
    navigate('/');
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link to="/" className="navbar-brand">Mobile Store</Link>

      <div className="ms-auto d-flex gap-2 align-items-center">
        <Link to="/products/new" className="btn btn-success">Add Product</Link>
      
        {user ? (
          <>
            <span className="text-white">Welcome, {user.name}</span>
            <button onClick={handleLogout} className="btn btn-outline-light">Logout</button>
          </>
        ) : (
          <Link to="/login" className="btn btn-outline-light">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
