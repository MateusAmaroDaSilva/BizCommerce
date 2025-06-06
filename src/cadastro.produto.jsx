import "./cadastro.produto.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { postProduct, getProduct } from "./services/productAPI";
import { listCategorias, postCategorias } from "./services/categoriaAPI";
import { initialCategorias } from "./services/categoriasInitial";
import { useEffect, useState } from "react";

const CadastroProduto = () => {
  const { id } = useParams();
  const [preview, setPreview] = useState(null);
  const [product, setProduct] = useState({});
  const [categorias, setCategorias] = useState([]);
  const normalize = (str) =>
    str.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const navigate = useNavigate();
  

  const token = localStorage.getItem("token");

  //Traz a Lista de Produtos
    useEffect(() => {
      listCategorias().then((resposta) => {
        if (resposta.status === 200) {
          resposta.json().then((categorias) => {
            setCategorias(categorias.data);
          });
        }
      });
    }, []);
  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await listCategorias(token);
  
        if (response.status === 200) {
          const data = await response.json();
          setCategorias(data.data);
        } else {
          throw new Error("Erro ao carregar da API");
        }
      } catch (error) {
        console.warn("Erro ao buscar da API, carregando dados locais...");
  
        setCategorias(initialCategorias().data)
      }
    };
  
    fetchCategorias();

    // listCategorias().then((resposta) => {
    //   if (resposta.status === 200) {
    //     resposta.json().then((categorias) => {
    //       setCategorias(categorias.data);
    //     });
    //   }
    // });
  }, []);

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
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token || token == null) {
  //     navigate('/');
  //   }
  // }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    
    localStorage.removeItem('token');
    navigate('/');
  };


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

  const categoriaSelecionada = categorias.find(cat => cat.id === product.category_id);

  const handleLogout = async (e) => {
    e.preventDefault();
    
    localStorage.removeItem('token');
    navigate('/');
  };
  console.log(product.category_id)


  const handleRegister = async (e) => {
    e.preventDefault();
  
    const ean = document.querySelector('input[name="ean"]').value;
    const description = document.querySelector('input[name="descricao"]').value;
    const price = document.querySelector('input[name="preco"]').value;
    const cost = document.querySelector('input[name="custo"]').value;
    const unit = document.querySelector('input[name="estoque"]').value;
    const brand = document.querySelector('input[name="marca"]').value;
    const category_name = document.querySelector('input[name="categoria"]').value;
    const status = "ativo"

    const categoriaExistente = categorias.find(
      (cat) => normalize(cat.name) === normalize(category_name)
    );
    console.log(categoriaExistente)

    let categoria_id;
    if(categoriaExistente){
      categoria_id = categoriaExistente.id
      console.log(categoria_id)

      const requestBody = {
        ean,
        description,
        price, 
        cost,
        unit,
        brand,
        categoria_id
      };
      console.log(requestBody)
    
      const result = await postProduct(token, requestBody, id);
      if (result.status === 201 || result.status === 200) {
         navigate('/produto') // Idealmente use React Router
      }
      else {
         alert("Produto de Cadastro Invalido")
      }

    } else {
      const requestBody = {
        category_name,
        status
      };
      const result = await postCategorias(token, requestBody);
      if(result.status === 500 || result.status === 200){
        const data = await result.json()
        categoria_id = data.id
        console.log(result)
      }
    }
    
    const requestBody = {
      ean,
      description,
      price, 
      cost,
      unit,
      brand,
      categoria_id
    };
  
    const result = await postProduct(token, requestBody, id);
    if (result.status === 201 || result.status === 200) {
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
          <li><Link to="/categorias"><img src="../img/etiqueta.png" alt="Categotia" /><span>Categorias</span></Link></li>
          <li><Link to="/relatorios"><img src="../img/Document.png" alt="" /><span>Relatórios</span></Link></li>
          <li><Link to="/vendas"><img src="../img/Bag.png" alt="" /><span>Vendas</span></Link></li>
          <li><Link to="/clientes"><img src="./img/clientes.png" alt="clientes" />Clientes</Link></li>
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
                <label>Marca</label>
                <input type="text" placeholder="Marca do produto" defaultValue={product.brand} name="marca"/>
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
              <input
                  list="categorias"
                  defaultValue={categoriaSelecionada?.name || ""}
                  placeholder="Selecione a categoria do produto"
                  name="categoria"
              />
              <datalist id="categorias">
                {categorias.map((cat) => (
                  <option key={cat.id} value={cat.name}/>
                ))}
              </datalist>
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
