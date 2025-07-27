import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/pages/homepage.jsx'
import FindSuppliers from './components/pages/FindSupplier.jsx';
import BecomeSupplier from './components/pages/BecomeSupplier.jsx';
import VendorDashboard from './components/pages/VendorDashboard.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/find-suppliers" element={<FindSuppliers />} />
        <Route path="/become-supplier" element={<BecomeSupplier />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
