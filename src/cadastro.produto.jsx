import "./cadastro.produto.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { postProduct, getProduct } from "./services/productAPI";
import { useEffect, useState } from "react";

const CadastroProduto = () => {
  const { id } = useParams();
  const [preview, setPreview] = useState(null);
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
    
  //Valida usuário Logado
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || token == null) {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    if (!id) return;
    getProduct(token, id).then((resposta) => {
          if (resposta.status === 200) {
            resposta.json().then((product) => {
              setProduct(product);
              console.log(product)
            });
          }
        });
  }, [id, token]);

  const handleLogout = async (e) => {
    e.preventDefault();
    
    localStorage.removeItem('token');
    //Redirecionar para deslogar
  };

  const handleRegister = async (e) => {
    e.preventDefault();
  
    const ean = document.querySelector('input[name="ean"]').value;
    const description = document.querySelector('input[name="descricao"]').value;
    const price = document.querySelector('input[name="preco"]').value;
    const cost = document.querySelector('input[name="custo"]').value;
    const unit = document.querySelector('input[name="estoque"]').value;
    
    const requestBody = {
      ean,
      description,
      price, 
      cost,
      unit
    };
  
    const result = await postProduct(token, requestBody, id);

    console.log(result)
  
    if (result.status === 201 || result.status === 500) {
      navigate('/produto') // Idealmente use React Router
    }
    else {
      alert("Produto de Cadastro Invalido")
    }
  };

  return (
    <div className="container">
      <nav className="sidebar">
        <div className="logo">
          <img src="../img/logobiz.png" alt="Logo" />
          <h3>biz.erp</h3>
        </div>
        <ul className="menu">
          <li><Link to="/dashboard"><img src="../img/Home.png" alt="" /><span>Dashboard</span></Link></li>
          <li><Link to="/produto"><img src="../img/Category.png" alt="" /><span>Produtos</span></Link></li>
          <Link to="#" className="menu-item active"><img src="../img/etiqueta.png" alt="Categotia" />Categorias</Link>
          <li><a href="#"><img src="../img/Document.png" alt="" /><span>Relatórios</span></a></li>
          <li><a href="#"><img src="../img/Bag.png" alt="" /><span>Vendas</span></a></li>
        </ul>
        <ul className="logout">
          <li onClick={handleLogout}><Link to="/"><img src="../img/logout.png" alt="" /><span>Logout</span></Link></li>
        </ul>
      </nav>

      <main className="content">
        <header className="header-container">
          <div className="user-info">
            <span>Daniel</span>
            <img
              className="avatar Cadastrar Produto"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"
              alt="Avatar"
            />
          </div>
        </header>
        
        <div className="botao-cadastrar-quadrado">
  <button className="quadrado" onClick={() => navigate("/produto")}>
    <img src="../img/seta.png" alt="Voltar" />
  </button>
  <h2>{id ? "Editar Produto" : "Cadastrar Produto" }</h2>
</div>  

        <div className="form-produto">
          <div className="form-grid">
            <div className="form-left">
              <div className="form-group">
                <label>Nome</label>
                <input type="text" placeholder="Nome do produto" defaultValue={product.description} name="descricao"/>
              </div>
              <div className="form-group">
                <label>Descrição</label>
                <input type="text" placeholder="Descrição do produto"/>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Código EAN</label>
                  <input type="number" placeholder="Digite o EAN" defaultValue={product.ean} min="0" name="ean"/>
                </div>
                <div className="form-group">
                  <label>Estoque</label>
                  <input type="number" placeholder="Quantidade de estoque" defaultValue={product.unit} min="0"  name="estoque"/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Preço de venda</label>
                  <input type="number" placeholder="R$0,00" defaultValue={product.price} min="0" step="0.01" name="preco"/>
                </div>
                <div className="form-group">
                  <label>Preço de custo</label>
                  <input type="number" placeholder="R$0,00" defaultValue={product.cost} min="0" step="0.01" name="custo"/>
                </div>
              </div>
              <div className="form-group">
                <label>Categoria</label>
                <input type="text" placeholder="Selecione a categoria do produto" name="categoria"/>
              </div>
            </div>

            <div className="form-right">
              <label>Imagem do produto</label>
              <div
                className="upload-box"
                onClick={() => document.getElementById("fileInput").click()}
              >
                {preview ? (
                  <img src={preview} alt="Preview" className="preview-image" />
                ) : (
                  <>
                    <img src="./img/quadro.png" alt="Upload" />
                    <p>Clique para fazer upload</p>
                    <small>ou arraste a imagem aqui</small>
                  </>
                )}
              </div>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
            </div>
          </div>

          <button className="btn-primary" onClick={handleRegister}>Cadastrar</button>
        </div>
      </main>
    </div>
  );
};

export default CadastroProduto;
