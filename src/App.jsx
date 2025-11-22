import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

// Public Pages
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import PropertyDetail from "./pages/PropertyDetail";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/projects/ProjectDetail";
import About from "./pages/About";
import Inquiry from "./pages/Inquiry";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Properties from "./pages/admin/Properties";
import AddProperty from "./pages/admin/AddProperty";
import Inquiries from "./pages/admin/Inquiries";

// Admin Layout
import AdminLayout from "./components/AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ---------- PUBLIC ROUTES ---------- */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/listings" element={<MainLayout><Listings /></MainLayout>} />
        <Route path="/property/:id" element={<MainLayout><PropertyDetail /></MainLayout>} />
        <Route path="/projects" element={<MainLayout><Projects /></MainLayout>} />
        <Route path="/projects/:id" element={<MainLayout><ProjectDetail /></MainLayout>} />
        <Route path="/inquiry" element={<MainLayout><Inquiry /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />

        {/* ---------- ADMIN LOGIN ---------- */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ---------- ADMIN DASHBOARD ROUTES (Protected UI) ---------- */}
        <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
        <Route path="/admin/properties" element={<AdminLayout><Properties /></AdminLayout>} />
        <Route path="/admin/properties/add" element={<AdminLayout><AddProperty /></AdminLayout>} />
        <Route path="/admin/inquiries" element={<AdminLayout><Inquiries /></AdminLayout>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
