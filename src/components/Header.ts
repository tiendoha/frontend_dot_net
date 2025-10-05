export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">🛒 MyShop</h1>
      <nav>
        <ul className="flex gap-6">
          <li><a href="/" className="hover:text-gray-200">Home</a></li>
          <li><a href="/products" className="hover:text-gray-200">Products</a></li>
          <li><a href="/about" className="hover:text-gray-200">About</a></li>
          <li><a href="/contact" className="hover:text-gray-200">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
