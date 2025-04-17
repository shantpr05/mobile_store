import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/axios';

const ProductForm = () => {
  const [form, setForm] = useState({
    brand: '',
    model: '',
    price: '',
    image: '',
    specifications: {
      ram: '',
      storage: '',
      battery: '',
      processor: '',
      display: '', 
    },
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  useEffect(() => {
    if (isEdit) {
      api.get(`/products/${id}`)
        .then(res => setForm(res.data.product))
        .catch(err => console.error('Error loading product', err));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (['ram', 'storage', 'battery', 'processor', 'display'].includes(name)) {
      setForm(prev => ({
        ...prev,
        specifications: {
          ...prev.specifications,
          [name]: value
        }
      }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await api.put(`/products/${id}`, form);
        alert('Product updated!');
      } else {
        await api.post('/products', form);
        alert('Product created!');
      }
      navigate('/');
    } catch (err) {
      console.error('Save error:', err);
      alert('Something went wrong.');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h3>{isEdit ? 'Edit Product' : 'Add New Product'}</h3>
      <form onSubmit={handleSubmit}>
        <input name="brand" value={form.brand} onChange={handleChange} className="form-control mb-2" placeholder="Brand" required />
        <input name="model" value={form.model} onChange={handleChange} className="form-control mb-2" placeholder="Model" required />
        <input name="price" value={form.price} onChange={handleChange} className="form-control mb-2" placeholder="Price" required />
        <input name="image" value={form.image} onChange={handleChange} className="form-control mb-2" placeholder="Image URL" />

        <h6>Specifications</h6>
        <input name="ram" value={form.specifications.ram} onChange={handleChange} className="form-control mb-2" placeholder="RAM" />
        <input name="storage" value={form.specifications.storage} onChange={handleChange} className="form-control mb-2" placeholder="Storage" />
        <input name="battery" value={form.specifications.battery} onChange={handleChange} className="form-control mb-2" placeholder="Battery" />
        <input name="processor" value={form.specifications.processor} onChange={handleChange} className="form-control mb-2" placeholder="Processor" />
        <input  name="display"  value={form.specifications.display}  onChange={handleChange}  className="form-control mb-2"  placeholder="Display"
/>
        <button className="btn btn-success w-100 mt-3">{isEdit ? 'Update' : 'Create'} Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
