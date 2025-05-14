import { useState } from "react";
import "./produto.css";

const initialProducts = [
  { id: 1, name: "Tênis da Nike", price: 60.9, cost: 55.45 },
  { id: 2, name: "Tênis da Adidas", price: 660.9, cost: 55.45 },
  { id: 3, name: "Toca da Nike", price: 760.9, cost: 55.45 },
  { id: 4, name: "Camisa Loud", price: 150.0, cost: 85.0 },
  { id: 5, name: "Camisa Corinthians", price: 350.0, cost: 180.0 },
  { id: 6, name: "Calça Nike", price: 284.0, cost: 155.45 },
  { id: 7, name: "Blusa de frio", price: 245.0, cost: 122.45 },
];

const Produto = () => {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false); 

  return (
    <div className="container">
      <nav className="sidebar">
        <div className="logo">
          <img src="./img/logobiz.png" alt="" />
          <h3>biz.erp</h3>
        </div>
        <ul className="menu">
          <li><a href="#"><img src="./img/Home.png" alt="" /><span>Dashboard</span></a></li>
          <li><a href="#"><img src="./img/Category.png" alt="" /> <span>Produtos</span></a></li>
          <li><a href="#"><img src="./img/Document.png" alt="" /> <span>Relatórios</span></a></li>
          <li><a href="#"><img src="./img/Bag.png" alt="" /> <span>Vendas</span></a></li>
        </ul>
        <div className="logout">
          <a href="#"><img src="./img/logout.png" alt="" /> Logout</a>
        </div>
      </nav>
      
      <main className="content">
      <header className="header-container">
          <div className="user-info">
            <span>Daniel</span>
            <img className="avatar" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop" alt="Avatar" />
          </div>
        </header>


        <div className="table-container">
        <h1 className="table-title">Produtos</h1>

        <div className="search-bar">
          <input
            id="searchInput"
            type="text"
            placeholder="Pesquisar por produto..."
            value={searchTerm}
            onChange={handleSearch}
          />

            <button className="ean-button" onClick={openModal}>
              <img src="./img/codegobarra.png" alt="EAN" className="ean-icon" />
              Adicionar por EAN
            </button>

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

      {isModalOpen && (
  <div className="modal-overlay">
    <div className="modal">
      <button className="close-btn" onClick={closeModal}>×</button>
      <h2 className="modal-title"><img src="./img/codegobarrasroxa.png" alt="" /> Cadastro por código EAN</h2>
      <p className="modal-subtitle">Insira o código de barras para buscar ou cadastrar um produto</p>

      <div className="input-wrapper">
        <span className="input-icon"><img src="./img/codegobarrasgrande.png" alt="" /></span>
        <input type="text" placeholder="Digite o código EAN" className="modal-input" />
      </div>

      <div className="modal-description">
        Insira o código de barras (EAN) do produto para cadastrá-lo rapidamente no sistema. Após a busca, você será <br /> redirecionado para o formulário de cadastro.
      </div>

      <button className="add-btn">Adicionar</button>
    </div>
  </div>
)}
    </div>
  );
};

export default Produto;