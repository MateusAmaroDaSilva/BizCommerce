"use client"

import "./cadastro.categoria.css"
import { useState } from "react"
import { Link } from "react-router-dom"

const PainelSidebar = () => (
  <aside className="painel-sidebar">
    <div className="painel-logo">
      <img src="./img/logobiz.png" alt="Logo" className="painel-logo-icon" />
      <span>biz.erp</span>
    </div>
    <nav className="painel-menu">
      <a href="/dashboard" className="painel-menu-item">
        <img src="./img/home.png" alt="Dashboard" />
        Dashboard
      </a>
      <Link to="/produto" className="painel-menu-item">
        <img src="./img/Category.png" alt="Produtos" />
        Produtos
      </Link>
      <Link to="/categoria" className="painel-menu-item active">
        <img src="./img/etiqueta.png" alt="Categoria" />
        Categorias
      </Link>
      <a href="#" className="painel-menu-item">
        <img src="./img/Document.png" alt="Relatórios" />
        Relatórios
      </a>
      <a href="#" className="painel-menu-item">
        <img src="./img/Bag.png" alt="Vendas" />
        Vendas
      </a>
      <Link to="/clientes" className="painel-menu-item">
        <img src="./img/clientes.png" alt="clientes" />
        Clientes
      </Link>
    </nav>
    <ul className="painel-logout">
      <li>
        <Link to="/">
          <img src="./img/logout.png" alt="" />
          <span>Logout</span>
        </Link>
      </li>
    </ul>
  </aside>
)

const PainelTopBar = () => (
  <header className="painel-top-bar">
    <div className="painel-user-profile">
      <span>Calabreso Silva</span>
      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"
        alt=""
        className="painel-profile-pic"
      />
    </div>
  </header>
)

export default function CadastroCategoria() {
  const [nomeCategoria, setNomeCategoria] = useState("")
  const [descricao, setDescricao] = useState("")
  const [status, setStatus] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Lógica para criar categoria
    console.log({ nomeCategoria, descricao, status })
  }

  const handleCancel = () => {
    setNomeCategoria("")
    setDescricao("")
    setStatus(true)
  }

  return (
    <div className="painel-container">
      <PainelSidebar />
      <div className="painel-main-content">
        <PainelTopBar />

        <div className="categoria-content">
          <div className="categoria-header">
            <Link to="/categoria" className="categoria-back-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19 12H5M12 19L5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Cadastrar categoria</span>
            </Link>
          </div>

          <div className="categoria-form-container">
            <div className="categoria-form-panel">
              <div className="categoria-field">
                <label htmlFor="nome">Nome da categoria</label>
                <input
                  type="text"
                  id="nome"
                  placeholder="Ex: Tênis"
                  value={nomeCategoria}
                  onChange={(e) => setNomeCategoria(e.target.value)}
                  className="categoria-input"
                />
              </div>

              <div className="categoria-field">
                <label htmlFor="descricao">Descrição</label>
                <textarea
                  id="descricao"
                  placeholder="Descreva a categoria..."
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  className="categoria-textarea"
                  rows={6}
                />
              </div>
            </div>

            <div className="categoria-config-panel">
              <div className="config-header">
                <h3>Configurações</h3>
              </div>

              <div className="categoria-status">
                <div className="status-info">
                  <span className="status-label">Status</span>
                  <p className="status-description">Define se a categoria estará ativa ou não.</p>
                </div>
                <div className="status-toggle">
                  <input
                    type="checkbox"
                    id="status"
                    checked={status}
                    onChange={(e) => setStatus(e.target.checked)}
                    className="toggle-input"
                  />
                  <label htmlFor="status" className="toggle-label"></label>
                </div>
              </div>
            </div>
          </div>

          <div className="categoria-actions">
          <Link to="/categoria" className="btn-cancelar">
             Cancelar
          </Link>
            <button type="submit" className="btn-criar" onClick={handleSubmit}>
              Criar Categoria
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
