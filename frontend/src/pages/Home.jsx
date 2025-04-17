import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  <Helmet>
    <title>Mobile Store – Buy the Latest Smartphones</title>
    <meta name="description" content="Browse and buy top mobile brands like Apple, Samsung, and more." />
    <meta name="keywords" content="mobile, smartphone, electronics, online store" />
  </Helmet>
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products')
      .then(res => setProducts(res.data.products || []))
      .catch(err => console.error('Error fetching products:', err));
  }, []);
  <div className="d-flex justify-content-end mb-3">
    <Link to="/products/new" className="btn btn-success">Add New Product</Link>
  </div>


  return (
    <div className="container mt-4">
      <h2 className="mb-4">Latest Products</h2>

      {/* THIS IS WHAT YOU NEED TO REPLACE */}
      <div className="row g-4">
        {products.map(product => (
          <div className="col-md-4" key={product._id}>
            <div className="card h-100">
              <img
                src={product.image || '/placeholder.png'}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.brand}</h5>
                <p className="card-text text-muted">{product.model}...</p>
                <h6>₹ {product.price}</h6>
                <Link to={`/product/${product._id}`}>View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;
