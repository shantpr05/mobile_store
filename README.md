# 📱 Mobile Store – React + Node.js + MongoDB

A responsive eCommerce web application for browsing and managing mobile phones. Built using **React (Vite)** on the frontend and **Node.js + Express + MongoDB** on the backend.

---

## 📌 Summary

- **Frontend**: React (Vite), Bootstrap, React Router
- **Backend**: Node.js, Express.js, MongoDB (Mongoose)
- **Authentication**: JWT stored in HttpOnly Cookies
- **State Management**: React Context API
- **Security**: JWT, bcryptjs, role-based access, input validation
- **Tracking & Privacy**: Google Tag Manager (GA4) + Cookie Consent

---

## ✅ Features

### 👤 User
- Register, login, logout
- Browse mobile products
- View product details

### 🛠️ Admin
- Add, edit, delete products (CRUD)
- Role-based protected routes

### 🌐 Pages
- Home
- Login/Register
- Product Detail
- Add/Edit Product (admin only)
- Privacy Policy

---

## 🧠 Course Requirements & Goals

### ✅ RESTful API
- Uses `GET`, `POST`, `PUT`, `DELETE` verbs
- Returns `200`, `201`, `400`, `403` status codes
- API is stateless and stores data in MongoDB

### ✅ Security
- JWT stored in **HttpOnly cookies**
- Passwords hashed with **bcryptjs**
- Admin-only routes and UI (frontend & backend)
- Input validation and error handling
- Explanation included in `SECURITY.md`

### ✅ Accessibility & SEO
- Semantic HTML: `<main>`, `<header>`, `<form>` etc.
- SEO with `react-helmet-async`
- Keyboard-navigable components
- Responsive Bootstrap layout
- Explained in `ACCESSIBILITY.md`

### ✅ Tracking & GDPR
- Google Tag Manager (GA4) integration
- Tracks page views and product events
- GDPR-compliant with **cookie consent**
- Optional: user can **Manage Cookie Preferences**
- Explained in `TRACKING.md`

---

## ▶️ How to Run Locally

### 🔧 Backend Setup

```bash
cd backend
npm install
npm run dev

cd frontend
npm install
npm run dev


## 📎 Additional Documentation

- 📄 [Accessibility & SEO Practices](https://github.com/shantpr05/mobile_store/blob/main/ACCESSIBILITY.md)
- 🔍 [Tracking & Privacy Compliance](https://github.com/shantpr05/mobile_store/blob/main/TRACKING.md)
- 🔒 [Security & Threat Mitigations](https://github.com/shantpr05/mobile_store/blob/main/SECURITY.md)
