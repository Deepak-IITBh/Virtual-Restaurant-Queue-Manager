import React, { useState, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoCheckmarkDone } from "react-icons/io5";
import { GiCookingPot } from "react-icons/gi";
import CardProduct from "./CardProduct";
import { Link, Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

// Mock data for development
const MOCK_MENUS = [
  {
    menu_id: 1,
    category: 'Appetizers',
    items: [
      { id: 1, name: 'Spring Rolls', price: 5.99, description: 'Crispy spring rolls with sweet and sour sauce' },
      { id: 2, name: 'Samosas', price: 4.99, description: 'Golden fried samosas with mint chutney' },
    ]
  },
  {
    menu_id: 2,
    category: 'Main Course',
    items: [
      { id: 3, name: 'Butter Chicken', price: 12.99, description: 'Creamy tomato-based chicken curry' },
      { id: 4, name: 'Biryani', price: 11.99, description: 'Fragrant rice dish with spices and meat' },
    ]
  },
  {
    menu_id: 3,
    category: 'Desserts',
    items: [
      { id: 5, name: 'Gulab Jamun', price: 3.99, description: 'Sweet milk solids in sugar syrup' },
      { id: 6, name: 'Kheer', price: 4.99, description: 'Creamy rice pudding with nuts' },
    ]
  },
];

const MOCK_QUEUE_STATS = {
  current_order: 5,
  total_orders: 12,
};

const Hero = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currOrder, setCurrOrder] = useState(0);
  const [totalOrder, setTotalOrder] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Try to fetch from backend first
        const response = await fetch('http://localhost:8000/menus', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          timeout: 3000,
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setMenus(data || []);
      } catch (err) {
        console.warn('Backend unavailable, using mock data:', err.message);
        // Use mock data as fallback
        setMenus(MOCK_MENUS);
        setError(null);
      } finally {
        setLoading(false);
      }
    };
    fetchMenus();
  }, []);

  useEffect(() => {
    const fetchOrderStats = async () => {
      try {
        const id = "67160abe55a2616c7124bb35";
        const response = await fetch(`http://localhost:8000/orders/queue/${id}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          timeout: 3000,
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setCurrOrder(data.current_order || 0);
        setTotalOrder(data.total_orders || 0);
      } catch (err) {
        console.warn('Using mock queue stats:', err.message);
        // Use mock data as fallback
        setCurrOrder(MOCK_QUEUE_STATS.current_order);
        setTotalOrder(MOCK_QUEUE_STATS.total_orders);
      }
    };
    fetchOrderStats();
  }, []);

  return (
    <div className="w-full bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-8">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <IoLocationOutline size={20} />
                <span className="text-sm">Serving at</span>
              </div>
              <p className="font-semibold text-lg">Near Hostel 1 IIT, Bhilai</p>
              <p className="text-orange-100 text-sm">Students' Residential Zone, Raipur</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <p className="text-xs text-orange-100 mb-1">Status</p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold">Open Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Showcase Images */}
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: 1, img: 'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?cs=srgb&dl=bread-color-copyspace-1565982.jpg&fm=jpg', name: 'Frontend-1' },
            { id: 2, img: 'https://as1.ftcdn.net/v2/jpg/02/39/34/00/1000_F_239340041_xs4iFQYuQKf5ZiLoi5TXJBjIluUyTD7H.jpg', name: 'Frontend-2' },
            { id: 3, img: 'https://cdn.grabon.in/gograbon/images/web-images/uploads/1618548899692/groceries-offers.jpg', name: 'Frontend-3' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(`/project/${item.name}`)}
              className="relative h-48 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <img
                src={item.img}
                alt={`Showcase ${item.id}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
            </button>
          ))}
        </div>
      </div>

      {/* Queue Stats */}
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Message */}
            <div className="md:w-1/3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">We Respect Your Time</h2>
              <p className="text-gray-600">Join our virtual queue and skip the wait. Get real-time updates on your order status.</p>
            </div>

            {/* Stats Cards */}
            <div className="md:w-2/3 grid grid-cols-2 gap-6 w-full">
              {/* Current Order */}
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl p-6 text-white shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-orange-100">Order Being Prepared</p>
                  <IoCheckmarkDone size={20} />
                </div>
                <p className="text-4xl md:text-5xl font-bold">{currOrder}</p>
              </div>

              {/* Total Orders */}
              <div className="bg-gradient-to-br from-red-400 to-red-600 rounded-xl p-6 text-white shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-red-100">Join Queue At Position</p>
                  <GiCookingPot size={20} />
                </div>
                <p className="text-4xl md:text-5xl font-bold">{totalOrder}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="bg-white py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GiCookingPot size={40} className="text-orange-600" />
              <h2 className="text-4xl font-bold text-gray-900">Our Menu</h2>
            </div>
            <p className="text-gray-600 text-lg">Explore our delicious selection of dishes</p>
          </div>

          {/* Menu Content */}
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-orange-200 border-t-orange-600 mb-4"></div>
                <p className="text-gray-600 font-medium">Loading menu...</p>
              </div>
            </div>
          ) : error ? (
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Error Loading Menu</h3>
                  <p className="mt-2 text-sm text-red-700">{error}</p>
                  <p className="mt-2 text-xs text-red-600">Make sure your backend server is running at http://localhost:8000</p>
                </div>
              </div>
            </div>
          ) : menus.length > 0 ? (
            <>
              {/* Category Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {menus.map((menu) => (
                  <Link
                    key={menu.menu_id}
                    to={menu.category}
                    smooth={true}
                    duration={500}
                    className="px-6 py-3 bg-orange-100 hover:bg-orange-600 text-orange-600 hover:text-white border border-orange-600 font-semibold rounded-lg transition-all duration-300 cursor-pointer"
                  >
                    {menu.category}
                  </Link>
                ))}
              </div>

              {/* Menu Items by Category */}
              {menus.map((menu) => (
                <Element key={menu.menu_id} name={menu.category}>
                  <CardProduct value={menu} />
                </Element>
              ))}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No menu items available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;