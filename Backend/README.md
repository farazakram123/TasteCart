# TasteCart Backend

## Overview
The backend of TasteCart is a RESTful API built with Express.js and MongoDB. It provides all the necessary endpoints for the frontend and admin applications to manage food items, user authentication, shopping cart, and orders.

## Features
- **User Management**: Registration, authentication, and profile management
- **Food Items**: CRUD operations for food items with image upload
- **Shopping Cart**: Add, remove, and retrieve cart items
- **Order Processing**: Place orders, update order status, and track orders
- **Authentication**: JWT-based authentication middleware

## Tech Stack
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: MongoDB object modeling tool
- **JWT**: JSON Web Tokens for authentication
- **Multer**: Middleware for handling file uploads
- **Bcrypt**: Library for password hashing

## Project Structure
```
├── config/             # Database configuration
├── controllers/        # Request handlers
│   ├── cartController.js    # Cart operations
│   ├── foodController.js    # Food item operations
│   ├── orderController.js   # Order operations
│   └── userController.js    # User operations
├── middleware/         # Custom middleware
│   └── auth.js              # Authentication middleware
├── models/             # Database models
│   ├── foodModel.js         # Food item schema
│   ├── orderModel.js        # Order schema
│   └── userModel.js         # User schema
├── routes/             # API routes
│   ├── cartRoute.js         # Cart endpoints
│   ├── foodRoute.js         # Food item endpoints
│   ├── orderRoute.js        # Order endpoints
│   └── userRoute.js         # User endpoints
├── uploads/            # Uploaded food images
├── .gitignore          # Git ignore file
├── package.json        # Dependencies and scripts
└── server.js           # Entry point
```

## API Endpoints

### User Routes
- `POST /api/user/register` - Register a new user
- `POST /api/user/login` - User login

### Food Routes
- `GET /api/food/list` - Get all food items
- `POST /api/food/add` - Add a new food item (with image upload)
- `DELETE /api/food/remove/:id` - Remove a food item

### Cart Routes
- `PUT /api/cart/add` - Add item to cart
- `PUT /api/cart/remove` - Remove item from cart
- `GET /api/cart/get` - Get cart items

### Order Routes
- `POST /api/order/place` - Place a new order
- `POST /api/order/verify` - Verify order payment
- `GET /api/order/userorders` - Get user's orders
- `GET /api/order/list` - Get all orders (admin)
- `POST /api/order/status` - Update order status

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- MongoDB (local or Atlas)
- npm or bun package manager

### Installation
1. Clone the repository
2. Navigate to the Backend directory
3. Install dependencies:
   ```
   npm install
   # or
   bun install
   ```
4. Create a `.env` file with the following variables:
   ```
   PORT=8000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
5. Start the server:
   ```
   npm run server
   # or
   bun run server
   ```
6. The server will be running at `http://localhost:8000`

## File Upload
The backend uses Multer for handling file uploads. Food images are stored in the `uploads` directory and served via the `/images` endpoint.

## Authentication
The backend uses JWT for authentication. Protected routes require a valid token in the request headers.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.