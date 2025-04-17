# 📱 Mobile Store – React + Node.js + MongoDB

A responsive eCommerce application to browse and manage mobile phones. Built using **React (Vite)** for frontend and **Node.js + Express + MongoDB** for backend.

---

## 📌 Summary of Application

- **Frontend**: React with Vite, Bootstrap
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT stored in HttpOnly Cookies
- **Features**:
  - Browse all mobile products
  - Product detail view
  - Admin-only CRUD (Add, Edit, Delete)
  - User login, register, logout with context
  - Protected routes based on user roles

---

## ▶️ How to Run

### 🔧 Backend Setup

```bash
cd backend
npm install
npm run dev

##Create a .env file in /backend/config/:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d
## 💻 Frontend Setup
cd frontend
npm install
npm run dev
## Make sure CORS is configured correctly in your backend (app.js):

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

## A11y and SEO
- ✅ Semantic HTML: <header>, <main>, <nav>, etc.

- ✅ Responsive design with Bootstrap

- ✅ Keyboard navigation supported

- ✅ SEO-friendly using react-helmet-async

- Page-specific titles and descriptions

- Dynamic <meta> tags

##  Tracking (Optional)
- Page views, product clicks, user login/logout events

## Security
- ✅ JWT in HttpOnly Cookies to prevent XSS

- ✅ Password hashing with bcryptjs

- ✅ Role-based access (user/admin)

- ✅ Input validation on both client/server

- ✅ Secure CORS with credentials: true

- ✅ Middleware to protect routes (isAuthenticatedUser)

## Tech Stack

### Frontend:

React (Vite)

React Router DOM

Axios

Bootstrap

React Helmet Async (SEO)

### Backend:

Node.js + Express

MongoDB + Mongoose

JWT Authentication

bcryptjs for password security


