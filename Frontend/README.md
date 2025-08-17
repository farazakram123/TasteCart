# TasteCart Frontend

## Overview
The frontend of TasteCart is a modern, responsive web application built with React and Vite. It provides users with an intuitive interface to browse food items, add them to cart, place orders, and track order status.

## Features
- **User Authentication**: Sign up and login functionality with JWT authentication
- **Food Browsing**: Browse food items by categories
- **Shopping Cart**: Add/remove items from cart with real-time updates
- **Order Placement**: Complete checkout process with address details
- **Order Tracking**: View order status and history
- **Responsive Design**: Optimized for both desktop and mobile devices

## Tech Stack
- **React**: UI library for building the user interface
- **React Router**: For navigation and routing
- **Context API**: For state management across the application
- **Axios**: For API requests to the backend
- **React Toastify**: For notifications
- **CSS**: Custom styling with responsive design

## Project Structure
```
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and asset utilities
│   ├── components/      # Reusable UI components
│   │   ├── AppDownload/     # Mobile app download section
│   │   ├── ExploreMenu/     # Food category menu
│   │   ├── FoodDisplay/     # Food items display
│   │   ├── FoodItem/        # Individual food item component
│   │   ├── Footer/          # Footer component
│   │   ├── Header/          # Header with banner
│   │   ├── LoginPopup/      # Authentication modal
│   │   └── Navbar/          # Navigation bar
│   ├── context/         # Context providers for state management
│   ├── pages/           # Main application pages
│   │   ├── Cart/            # Shopping cart page
│   │   ├── Home/            # Landing page
│   │   ├── MyOrders/        # Order history page
│   │   ├── PlaceOrder/      # Checkout page
│   │   └── Verify/          # Order verification page
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or bun package manager

### Installation
1. Clone the repository
2. Navigate to the Frontend directory
3. Install dependencies:
   ```
   npm install
   # or
   bun install
   ```
4. Start the development server:
   ```
   npm run dev
   # or
   bun run dev
   ```
5. Open your browser and navigate to `http://localhost:5173`

## Build for Production
```
npm run build
# or
bun run build
```

## Connection with Backend
The frontend communicates with the backend API running on `http://localhost:8000` by default. This can be configured in the `StoreContext.jsx` file if needed.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
