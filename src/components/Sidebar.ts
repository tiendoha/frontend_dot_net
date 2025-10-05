export default function Sidebar() {
  return (
    <aside className="bg-gray-100 w-64 h-full p-4 shadow-md">
      <h2 className="font-bold text-lg mb-4">Categories</h2>
      <ul className="space-y-2">
        <li><a href="/category/electronics" className="block hover:text-blue-600">Electronics</a></li>
        <li><a href="/category/fashion" className="block hover:text-blue-600">Fashion</a></li>
        <li><a href="/category/home" className="block hover:text-blue-600">Home & Living</a></li>
        <li><a href="/category/sports" className="block hover:text-blue-600">Sports</a></li>
      </ul>
    </aside>
  );
}
