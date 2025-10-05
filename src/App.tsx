import Header from "./components/Header";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Nav */}
      <Nav />

      {/* Main content with sidebar */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Content area */}
        <main className="flex-1 p-6 bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">Welcome to MyShop</h2>
          <p className="text-gray-700">
            Đây là khu vực nội dung chính. Bạn có thể thêm danh sách sản phẩm, 
            chi tiết sản phẩm hoặc giỏ hàng vào đây.
          </p>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
