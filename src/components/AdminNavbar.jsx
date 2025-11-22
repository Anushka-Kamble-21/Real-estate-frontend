export default function AdminNavbar() {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <h2 className="text-xl font-semibold">Admin Panel</h2>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        Logout
      </button>
    </header>
  );
}
