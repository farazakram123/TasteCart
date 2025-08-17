# TasteCart Admin Panel

## Overview
The TasteCart Admin Panel is a React-based web application that provides an administrative interface for managing the TasteCart food delivery platform. It allows administrators to add new food items, view and manage existing items, and handle customer orders.

## Features
- **Dashboard**: Overview of platform statistics and activities
- **Food Management**: Add, edit, and remove food items
- **Order Management**: View, process, and update order statuses
- **User-friendly Interface**: Clean and intuitive UI for efficient administration

## Tech Stack
- **React**: Frontend library for building the user interface
- **React Router**: For navigation between different sections
- **Axios**: For making HTTP requests to the backend API
- **React Toastify**: For displaying notifications
- **CSS**: For styling components
- **Vite**: Build tool and development server

## Project Structure
```
├── public/             # Static files
├── src/                # Source files
│   ├── assets/         # Images and other assets
│   ├── components/     # Reusable components
│   │   ├── Navbar/     # Navigation bar component
│   │   └── Sidebar/    # Sidebar navigation component
│   ├── pages/          # Page components
│   │   ├── Add/        # Add new food items
│   │   ├── List/       # List and manage food items
│   │   └── Orders/     # Manage customer orders
│   ├── App.jsx         # Main application component
│   ├── index.css       # Global styles
│   └── main.jsx        # Application entry point
├── .eslintrc.cjs       # ESLint configuration
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
└── vite.config.js      # Vite configuration
```

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or bun package manager
- Backend API running (see Backend README)

### Installation
1. Clone the repository
2. Navigate to the admin directory
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
5. The admin panel will be available at `http://localhost:5173`

## Build for Production

To build the admin panel for production:

```
npm run build
# or
bun run build
```

The built files will be in the `dist` directory, ready to be deployed to a web server.

## Backend Connection

The admin panel connects to the TasteCart backend API. Make sure the backend server is running and accessible. The API URL can be configured in the application if needed.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
