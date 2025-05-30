import { useState } from "react";
import "./vendas.css";

const initialProducts = [
  { id: 1, date: "20/10/2025", client: "Cláudio Reis", price: 60.90, cost: 55.45 },
  { id: 17, date: "20/10/2025", client: "Vitor Henrique", price: 660.90, cost: 55.45 },
  { id: 39, date: "20/10/2025", client: "Mateus Amaro", price: 760.90, cost: 55.45 },
  { id: 39, date: "20/10/2025", client: "Thiago", price: 760.90, cost: 55.45 },
  { id: 17, date: "20/10/2025", client: "Miguel", price: 660.90, cost: 55.45 },
  { id: 39, date: "20/10/2025", client: "Jeann", price: 760.90, cost: 55.45 },
];

const Vendas = () => {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const formatPrice = (price) => price.toFixed(2);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.date.toLowerCase().includes(searchTerm)
  );

  const viewProduct = (id) => alert(`Visualizar produto ${id}`);
  const editProduct = (id) => alert(`Editar produto ${id}`);
  const deleteProduct = (id) => alert(`Deletar produto ${id}`);
  const addSale = (id) => alert(`Adicionar venda ${id}`);
  const addexport = (id) => alert(`Exportar ${id}`);

  return (
    <div className="container">
      <nav className="sidebar">
        <div className="logo">
          <img src="/img/logobiz.png" alt="" />
          <h3>biz.erp</h3>
        </div>
        <ul className="menu">
          <li><a href="./dashboard.jsx"><img src="/img/Home.png" alt="" /><span>Dashboard</span></a></li>
          <li><a href="./produto.jsx"><img src="/img/Category.png" alt="" /> <span>Produtos</span></a></li>
          <li><a href="#"><img src="/img/Document.png" alt="" /> <span>Relatórios</span></a></li>
          <li><a href="./vendas.jsx"><img src="/img/Bag.png" alt="" /> <span>Vendas</span></a></li>
        </ul>
        <div className="logout">
          <a href="#"><img src="/img/logout.png" alt="" /> Logout</a>
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
          <h1 className="table-title">Vendas</h1>

          <div className="top_buttons">
            <a href="#" target="_blank" rel="external">
              <button id="action_top_button" onClick={() => addSale()}>
                <p id="top_letter">Adicionar</p> 
                <img src="/img/icone_adicionar.png" alt="+" id="top_img" />
              </button>
            </a>
          </div>

          <div className="top_buttons_second">
            <a href="#" target="_blank" rel="external">
              <button id="action_top_button_second" onClick={() => addexport()}>
                <p id="top_letter">Exportar</p> 
                <img src="/img/icone_exportar.png" alt="Export" id="top_img_second" />
              </button>
            </a>
          </div>

          <div className="demonstrations">
            <thead>
              <tr>
                <th id="letters">Total de pedidos</th>
                <th id="numbers">R$123,67</th>
                <th id="percentage">+43%</th>
              </tr>
            </thead>
          </div>

          <div className="second_demonstration">
            <thead>
              <tr>
                <th id="second_letters">Número de vendas</th>
                <th id="second_numbers">1.206</th>
                <th id="second_percentage">+43%</th>
              </tr>
            </thead>

            <div className="third_demonstrations">
              <thead>
                <tr>
                  <th id="third_letters">Clientes</th>
                  <th id="third_numbers">12</th>
                  <th id="third_percentage">+4%</th>
                </tr>
              </thead>
            </div>
          </div>

          <div className="search-bar">
            <input
              id="searchInput"
              type="text"
              placeholder="Pesquisar por vendas..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <input 
              id="searchInput" 
              type="text" 
              placeholder="Filtro"  
            />
          </div>
          
          <div className="table-scroll-wrapper" id="scrollContainer">
            <table className="products-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Data</th>
                  <th>Cliente</th>
                  <th>Preço</th>
                  <th>Frete</th>
                  <th>Status</th>
                  <th>Pagamento</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.date}</td>
                    <td>{product.client}</td>
                    <td>{formatPrice(product.price)}</td>
                    <td>{formatPrice(product.cost)}</td>
                    <td>
                      <div className="status">
                        <th id="pay">Pago</th>
                        <th id="pendence">Pendente</th>
                        <th id="canceled">Cancelado</th>
                      </div>
                    </td>
                    <td>
                      <div className="pagamento">
                        <img className="pamento-cartao" src="/img/icone_master.png" alt="master" />
                        <img className="pagamento-pix" src="/img/icone_pix.png" alt="icone pix" />
                      </div>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button className="action-button view-button" onClick={() => viewProduct(product.id)}>
                          <img src="/img/olho.png" alt="" />
                        </button>
                        <button className="action-button edit-button" onClick={() => editProduct(product.id)}>
                          <img src="/img/lapis.png" alt="" />
                        </button>
                        <button className="action-button delete-button" onClick={() => deleteProduct(product.id)}>
                          <img src="/img/lixo.png" alt="" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Vendas;