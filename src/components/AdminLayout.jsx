import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1">
        <AdminNavbar />
        <div className="p-8">{children}</div>
      </div>

    </div>
  );
}
