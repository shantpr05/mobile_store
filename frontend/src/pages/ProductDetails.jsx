import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactGA from 'react-ga4';
import api from '../api/axios';
import { AuthContext } from '../context/AuthContext';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.get(`/products/${id}`)
      .then(res => {
        const productData = res.data.product;
        setProduct(productData);

        ReactGA.event({
          category: 'Product',
          action: 'Viewed Product',
          label: `${productData.brand} ${productData.model}`,
          value: productData.price,
        });
      })
      .catch(err => console.error('Error loading product', err));
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await api.delete(`/products/${product._id}`);
        alert('Product deleted successfully!');
        navigate('/');
      } catch (error) {
        alert('Error deleting product');
        console.error(error);
      }
    }
  };

  if (!product) return <div className="container mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <Helmet>
        <title>{product.model} – Mobile Store</title>
        <meta name="description" content={`Details about ${product.brand} ${product.model}, featuring ${product.specifications?.ram} RAM, ${product.specifications?.storage} storage, and more.`} />
      </Helmet>

      <h2>{product.model}</h2>
      <img
        src={product.image || '/placeholder.png'}
        alt={product.model}
        className="img-fluid mb-3"
        style={{ maxHeight: '300px' }}
      />
      <ul className="list-group mb-4">
        <li className="list-group-item"><strong>Brand:</strong> {product.brand}</li>
        <li className="list-group-item"><strong>Model:</strong> {product.model}</li>
        <li className="list-group-item"><strong>Price:</strong> ₹{product.price}</li>
        <li className="list-group-item"><strong>RAM:</strong> {product.specifications?.ram}</li>
        <li className="list-group-item"><strong>Storage:</strong> {product.specifications?.storage}</li>
        <li className="list-group-item"><strong>Battery:</strong> {product.specifications?.battery}</li>
        <li className="list-group-item"><strong>Processor:</strong> {product.specifications?.processor}</li>
      </ul>

      {/* Admin-only buttons */}
      {user?.role === 'admin' && (
        <div className="d-flex gap-2">
          <Link to={`/products/edit/${product._id}`} className="btn btn-warning">
            Edit
          </Link>
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
