import { useState } from "react";
import { useEffect } from "react";
import { listProduct, postProductEan, deleteProduct } from "./services/productAPI";
import { initialProducts } from "./services/productsInitial";
import "./produto.css";
import { Link, useNavigate } from "react-router-dom";


<<<<<<< HEAD


/*const initialProducts = [
  { id: 1, name: "Tênis da Nike", price: 60.9, cost: 55.45 },
  { id: 2, name: "Tênis da Adidas", price: 660.9, cost: 55.45 },
  { id: 3, name: "Toca da Nike", price: 760.9, cost: 55.45 },
  { id: 5, name: "Camisa da LOUD", price: 350.0, cost: 180.0 },
  { id: 6, name: "Calça Nike", price: 284.0, cost: 155.45 },
<<<<<<< HEAD
  { id: 7, name: "Bota de Frio", price: 245.0, cost: 122.45 },
  { id: 8, name: "Blusa de frio", price: 245.0, cost: 122.45 },
  { id: 9, name: "luvas", price: 245.0, cost: 122.45 },
];

const Produto = () => {
  

  const [products, setProducts] = useState(initialProducts);
=======
  { id: 7, name: "Blusa de frio", price: 245.0, cost: 122.45 },
];*/

const Produto = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
=======
const Produto = () => { 
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigator = useNavigate();
>>>>>>> 56e04d10b89bbe1160046689791e2cc85e249409

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [confirmationText, setConfirmationText] = useState("");

  const token = localStorage.getItem("token");

  //Valida usuário Logado
<<<<<<< HEAD
  useEffect(() => {
    if (!token || token == null) {
      navigate("/")
    }
  }, []);
=======
  // useEffect(() => {
  //   if (!token || token == null) {
  //     navigator("/")
  //   }
  // }, []);
>>>>>>> 56e04d10b89bbe1160046689791e2cc85e249409

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await listProduct(token);
  
        if (response.status === 200) {
          const data = await response.json();
          setProducts(data.data);
        } else {
          throw new Error("Erro ao carregar da API");
        }
      } catch (error) {
        console.warn("Erro ao buscar da API, carregando dados locais...");
  
        setProducts(initialProducts().data)
      }
    };
  
    fetchProducts();
  }, [token]);
  

  console.log(products);

//  const formatPrice = (price) => price.toFixed(2);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    (product?.name || "Produto sem Nome").toLowerCase().includes(searchTerm)
  );

  const viewProduct = (id) => alert(`Visualizar produto ${id}`);
<<<<<<< HEAD
  const editProduct = (id) => navigate(`/cadastro-produto/${id}`);
=======
  const editProduct = (id) => navigator(`/cadastro-produto/${id}`);
