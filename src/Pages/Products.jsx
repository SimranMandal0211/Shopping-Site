export default function Products() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-8">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Products</h1>
          <p className="text-gray-600 text-lg mb-8">Welcome to our products page</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product cards placeholder */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-gray-200 h-40 rounded-lg mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Product 1</h3>
              <p className="text-gray-600 mb-4">Product description goes here</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-200 w-full">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
