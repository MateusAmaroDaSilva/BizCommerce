import React, { useState } from "react";
import "./login.css";

export default function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log("Estado inicial do modal:", isModalOpen); 
  return (
    <div className="container">
      <img src="/img/HexLE.png" alt="Hexágonos" className="hex-top" />
      <img src="/img/HexLD.png" alt="Hexágonos" className="hex-bottom" />

      <div className="left">
        <div className="logo">
          <img src="/img/logobiz.png" alt="Logo" className="logo-img" />
          <span>biz.erp</span>
        </div>
        <h1>Bem-vindo</h1>
        <p>
          Nossa aplicação de finanças facilita o controle do seu dinheiro,
          permitindo registrar despesas, acompanhar receitas e visualizar
          relatórios em uma interface prática e intuitiva.
        </p>
        <button onClick={() => setIsModalOpen(true)}>Login</button>
      </div>

      <div className="right">
        <img src="/img/logo.webp" alt="Logo" className="logo-main" />
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <img src="/img/Logo-Branca.png" alt="Logo" className="modal-logo" />
            <h2>Faça login em sua conta</h2>

            <label>Email</label>
            <input type="text" placeholder="Digite seu email" />

            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha" />

            <button>Login</button>
          </div>
        </div>
      )}
    </div>
  );
}
