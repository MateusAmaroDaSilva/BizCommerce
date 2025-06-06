
import "./cadastro.clientes.css"
import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import { postCustomers } from "./services/custumerAPI"

const CategoriaSidebar = () => {

  return (
  <aside className="categoria-sidebar">
    <div className="categoria-logo">
      <img src="./img/logobiz.png" alt="Logo" className="categoria-logo-icon" />
      <span>biz.erp</span>
    </div>
    <nav className="sidebar">
        <div className="logo">
          <img src="../img/logobiz.png" alt="Logo" />
          <h3>biz.erp</h3>
        </div>
        <ul className="menu">
          <li><Link to="/dashboard"><img src="../img/Home.png" alt="" /><span>Dashboard</span></Link></li>
          <li><Link to="/produto"><img src="../img/Category.png" alt="" /><span>Produtos</span></Link></li>
          <li><Link to="/categorias"><img src="../img/etiqueta.png" alt="Categotia" /><span>Categorias</span></Link></li>
          <li><Link to="/relatorios"><img src="../img/Document.png" alt="" /><span>Relatórios</span></Link></li>
          <li><Link to="/vendas"><img src="../img/Bag.png" alt="" /><span>Vendas</span></Link></li>
          <li><Link to="/clientes" className="categoria-menu-item active"><img src="./img/clientes.png" alt="clientes" />Clientes</Link></li>
        </ul>
        <ul className="logout">
          <li><Link to="/"><img src="../img/logout.png" alt="" /><span>Logout</span></Link></li>
        </ul>
      </nav>
    <ul className="categoria-logout">
      <li>
        <Link to="/">
          <img src="./img/logout.png" alt="" />
          <span>Logout</span>
        </Link>
      </li>
    </ul>
  </aside>
)
}

const CategoriaTopBar = () => (
  <header className="categoria-top-bar">
    <div className="categoria-breadcrumb">
      <span>Aba Vendas - Adicionar venda</span>
    </div>
    <div className="categoria-user-profile">
      <span>Calabreso Silva</span>
      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"
        alt=""
        className="categoria-profile-pic"
      />
    </div>
  </header>
)

export default function CadastroCliente() {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token || token == null) {
  //     navigate('/');
  //   }
  // }, []);

  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    telefone: "",
    tipoDocumento: "CPF",
    cpf: "",
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = formData.nomeCompleto;
    const email = formData.email;
    const phone = formData.telefone;
    const address = `${formData.cep ? formData.cep : ''}, ${formData.logradouro}, ${formData.numero} ${formData.complemento ? formData.complemento : ''} - ${formData.cidade}, ${formData.estado}`

    const requestBody = {
      name,
      email,
      phone,
      address
    };
    console.log(requestBody)

    const result = await postCustomers(token, formData);
        console.log(result)
        if (result.status === 201) {
           navigate('/categorias') // Idealmente use React Router
        }
        else {
           alert("Cadastro Falha no Cadastro")
        }


    console.log("Dados do cliente:", formData)
  }

  const handleCancel = () => {
    setFormData({
      nomeCompleto: "",
      email: "",
      telefone: "",
      tipoDocumento: "CPF",
      cpf: "",
      cep: "",
      logradouro: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
    })
  }

  return (
    <div className="categoria-container">
      <CategoriaSidebar />
      <div className="categoria-main-content">
        <CategoriaTopBar />

        <div className="cliente-content">
          <div className="cliente-header">
            <Link to="/clientes" className="cliente-back-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19 12H5M12 19L5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Cadastrar Cliente</span>
            </Link>
            <div className="cliente-actions">
              <button type="button" className="btn-cancelar" onClick={handleCancel}>
                Cancelar
              </button>
              <button type="submit" className="btn-salvar" onClick={handleSubmit}>
                Salvar Cliente
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="cliente-form">
            <div className="cliente-section">
              <div className="section-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h2>Informações Pessoais</h2>
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="nomeCompleto">Nome completo *</label>
                  <input
                    type="text"
                    id="nomeCompleto"
                    name="nomeCompleto"
                    placeholder="Digite o nome completo"
                    value={formData.nomeCompleto}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">E-mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="telefone">Telefone *</label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    placeholder="(00) 00000-0000"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="tipoDocumento">Tipo de documento *</label>
                  <select
                    id="tipoDocumento"
                    name="tipoDocumento"
                    value={formData.tipoDocumento}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    <option value="CPF">CPF</option>
                    <option value="CNPJ">CNPJ</option>
                  </select>
                </div>

                <div className="form-field form-field-wide">
                  <label htmlFor="cpf">CPF *</label>
                  <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    placeholder="000.000.000-00"
                    value={formData.cpf}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="cliente-section">
              <div className="section-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                </svg>
                <h2>Endereço</h2>
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="cep">CEP</label>
                  <input
                    type="text"
                    id="cep"
                    name="cep"
                    placeholder="00000-000"
                    value={formData.cep}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="logradouro">Logradouro</label>
                  <input
                    type="text"
                    id="logradouro"
                    name="logradouro"
                    placeholder="Rua, Avenida, etc."
                    value={formData.logradouro}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="numero">Número</label>
                  <input
                    type="text"
                    id="numero"
                    name="numero"
                    placeholder="134"
                    value={formData.numero}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="complemento">Complemento</label>
                  <input
                    type="text"
                    id="complemento"
                    name="complemento"
                    placeholder="Apto, Bloco, etc."
                    value={formData.complemento}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="bairro">Bairro</label>
                  <input
                    type="text"
                    id="bairro"
                    name="bairro"
                    placeholder="Bairro"
                    value={formData.bairro}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="cidade">Cidade</label>
                  <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    placeholder="Cidade"
                    value={formData.cidade}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="estado">Estado</label>
                  <input
                    type="text"
                    id="estado"
                    name="estado"
                    placeholder="UF"
                    value={formData.estado}
                    onChange={handleInputChange}
                    className="form-input"
                    maxLength="2"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