>>>>>>> 56e04d10b89bbe1160046689791e2cc85e249409

  //const deleteProduct = (id) => alert(`Deletar produto ${id}`);


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false); 

  const handleDeleteClick = (product) => {
    setProductToDelete(product);
    setIsDeleteModalOpen(true);
    setConfirmationText("");
  };  
  
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setProductToDelete(null);
    setConfirmationText("");
  };
  
  const confirmDelete = () => {
    if (confirmationText === "CONFIRMAR" && productToDelete) {    
      setProducts(products.filter(p => p.id !== productToDelete.id));

      console.log(productToDelete.id)
      console.log(token)
      deleteProduct(token, productToDelete.id)
        .then(response => {
          if (response.status === 200) {
            alert('Produto excluído com sucesso'); // Ou setar erro no estado
            closeDeleteModal();
          } else {
            alert('Falha ao excluír Produto'); // Ou setar erro no estado
          }
        });
      
    }
  };  

  //Função de Logout
  const handleAddProductEan = async (e) => {
    const codigoEan = document.querySelector('input[name="codigoEan"]').value;
  
    const requestBody = {
      "ean": codigoEan // Corrigido o nome do campo
    };
  
    const result = await postProductEan(token, requestBody);
    if (result.status === 200) {
      alert('Cadastro com Sucesso'); // Ou setar erro no estado
    } else {
      alert('Falha ao Cadastrar Produto'); // Ou setar erro no estado
    }
  };

  //Função de Logout
  const handleLogout = async (e) => {
    e.preventDefault();
    
    localStorage.removeItem('token');
    //Redirecionar para deslogar
  };
  

  return (
    <div className="container">
      <nav className="sidebar">
        <div className="logo">
          <img src="../img/logobiz.png" alt="Logo" />
          <h3>biz.erp</h3>
        </div>
        <ul className="menu">
<<<<<<< HEAD
          <Link to="/dashboard" className="menu-item active"><img src="./img/Home.png" alt="Dashboard" />Dashboard</Link>
          <li><a href="#"><img src="./img/Category.png" alt="" /> <span>Produtos</span></a></li>
          <Link to="/categoria" className="menu-item active"><img src="./img/etiqueta.png" alt="Categotia" />Categorias</Link>
          <li><a href="#"><img src="./img/Document.png" alt="" /> <span>Relatórios</span></a></li>
          <li><a href="#"><img src="./img/Bag.png" alt="" /> <span>Vendas</span></a></li>
        </ul>
        <ul className="logout">
        <li onClick={handleLogout}><Link to="/" ><img src="./img/logout.png" alt="" /><span>Logout</span></Link></li></ul>
=======
          <li><Link to="/dashboard"><img src="../img/Home.png" alt="" /><span>Dashboard</span></Link></li>
          <li><Link to="/produto"><img src="../img/Category.png" alt="" /><span>Produtos</span></Link></li>
          <li><Link to="/categorias"><img src="../img/etiqueta.png" alt="Categotia" /><span>Categorias</span></Link></li>
          <li><Link to="/relatorios"><img src="../img/Document.png" alt="" /><span>Relatórios</span></Link></li>
          <li><Link to="/vendas"><img src="../img/Bag.png" alt="" /><span>Vendas</span></Link></li>
          <li><Link to="/clientes"><img src="./img/clientes.png" alt="clientes" />Clientes</Link></li>
        </ul>
        <ul className="logout">
          <li onClick={handleLogout}><Link to="/"><img src="../img/logout.png" alt="" /><span>Logout</span></Link></li>
        </ul>
>>>>>>> 56e04d10b89bbe1160046689791e2cc85e249409
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

            <button className="add-button" onClick={() => navigator("/cadastro-produto")}>Adicionar</button>
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
                  <td>{product?.name || "Produto sem Nome"}</td>
                  <td>{product.price}</td>
                  <td>{product.cost}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-button view-button" onClick={() => viewProduct(product.id)}><img src="./img/olho.png" alt="" /></button>
                      <button className="action-button edit-button" onClick={() => editProduct(product.id)}><img src="./img/lapis.png" alt="" /></button>
                      <button className="action-button delete-button" onClick={() => handleDeleteClick(product)}><img src="./img/lixo.png" alt="" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {isDeleteModalOpen && (
  <div className="delete-modal-overlay">
    <div className="delete-modal-container">
      <button className="delete-modal-close-btn" onClick={closeDeleteModal}>×</button>

      <h2 className="delete-modal-title">Excluir produto</h2>

      <input
        type="text"
        className="delete-modal-input"
        placeholder="Digite a palavra CONFIRMAR"
        value={confirmationText}
        onChange={(e) => setConfirmationText(e.target.value)}
      />

      <p className="delete-modal-subtitle">
        Ao confirmar essa ação você está ciente de que é uma <br /> ação irreversível. Caso queira cancelar essa ação, basta <br /> clicar fora da tela ou no X no topo do modal
      </p>

      <button
        className="delete-modal-confirm-btn"
        onClick={confirmDelete}
        disabled={confirmationText !== "CONFIRMAR"}
      >
        EXCLUIR
      </button>
    </div>
  </div>
)}

      {isModalOpen && (
  <div className="modal-overlay">
    <div className="modal">
      <button className="close-btn" onClick={closeModal}>×</button>
      
      <h2 className="modal-title">
        <img src="./img/codegobarrasroxa.png" alt="" /> Cadastro por código EAN
      </h2>
      
      <p className="modal-subtitle">
        Insira o código de barras para buscar ou cadastrar um produto
      </p>

      <div className="input-wrapper">
        <span className="input-icon">
          <img src="./img/codegobarrasgrande.png" alt="" />
        </span>
        
        <input
          type="text"
          name="codigoEan"
          placeholder="Digite o código EAN"
          className="modal-input"
          onInput={(e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
          }}
        />
      </div>

      <div className="modal-description">
        Insira o código de barras (EAN) do produto para cadastrá-lo rapidamente no sistema. Após a busca, você será <br /> redirecionado para o formulário de cadastro.
      </div>

      <button className="add-btn" onClick={handleAddProductEan}>Adicionar</button>
    </div>
  </div>
)}
    </div>
  );
};

export default Produto; 