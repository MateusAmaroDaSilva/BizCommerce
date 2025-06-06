"use client"

import { useState } from "react"
import "./cadastrarcliente.css"

// SVG Icon Components
const ArrowLeft = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m15 18-6-6 6-6" />
  </svg>
)

const Home = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
)

const Package = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m7.5 4.27 9 5.15" />
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </svg>
)

const FileText = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
)

const ShoppingBag = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
)

const LogOut = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16,17 21,12 16,7" />
    <line x1="21" x2="9" y1="12" y2="12" />
  </svg>
)

const User = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const SaveIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17,21 17,13 7,13 7,21" />
    <polyline points="7,3 7,8 15,8" />
  </svg>
)

export default function CadastrarCliente() {
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

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-content">
          {/* Logo */}
          <div className="logo-container">
            <div className="logo-icon">
              <div className="logo-inner"></div>
            </div>
            <span className="logo-text">biz.erp</span>
          </div>

          {/* Navigation */}
          <nav className="sidebar-nav">
            <div className="nav-item">
              <Home className="nav-icon" />
              <span>Dashboard</span>
            </div>
            <div className="nav-item">
              <Package className="nav-icon" />
              <span>Produtos</span>
            </div>
            <div className="nav-item">
              <FileText className="nav-icon" />
              <span>Relatórios</span>
            </div>
            <div className="nav-item active">
              <ShoppingBag className="nav-icon" />
              <span>Vendas</span>
            </div>
          </nav>
        </div>

        {/* Logout */}
        <div className="logout-container">
          <div className="nav-item">
            <LogOut className="nav-icon" />
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <button className="back-button" aria-label="Voltar">
              <ArrowLeft />
            </button>
            <h1 className="page-title">Cadastrar Cliente</h1>
          </div>

          <div className="header-right">
            <div className="action-buttons">
              <button className="btn btn-cancel">Cancelar</button>
              <button className="btn btn-save">
                <SaveIcon />
                Salvar Cliente
              </button>
            </div>
            <div className="user-profile">
              <span className="user-name">Calabreso Silva</span>
              <div className="user-avatar" title="Calabreso Silva">
                <span>CS</span>
              </div>
              <div className="chevron-down"></div>
            </div>
          </div>
        </header>

        {/* Form Content */}
        <main className="form-container">
          <div className="form-wrapper">
            {/* Personal Information Section */}
            <div className="form-section">
              <div className="section-header">
                <User className="section-icon" />
                <h2 className="section-title">Informações Pessoais</h2>
              </div>

              <div className="form-grid">
                {/* Nome Completo */}
                <div className="form-group nomeCompleto">
                  <label htmlFor="nomeCompleto" className="form-label">
                    Nome completo <span className="required">*</span>
                  </label>
                  <input
                    id="nomeCompleto"
                    type="text"
                    className="form-input"
                    placeholder="Digite o nome completo"
                    value={formData.nomeCompleto}
                    onChange={(e) => handleInputChange("nomeCompleto", e.target.value)}
                  />
                </div>

                {/* E-mail */}
                <div className="form-group email">
                  <label htmlFor="email" className="form-label">
                    E-mail <span className="required">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>

                {/* Telefone */}
                <div className="form-group telefone">
                  <label htmlFor="telefone" className="form-label">
                    Telefone <span className="required">*</span>
                  </label>
                  <input
                    id="telefone"
                    type="tel"
                    className="form-input"
                    placeholder="(00) 00000-0000"
                    value={formData.telefone}
                    onChange={(e) => handleInputChange("telefone", e.target.value)}
                  />
                </div>

                {/* Tipo de Documento */}
                <div className="form-group tipoDocumento">
                  <label htmlFor="tipoDocumento" className="form-label">
                    Tipo de documento <span className="required">*</span>
                  </label>
                  <div className="select-wrapper">
                    <select
                      id="tipoDocumento"
                      className="form-select"
                      value={formData.tipoDocumento}
                      onChange={(e) => handleInputChange("tipoDocumento", e.target.value)}
                    >
                      <option value="CPF">CPF</option>
                      <option value="CNPJ">CNPJ</option>
                    </select>
                    <div className="select-arrow"></div>
                  </div>
                </div>

                {/* CPF/CNPJ */}
                <div className="form-group cpf">
                  <label htmlFor="cpf" className="form-label">
                    {formData.tipoDocumento} <span className="required">*</span>
                  </label>
                  <input
                    id="cpf"
                    type="text"
                    className="form-input"
                    placeholder={formData.tipoDocumento === "CPF" ? "000.000.000-00" : "00.000.000/0000-00"}
                    value={formData.cpf}
                    onChange={(e) => handleInputChange("cpf", e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="form-section">
              <div className="section-header">
                <User className="section-icon" />
                <h2 className="section-title">Endereço</h2>
              </div>

              <div className="form-grid-address">
                {/* CEP */}
                <div className="form-group cep">
                  <label htmlFor="cep" className="form-label">
                    CEP
                  </label>
                  <input
                    id="cep"
                    type="text"
                    className="form-input"
                    placeholder="00000-000"
                    value={formData.cep}
                    onChange={(e) => handleInputChange("cep", e.target.value)}
                  />
                </div>

                {/* Logradouro */}
                <div className="form-group logradouro">
                  <label htmlFor="logradouro" className="form-label">
                    Logradouro
                  </label>
                  <input
                    id="logradouro"
                    type="text"
                    className="form-input"
                    placeholder="Rua, Avenida, etc."
                    value={formData.logradouro}
                    onChange={(e) => handleInputChange("logradouro", e.target.value)}
                  />
                </div>

                {/* Número */}
                <div className="form-group numero">
                  <label htmlFor="numero" className="form-label">
                    Número
                  </label>
                  <input
                    id="numero"
                    type="text"
                    className="form-input"
                    placeholder="134"
                    value={formData.numero}
                    onChange={(e) => handleInputChange("numero", e.target.value)}
                  />
                </div>

                {/* Complemento */}
                <div className="form-group complemento">
                  <label htmlFor="complemento" className="form-label">
                    Complemento
                  </label>
                  <input
                    id="complemento"
                    type="text"
                    className="form-input"
                    placeholder="Apto., Bloco, etc."
                    value={formData.complemento}
                    onChange={(e) => handleInputChange("complemento", e.target.value)}
                  />
                </div>

                {/* Bairro */}
                <div className="form-group bairro">
                  <label htmlFor="bairro" className="form-label">
                    Bairro
                  </label>
                  <input
                    id="bairro"
                    type="text"
                    className="form-input"
                    placeholder="Bairro"
                    value={formData.bairro}
                    onChange={(e) => handleInputChange("bairro", e.target.value)}
                  />
                </div>

                {/* Cidade */}
                <div className="form-group cidade">
                  <label htmlFor="cidade" className="form-label">
                    Cidade
                  </label>
                  <input
                    id="cidade"
                    type="text"
                    className="form-input"
                    placeholder="Cidade"
                    value={formData.cidade}
                    onChange={(e) => handleInputChange("cidade", e.target.value)}
                  />
                </div>

                {/* Estado */}
                <div className="form-group estado">
                  <label htmlFor="estado" className="form-label">
                    Estado
                  </label>
                  <input
                    id="estado"
                    type="text"
                    className="form-input"
                    placeholder="UF"
                    value={formData.estado}
                    onChange={(e) => handleInputChange("estado", e.target.value)}
                    maxLength={2}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
