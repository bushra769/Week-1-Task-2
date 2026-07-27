const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    description: "Premium sound quality with long battery life."
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$149",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    description: "Track your fitness and notifications easily."
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "$59",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600",
    description: "High precision RGB gaming mouse."
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: "$79",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600",
    description: "Powerful bass with crystal clear sound."
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Product Cards
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-5">
              <h2 className="text-xl font-bold">{product.name}</h2>

              <p className="text-gray-600 mt-2 text-sm">
                {product.description}
              </p>

              <div className="flex justify-between items-center mt-5">
                <span className="text-2xl font-bold text-purple-600">
                  {product.price}
                </span>

                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;