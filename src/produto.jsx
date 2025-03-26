import { useState } from "react";
import "./produto.css";

const initialProducts = [
  { id: 1, name: "Tênis da Nike", price: 60.9, cost: 55.45 },
  { id: 17, name: "Tênis da Adidas", price: 660.9, cost: 55.45 },
  { id: 39, name: "Boné", price: 760.9, cost: 55.45 },
];

const Dashboard = () => {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const formatPrice = (price) => price.toFixed(2);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  const viewProduct = (id) => alert(`Visualizar produto ${id}`);
  const editProduct = (id) => alert(`Editar produto ${id}`);
  const deleteProduct = (id) => alert(`Deletar produto ${id}`);

  return (
    <div className="container">
      <nav className="sidebar">
        <div className="logo">
          <h2>biz.erp</h2>
        </div>
        <ul className="menu">
          <li className="active"><a href="#">🏠 Dashboard</a></li>
          <li><a href="#">📦 Produtos</a></li>
          <li><a href="#">📊 Relatórios</a></li>
          <li><a href="#">💰 Vendas</a></li>
          <li><a href="#">⚙️ Settings</a></li>
        </ul>
        <div className="logout">
          <a href="#">🚪 Logout</a>
        </div>
      </nav>

      <main className="content">
        <header>
          <h1>Produtos</h1>
          <div className="user-info">
            <span>Calobreso Silva</span>
            <img src="https://via.placeholder.com/40" alt="User" className="avatar" />
          </div>
        </header>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Pesquisar por produto..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="add-button">Adicionar</button>
        </div>

        <table className="products-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Produto</th>
              <th>Preço</th>
              <th>Custo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{formatPrice(product.price)}</td>
                <td>{formatPrice(product.cost)}</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-button" onClick={() => viewProduct(product.id)}>👁️</button>
                    <button className="action-button" onClick={() => editProduct(product.id)}>✏️</button>
                    <button className="action-button" onClick={() => deleteProduct(product.id)}>🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Dashboard;
