export default function Nav() {
  return (
    <nav className="bg-gray-800 text-white p-3">
      <ul className="flex gap-6 justify-center">
        <li><a href="/" className="hover:text-gray-400">Dashboard</a></li>
        <li><a href="/orders" className="hover:text-gray-400">Orders</a></li>
        <li><a href="/cart" className="hover:text-gray-400">Cart</a></li>
      </ul>
    </nav>
  );
}
