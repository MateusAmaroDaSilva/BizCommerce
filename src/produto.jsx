import { useState } from "react";
import "./produto.css";

const initialProducts = [
  { id: 1, name: "Tênis da Nike", price: 60.9, cost: 55.45 },
  { id: 2, name: "Tênis da Adidas", price: 660.9, cost: 55.45 },
  { id: 3, name: "Toca da Nike", price: 760.9, cost: 55.45 },
  { id: 4, name: "Camisa Loud", price: 150.0, cost: 85.0 },
  { id: 5, name: "Camisa Corinthians", price: 350.0, cost: 180.0 },
  { id: 6, name: "Calça Nike", price: 284.0, cost: 155.45 },
];

const Produto = () => {
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
          <img src="./img/logobiz.png" alt="" />
          <h3>biz.erp</h3>
        </div>
        <ul className="menu">
          <li><a href="#"><img src="./img/Home.png" alt="" />Dashboard</a></li>
          <li><a href="#"><img src="./img/Category.png" alt="" /> Produtos</a></li>
          <li><a href="#"><img src="./img/Bag.png" alt="" /> Relatórios</a></li>
          <li><a href="#"><img src="./img/Document.png" alt="" /> Vendas</a></li>
          <li><a href="#"><img src="./img/Setting.png" alt="" /> Settings</a></li>
        </ul>
        <div className="logout">
          <a href="#"><img src="./img/logout.png" alt="" /> Logout</a>
        </div>
      </nav>

      <main className="content">
      <header className="header-container">
          <div className="user-info">
            <span>mãe do Vitin123</span>
            <img className="avatar" src="#" alt="Avatar" />
          </div>
        </header>

        {/* Adicionando o container com margem escura */}
        <div className="table-container">
        <h1 className="table-title">Produtos</h1>

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
                      <button className="action-button view-button" onClick={() => viewProduct(product.id)}><img src="./img/olho.png" alt="" /></button>
                      <button className="action-button edit-button" onClick={() => editProduct(product.id)}><img src="./img/lapis.png" alt="" /></button>
                      <button className="action-button delete-button" onClick={() => deleteProduct(product.id)}><img src="./img/lixo.png" alt="" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Produto;