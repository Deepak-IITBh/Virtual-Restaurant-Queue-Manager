# Royal Queen - Virtual Restaurant Queue Manager 

A modern, intelligent queue management system that eliminates physical waiting times in restaurants. Customers can browse menus, place orders, and track preparation in real-time while enjoying a seamless dining experience.

**Live Demo:** [https://virtual-restaurant-queue-manager.onrender.com/](https://virtual-restaurant-queue-manager.onrender.com/)

---

##  Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

##  Features

### Customer Features
-  **Virtual Queue Management** - Join queue digitally and track position in real-time
-  **Menu Browsing** - Browse restaurant menu with categories and detailed descriptions
-  **Order Placement** - Easy-to-use ordering interface with cart functionality
-  **Order Tracking** - Real-time updates on order preparation status
-  **User Profiles** - Manage personal information and view order history
-  **Responsive UI** - Works seamlessly on desktop, tablet, and mobile devices

### Restaurant Dashboard
-  Queue management and order tracking
-  Kitchen display system
-  Menu management
-  Basic analytics and statistics

---

##  Tech Stack

### Frontend
- **React.js** - UI library for building dynamic interfaces
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **React Scroll** - Smooth scrolling functionality
- **Axios** - HTTP client (for API calls)

### Backend
- **Go (Golang)** - High-performance backend server
- **Gin** - Web framework for Go
- **MongoDB** - NoSQL database for data persistence
- **CORS** - Cross-origin resource sharing support

### Deployment
- **Render** - Cloud platform for hosting the application

---

##  Project Structure

\\
Virtual Restaurant Queue Manager/

 Frontend/                          # React.js application
    public/                        # Static assets
    src/
       components/                # Reusable components
          Navbar.jsx             # Navigation bar
          Hero.jsx               # Hero section with menu
          Footer.jsx             # Footer component
          CardProduct.jsx        # Product card component
          Categories.jsx         # Category filter
          Modal.jsx              # Modal dialogs
       pages/                     # Page components
          Homepage.jsx           # Landing page
          Cart.jsx               # Shopping cart
          Profile.jsx            # User profile
          ProjectPage.jsx        # Project showcase
       App.js                     # Main app component
       index.js                   # Entry point
    package.json                   # Dependencies
    tailwind.config.js              # Tailwind configuration

 Backend/                           # Go backend application
    main.go                        # Application entry point
    go.mod                         # Go module definition
    database/
       databaseConnection.go      # MongoDB connection
    models/                        # Data models
       userModel.go
       foodModel.go
       menuModel.go
       orderModel.go
       tableModel.go
       invoiceModel.go
    controllers/                   # Request handlers
       userController.go
       foodController.go
       menuController.go
       orderController.go
       invoiceController.go
    routes/                        # API routes
       userRouter.go
       foodRouter.go
       menuRouter.go
       orderRouter.go
       invoiceRouter.go
    middleware/                    # Authentication middleware
       authMiddleware.go
    helpers/                       # Helper functions
        tokenHelper.go

 .gitignore                         # Git ignore rules
\\

---

##  Installation

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Go** (v1.16 or higher)
- **MongoDB** (local or cloud instance)

### Frontend Setup

\\ash
cd Frontend

# Install dependencies
npm install

# Start development server
npm start
\\
The app will open at http://localhost:3000

### Backend Setup

\\ash
cd Backend

# Download dependencies
go mod download

# Run the server
go run main.go
\\
Backend will start at http://localhost:8000

### MongoDB Setup

1. Install MongoDB Community Edition
2. Create a database named 	echque
3. The connection string is configured as: mongodb://localhost:27017

---

##  Usage

### As a Customer
1. Visit the application homepage
2. Browse the menu by categories (Appetizers, Main Course, Desserts, etc.)
3. Select items and add to cart
4. Place order and join the virtual queue
5. Track order status in real-time
6. Receive notification when order is ready

### As Restaurant Admin
1. Access the dashboard
2. Monitor incoming orders in the queue
3. Update order status as items are prepared
4. Manage menu items and categories
5. View analytics and statistics

---

##  API Endpoints

### User Routes
- GET /users - Get all users
- POST /users/signup - Register new user
- POST /users/login - User login
- GET /users/:user_id - Get user by ID
- PATCH /users/:user_id - Update user profile

### Menu Routes
- GET /menus - Get all menu categories
- POST /menus - Create new menu category
- GET /menus/:menu_id - Get menu by ID
- GET /menus/:menu_id/foods - Get foods in category
- PATCH /menus/:menu_id - Update menu
- DELETE /menus/:menu_id - Delete menu

### Food Routes
- GET /foods - Get all food items
- POST /foods - Create new food item
- GET /foods/:food_id - Get food by ID
- PATCH /foods/:food_id - Update food
- DELETE /foods/:food_id - Delete food

### Order Routes
- GET /orders - Get all orders
- POST /orders - Create new order
- GET /orders/:order_id - Get order details
- GET /orders/queue/:table_id - Get queue statistics
- PATCH /orders/:order_id - Update order status

---

##  Design Highlights

- **Modern UI** - Clean, professional design with gradient accents
- **Responsive Layout** - Mobile-first approach using Tailwind CSS
- **Fast Performance** - Optimized React components with efficient rendering
- **Accessibility** - Proper semantic HTML and ARIA labels
- **Error Handling** - Graceful error messages and fallbacks

---

##  Workflow

1. **User Registration & Login** - Secure authentication with JWT tokens
2. **Browse Menu** - Fetch categories and items from backend
3. **Place Order** - Submit order with selected items
4. **Queue Management** - Join virtual queue and get position
5. **Real-time Updates** - Track order preparation status
6. **Order Completion** - Receive notification when ready

---

##  Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (\git checkout -b feature/AmazingFeature\)
3. Commit your changes (\git commit -m 'Add some AmazingFeature'\)
4. Push to the branch (\git push origin feature/AmazingFeature\)
5. Open a Pull Request

---

##  License

This project is licensed under the MIT License - see the LICENSE file for details.

---

##  Contact & Support

- **Email:** info@royalqueen.com
- **Location:** Near Hostel 1 IIT, Bhilai, Raipur
- **Phone:** +91 9760843775

---

##  Acknowledgments

- Built with modern web technologies
- Inspired by real-world restaurant challenges
- Community feedback and contributions

---

** 2025 Royal Queen. All rights reserved.**
