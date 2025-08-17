# TasteCart

TasteCart is a full-stack MERN (MongoDB, Express, React, Node.js) food delivery application with separate frontend, backend, and admin interfaces.

## Project Structure

The project is organized into three main folders:

### Backend

The backend is built with Express.js and provides the API for the application.

```
Backend/
├── config/           # Database configuration
├── controllers/      # Request handlers for different resources
├── middleware/       # Authentication middleware
├── models/           # MongoDB schema definitions
├── routes/           # API route definitions
├── uploads/          # Food images storage
└── server.js         # Main server entry point
```

**Key Features:**
- RESTful API endpoints for food items, users, cart, and orders
- JWT-based authentication
- MongoDB database integration
- File uploads for food images

**Technologies:**
- Express.js - Web framework
- Mongoose - MongoDB object modeling
- JWT - Authentication
- Multer - File uploads
- Bcrypt - Password hashing

### Frontend

The customer-facing frontend built with React and Vite.

```
Frontend/
├── public/           # Static assets
├── src/
│   ├── assets/       # Images and other assets
│   ├── components/   # Reusable UI components
│   ├── context/      # React context for state management
│   └── pages/        # Application pages
└── vite.config.js    # Vite configuration
```

**Key Features:**
- User authentication
- Food browsing and ordering
- Shopping cart functionality
- Order tracking

**Technologies:**
- React - UI library
- React Router - Navigation
- Axios - API requests
- React Toastify - Notifications
- Vite - Build tool

### Admin

The admin dashboard for managing the application.

```
admin/
├── public/           # Static assets
├── src/
│   ├── assets/       # Admin-specific assets
│   ├── components/   # Admin UI components
│   └── pages/        # Admin dashboard pages
└── vite.config.js    # Vite configuration
```

**Key Features:**
- Food item management (add, edit, delete)
- Order management
- Admin dashboard

**Technologies:**
- React - UI library
- React Router - Navigation
- Axios - API requests
- React Toastify - Notifications
- Vite - Build tool

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Bun (package manager)

### Installation

1. Clone the repository

2. Install dependencies for each part of the application:

```bash
# Backend
cd Backend
bun install

# Frontend
cd ../Frontend
bun install

# Admin
cd ../admin
bun install
```

### Running the Application

1. Start the backend server:

```bash
cd Backend
bun run server
```

2. Start the frontend development server:

```bash
cd Frontend
bun run dev
```

3. Start the admin development server:

```bash
cd admin
bun run dev
```

## Features

- User authentication and authorization
- Food item browsing and searching
- Shopping cart functionality
- Order placement and tracking
- Admin dashboard for food and order management
- Image upload for food items

## Project Architecture

TasteCart follows a typical MERN stack architecture:

- **MongoDB**: Database for storing food items, users, carts, and orders
- **Express.js**: Backend API server
- **React**: Frontend user interfaces (both customer and admin)
- **Node.js**: Runtime environment for the backend

The application uses a RESTful API design pattern with separate concerns for models, routes, and controllers.