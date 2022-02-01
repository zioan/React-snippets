const products = [
  { name: "product1", price: 100.0 },
  { name: "product2", price: 200.0 },
  { name: "product3", price: 300.0 },
];

function App() {
  return (
    <div className="app">
      <h1>Re-Store</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
