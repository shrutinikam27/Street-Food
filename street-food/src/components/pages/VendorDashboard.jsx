
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaChartLine, FaClipboardList, FaTruck, FaSearch, FaShoppingCart, FaFilter, FaArrowLeft } from 'react-icons/fa';

const VendorDashboard = () => {
    const [activePage, setActivePage] = useState('dashboard');
    const [activeOrder, setActiveOrder] = useState(null);
    const [priceFilter, setPriceFilter] = useState('all');

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Dashboard Header */}
            <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                            <FaShoppingCart className="text-white" />
                        </div>
                        <span className="text-xl font-bold">Vendor Dashboard</span>
                    </div>

                    <div className="hidden md:flex gap-8">
                        {['Dashboard', 'Suppliers', 'Orders', 'Tracking'].map((item) => (
                            <button
                                key={item}
                                className={`font-medium transition-all duration-300 relative group py-2 ${activePage === item.toLowerCase()
                                    ? 'text-white font-bold'
                                    : 'text-orange-100 hover:text-white'
                                    }`}
                                onClick={() => setActivePage(item.toLowerCase())}
                            >
                                {item}
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full ${activePage === item.toLowerCase() ? 'w-full' : ''
                                    }`}></span>
                            </button>
                        ))}
                    </div>

                    <div className="flex gap-3 items-center">
                        <div className="bg-white/20 rounded-full px-4 py-1 text-sm">
                            Rajesh Kumar
                        </div>
                    </div>
                </div>
            </header>

            {/* Dashboard Navigation for Mobile */}
            <div className="md:hidden bg-white shadow">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between py-3">
                        {['Dashboard', 'Suppliers', 'Orders', 'Tracking'].map((item) => (
                            <button
                                key={item}
                                className={`px-3 py-2 rounded-lg text-sm font-medium ${activePage === item.toLowerCase()
                                    ? 'bg-orange-100 text-orange-600'
                                    : 'text-gray-600 hover:text-orange-500'
                                    }`}
                                onClick={() => setActivePage(item.toLowerCase())}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Dashboard Content */}
            <main className="container mx-auto px-4 py-8">
                {/* Dashboard Overview */}
                {activePage === 'dashboard' && (
                    <div>
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to Your Dashboard</h1>
                            <p className="text-gray-600">Manage your supplies, track orders, and find suppliers</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <DashboardCard
                                icon={<FaMapMarkerAlt className="text-2xl text-orange-500" />}
                                title="Nearby Suppliers"
                                value="28"
                                description="Verified suppliers near you"
                                onClick={() => setActivePage('suppliers')}
                            />
                            <DashboardCard
                                icon={<FaChartLine className="text-2xl text-orange-500" />}
                                title="Price Comparison"
                                value="12%"
                                description="Average savings"
                                onClick={() => setActivePage('price')}
                            />
                            <DashboardCard
                                icon={<FaClipboardList className="text-2xl text-orange-500" />}
                                title="Active Orders"
                                value="7"
                                description="In progress"
                                onClick={() => setActivePage('orders')}
                            />
                            <DashboardCard
                                icon={<FaTruck className="text-2xl text-orange-500" />}
                                title="Deliveries Today"
                                value="3"
                                description="Scheduled"
                                onClick={() => setActivePage('tracking')}
                            />
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Orders</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {recentOrders.map((order, index) => (
                                            <tr key={index} className="hover:bg-gray-50 cursor-pointer" onClick={() => setActiveOrder(order)}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{order.id}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.supplier}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.items} items</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                                        order.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                                                            'bg-yellow-100 text-yellow-800'
                                                        }`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{order.amount}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* Nearby Suppliers Page */}
                {activePage === 'suppliers' && (
                    <div>
                        <div className="flex items-center mb-6">
                            <button
                                className="mr-4 text-orange-500 hover:text-orange-600"
                                onClick={() => setActivePage('dashboard')}
                            >
                                <FaArrowLeft className="text-xl" />
                            </button>
                            <h1 className="text-3xl font-bold text-gray-800">Nearby Suppliers</h1>
                        </div>

                        <p className="text-gray-600 mb-8 max-w-3xl">
                            Interactive map showing verified suppliers in your area with distance and ratings.
                        </p>

                        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                                <div className="relative w-full max-w-md">
                                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search suppliers by name or product..."
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                                    />
                                </div>
                                <button className="ml-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 flex items-center">
                                    <FaFilter className="mr-2" /> Filter
                                </button>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-col lg:flex-row gap-8">
                                    {/* Map Placeholder */}
                                    <div className="lg:w-2/3 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center relative">
                                        <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-lg shadow-lg">
                                            <h3 className="font-bold">Your Location</h3>
                                            <p className="text-sm text-gray-600">Mumbai Central</p>
                                        </div>

                                        {/* Supplier Markers */}
                                        {suppliers.map((supplier, index) => (
                                            <div
                                                key={index}
                                                className={`absolute ${supplier.position} w-8 h-8 bg-white rounded-full border-2 border-orange-500 flex items-center justify-center cursor-pointer transform hover:scale-125 transition-transform`}
                                            >
                                                <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white shadow-lg px-3 py-1 rounded-lg whitespace-nowrap hidden group-hover:block">
                                                    {supplier.name}
                                                </div>
                                            </div>
                                        ))}

                                        <div className="text-center">
                                            <h3 className="text-xl font-bold text-gray-700 mb-2">Supplier Map</h3>
                                            <p className="text-gray-600">Interactive map showing nearby suppliers</p>
                                        </div>
                                    </div>

                                    {/* Supplier List */}
                                    <div className="lg:w-1/3">
                                        <h3 className="text-lg font-bold text-gray-800 mb-4">Nearby Suppliers (8)</h3>
                                        <div className="space-y-4 max-h-[30rem] overflow-y-auto pr-2">
                                            {suppliers.map((supplier, index) => (
                                                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h4 className="font-bold text-gray-800">{supplier.name}</h4>
                                                            <div className="flex items-center text-sm text-gray-600 mt-1">
                                                                <FaMapMarkerAlt className="text-orange-500 mr-1" />
                                                                <span>{supplier.distance} km • {supplier.rating}</span>
                                                                <div className="flex text-yellow-400 ml-2">
                                                                    {[...Array(5)].map((_, i) => (
                                                                        <FaStar key={i} className={`w-3 h-3 ${i < Math.floor(supplier.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                                            Verified
                                                        </span>
                                                    </div>
                                                    <div className="mt-3">
                                                        <p className="text-sm text-gray-700 mb-2">Specializes in: {supplier.specialties.join(', ')}</p>
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-sm font-medium">Delivery: {supplier.deliveryTime}</span>
                                                            <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                                                                View Products
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Price Comparison Page */}
                {activePage === 'price' && (
                    <div>
                        <div className="flex items-center mb-6">
                            <button
                                className="mr-4 text-orange-500 hover:text-orange-600"
                                onClick={() => setActivePage('dashboard')}
                            >
                                <FaArrowLeft className="text-xl" />
                            </button>
                            <h1 className="text-3xl font-bold text-gray-800">Price Comparison</h1>
                        </div>

                        <p className="text-gray-600 mb-8 max-w-3xl">
                            Compare prices for ingredients across suppliers with historical trends.
                        </p>

                        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                            <div className="flex flex-wrap gap-4 mb-6">
                                <button
                                    className={`px-4 py-2 rounded-lg ${priceFilter === 'all'
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    onClick={() => setPriceFilter('all')}
                                >
                                    All Items
                                </button>
                                <button
                                    className={`px-4 py-2 rounded-lg ${priceFilter === 'vegetables'
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    onClick={() => setPriceFilter('vegetables')}
                                >
                                    Vegetables
                                </button>
                                <button
                                    className={`px-4 py-2 rounded-lg ${priceFilter === 'spices'
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    onClick={() => setPriceFilter('spices')}
                                >
                                    Spices
                                </button>
                                <button
                                    className={`px-4 py-2 rounded-lg ${priceFilter === 'dairy'
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    onClick={() => setPriceFilter('dairy')}
                                >
                                    Dairy
                                </button>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Price Comparison Chart */}
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-gray-800 mb-4">Price Trends for Tomatoes</h3>
                                    <div className="h-72 flex items-end justify-between">
                                        {priceData.map((data, index) => (
                                            <div key={index} className="flex flex-col items-center w-16">
                                                <div className="flex flex-col items-center mb-2">
                                                    <div
                                                        className="w-10 bg-gradient-to-t from-orange-400 to-orange-600 rounded-t"
                                                        style={{ height: `${data.value * 4}px` }}
                                                    ></div>
                                                    <span className="text-xs text-gray-600 mt-1">₹{data.value}</span>
                                                </div>
                                                <span className="text-xs text-gray-500">{data.supplier}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
                                        {priceData.map((data, index) => (
                                            <div key={index} className="text-center">
                                                <span className="text-xs text-gray-500">{data.date}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Supplier Price Table */}
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-4">Current Prices (per kg)</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fresh Agro</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mumbai Spice</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delhi Mills</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best Price</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {products.map((product, index) => (
                                                    <tr key={index} className="hover:bg-gray-50">
                                                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">₹{product.prices[0]}</td>
                                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">₹{product.prices[1]}</td>
                                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">₹{product.prices[2]}</td>
                                                        <td className="px-4 py-3 whitespace-nowrap">
                                                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                                                ₹{Math.min(...product.prices)}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Order Management Page */}
                {activePage === 'orders' && (
                    <div>
                        <div className="flex items-center mb-6">
                            <button
                                className="mr-4 text-orange-500 hover:text-orange-600"
                                onClick={() => setActivePage('dashboard')}
                            >
                                <FaArrowLeft className="text-xl" />
                            </button>
                            <h1 className="text-3xl font-bold text-gray-800">Order Management</h1>
                        </div>

                        <p className="text-gray-600 mb-8 max-w-3xl">
                            View current, past, and upcoming orders with detailed status tracking.
                        </p>

                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="p-4 border-b border-gray-200">
                                <div className="flex flex-wrap gap-4">
                                    <button className="px-4 py-2 bg-orange-500 text-white rounded-lg">All Orders</button>
                                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">Pending</button>
                                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">In Transit</button>
                                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">Delivered</button>
                                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">Cancelled</button>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {orders.map((order, index) => (
                                                <tr key={index} className="hover:bg-gray-50">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{order.id}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.supplier}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.items}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                                            order.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                                                                'bg-yellow-100 text-yellow-800'
                                                            }`}>
                                                            {order.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{order.amount}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                        <button
                                                            className="text-orange-600 hover:text-orange-900"
                                                            onClick={() => setActiveOrder(order)}
                                                        >
                                                            View Details
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Delivery Tracking Page */}
                {activePage === 'tracking' && (
                    <div>
                        <div className="flex items-center mb-6">
                            <button
                                className="mr-4 text-orange-500 hover:text-orange-600"
                                onClick={() => setActivePage('dashboard')}
                            >
                                <FaArrowLeft className="text-xl" />
                            </button>
                            <h1 className="text-3xl font-bold text-gray-800">Delivery Tracking</h1>
                        </div>

                        <p className="text-gray-600 mb-8 max-w-3xl">
                            Real-time tracking of your orders with live location updates.
                        </p>

                        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                            <div className="p-6">
                                <div className="flex flex-col lg:flex-row gap-8">
                                    {/* Map Tracking */}
                                    <div className="lg:w-2/3 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center relative">
                                        <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-lg shadow-lg">
                                            <h3 className="font-bold">Your Location</h3>
                                            <p className="text-sm text-gray-600">Mumbai Central</p>
                                        </div>

                                        {/* Delivery Route */}
                                        <div className="absolute w-80 h-48 border-2 border-dashed border-orange-500 rounded-lg"></div>

                                        {/* Delivery Points */}
                                        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                                            <div className="w-8 h-8 bg-white rounded-full border-2 border-green-500 flex items-center justify-center">
                                                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                                            </div>
                                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white shadow-lg px-3 py-1 rounded-lg whitespace-nowrap">
                                                Supplier
                                            </div>
                                        </div>

                                        <div className="absolute bottom-1/3 right-1/3 transform translate-x-1/2 translate-y-1/2">
                                            <div className="w-8 h-8 bg-white rounded-full border-2 border-orange-500 flex items-center justify-center animate-pulse">
                                                <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                                            </div>
                                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white shadow-lg px-3 py-1 rounded-lg whitespace-nowrap">
                                                Order #7894
                                            </div>
                                        </div>

                                        <div className="absolute bottom-1/4 left-3/4 transform -translate-x-1/2 translate-y-1/2">
                                            <div className="w-8 h-8 bg-white rounded-full border-2 border-blue-500 flex items-center justify-center">
                                                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                                            </div>
                                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white shadow-lg px-3 py-1 rounded-lg whitespace-nowrap">
                                                Your Location
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <h3 className="text-xl font-bold text-gray-700 mb-2">Live Order Tracking</h3>
                                            <p className="text-gray-600">Order #7894 is on its way to you</p>
                                        </div>
                                    </div>

                                    {/* Delivery Details */}
                                    <div className="lg:w-1/3">
                                        <div className="bg-orange-50 rounded-lg p-4 mb-6">
                                            <h3 className="font-bold text-gray-800 mb-2">Order #7894</h3>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-gray-600">Status:</span>
                                                <span className="font-medium text-orange-600">In Transit</span>
                                            </div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-gray-600">Supplier:</span>
                                                <span className="font-medium">Fresh Agro Products</span>
                                            </div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-gray-600">Estimated Arrival:</span>
                                                <span className="font-medium">10:45 AM</span>
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-800 mb-4">Delivery Progress</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-start">
                                                <div className="mr-3 mt-1">
                                                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                                                        <FaCheck className="text-white text-xs" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-800">Order Confirmed</h4>
                                                    <p className="text-sm text-gray-600">Today, 8:30 AM</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <div className="mr-3 mt-1">
                                                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                                                        <FaCheck className="text-white text-xs" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-800">Picked Up</h4>
                                                    <p className="text-sm text-gray-600">Today, 9:15 AM</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <div className="mr-3 mt-1">
                                                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                                                        <div className="w-2 h-2 rounded-full bg-white"></div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-800">In Transit</h4>
                                                    <p className="text-sm text-gray-600">Expected 10:45 AM</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <div className="mr-3 mt-1">
                                                    <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-800">Delivered</h4>
                                                    <p className="text-sm text-gray-600">Not yet delivered</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            {/* Order Detail Modal */}
            {activeOrder && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-800">Order #{activeOrder.id}</h2>
                            <button
                                className="text-gray-500 hover:text-gray-700"
                                onClick={() => setActiveOrder(null)}
                            >
                                <FaTimes className="text-xl" />
                            </button>
                        </div>

                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800 mb-4">Order Details</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Order Date:</span>
                                            <span className="font-medium">{activeOrder.date}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Supplier:</span>
                                            <span className="font-medium">{activeOrder.supplier}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Status:</span>
                                            <span className={`font-medium ${activeOrder.status === 'Delivered' ? 'text-green-600' :
                                                activeOrder.status === 'In Transit' ? 'text-blue-600' :
                                                    'text-orange-600'
                                                }`}>
                                                {activeOrder.status}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Total Amount:</span>
                                            <span className="font-medium">₹{activeOrder.amount}</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium text-gray-800 mb-4">Delivery Information</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Delivery Address:</span>
                                            <span className="font-medium text-right">123 Street Food Corner, Mumbai Central</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Contact:</span>
                                            <span className="font-medium">Rajesh Kumar (9876543210)</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Estimated Delivery:</span>
                                            <span className="font-medium">Today, 11:30 AM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-lg font-medium text-gray-800 mb-4">Order Items</h3>
                            <div className="overflow-x-auto mb-8">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {activeOrder.items.map((item, index) => (
                                            <tr key={index}>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{item.quantity} kg</td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">₹{item.price}</td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">₹{item.quantity * item.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="flex justify-end">
                                <div className="w-full md:w-1/3">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-600">Subtotal:</span>
                                        <span className="font-medium">₹{activeOrder.amount - 50}</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-600">Delivery Fee:</span>
                                        <span className="font-medium">₹50</span>
                                    </div>
                                    <div className="flex justify-between mb-4 pt-2 border-t border-gray-200">
                                        <span className="text-gray-800 font-bold">Total:</span>
                                        <span className="text-gray-800 font-bold">₹{activeOrder.amount}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border-t border-gray-200 flex justify-end gap-4">
                            <button
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                                onClick={() => setActiveOrder(null)}
                            >
                                Close
                            </button>
                            <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                                Contact Supplier
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// Reusable Components
const DashboardCard = ({ icon, title, value, description, onClick }) => (
    <div
        className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border border-orange-100"
        onClick={onClick}
    >
        <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mr-4">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                <p className="text-2xl font-bold text-orange-600">{value}</p>
            </div>
        </div>
        <p className="text-gray-600">{description}</p>
    </div>
);

// Mock Data
const recentOrders = [
    { id: 7894, supplier: 'Fresh Agro Products', items: 8, status: 'In Transit', amount: 2450 },
    { id: 7893, supplier: 'Mumbai Spice House', items: 5, status: 'Delivered', amount: 1875 },
    { id: 7892, supplier: 'Delhi Flour Mills', items: 3, status: 'Delivered', amount: 1560 },
    { id: 7891, supplier: 'Bangalore Meat Suppliers', items: 6, status: 'Delivered', amount: 3250 },
];

const suppliers = [
    { name: 'Fresh Agro Products', distance: '1.2', rating: 4.7, specialties: ['Vegetables', 'Fruits'], deliveryTime: '1-2 hours', position: 'top-1/4 left-1/4' },
    { name: 'Mumbai Spice House', distance: '0.8', rating: 4.9, specialties: ['Spices', 'Oil'], deliveryTime: 'Same day', position: 'top-1/3 left-1/2' },
    { name: 'Delhi Flour Mills', distance: '2.5', rating: 4.5, specialties: ['Flour', 'Grains'], deliveryTime: 'Next morning', position: 'top-1/2 left-2/3' },
    { name: 'Bangalore Meat Suppliers', distance: '3.1', rating: 4.8, specialties: ['Chicken', 'Mutton'], deliveryTime: '2-3 hours', position: 'bottom-1/4 right-1/4' },
];

const priceData = [
    { date: 'Mon', value: 42, supplier: 'Fresh Agro' },
    { date: 'Tue', value: 38, supplier: 'Mumbai Spice' },
    { date: 'Wed', value: 40, supplier: 'Delhi Mills' },
    { date: 'Thu', value: 35, supplier: 'Fresh Agro' },
    { date: 'Fri', value: 37, supplier: 'Mumbai Spice' },
    { date: 'Sat', value: 36, supplier: 'Delhi Mills' },
    { date: 'Sun', value: 34, supplier: 'Fresh Agro' },
];

const products = [
    { name: 'Tomatoes', prices: [42, 45, 40] },
    { name: 'Onions', prices: [30, 32, 28] },
    { name: 'Potatoes', prices: [25, 28, 22] },
    { name: 'Chicken', prices: [180, 175, 185] },
    { name: 'Wheat Flour', prices: [50, 48, 52] },
    { name: 'Cooking Oil', prices: [160, 165, 155] },
];

const orders = [
    { id: 7894, supplier: 'Fresh Agro Products', date: 'Today, 8:30 AM', items: 8, status: 'In Transit', amount: 2450 },
    { id: 7893, supplier: 'Mumbai Spice House', date: 'Yesterday', items: 5, status: 'Delivered', amount: 1875 },
    { id: 7892, supplier: 'Delhi Flour Mills', date: 'Oct 12', items: 3, status: 'Delivered', amount: 1560 },
    { id: 7891, supplier: 'Bangalore Meat Suppliers', date: 'Oct 10', items: 6, status: 'Delivered', amount: 3250 },
    { id: 7890, supplier: 'Premium Vegetables', date: 'Oct 9', items: 4, status: 'Delivered', amount: 1420 },
];

// Small helper component for checkmark
const FaCheck = () => (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

// Small helper component for star
const FaStar = () => (
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
);

// Small helper component for close icon
const FaTimes = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
);

export default VendorDashboard;