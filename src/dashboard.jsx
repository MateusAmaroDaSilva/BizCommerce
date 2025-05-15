import React from 'react';
import { useEffect } from "react";
import './dashboard.css';

//Função de Logout
const handleLogout = async (e) => {
  e.preventDefault();
  
  localStorage.removeItem('token');
  //Redirecionar para deslogar
};

const Sidebar = () => (
  <aside className="sidebar">
    <div className="logo">
      <img src="./img/logobiz.png" alt="Logo" className="logo-icon" />
      <span>biz.erp</span>
    </div>
    <nav className="menu">
      <a href="#" className="menu-item active">
        <img src="./img/home.png" alt="Dashboard" />
        Dashboard
      </a>
      <a href="#" className="menu-item">
        <img src="./img/Category.png" alt="Produtos" />
        Produtos
      </a>
      <a href="#" className="menu-item">
        <img src="./img/Document.png" alt="Relatórios" />
        Relatórios
      </a>
      <a href="#" className="menu-item">
        <img src="./img/Bag.png" alt="Vendas" />
        Vendas
      </a>
    </nav>
    <div className="logout">
      <a href="#" className="menu-item">
        <img src="./img/logout.png" alt="Logout" onClick={handleLogout}/>
        Logout
      </a>
    </div>
  </aside>
);

const TopBar = () => (
  <header className="top-bar">
    <div className="user-profile">
      <span>Calabreso Silva</span>
      <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop" alt="" className="profile-pic" />
    </div>
  </header>
);

const Analysis = () => (
  <section className="card analysis-card">
    <h2>Análises</h2>
    <div className="big-number">1200.50</div>

    <div className="stacked-bar">
      <div className="bar-segment" style={{ width: '45%', background: '#511DB9' }}></div>
      <div className="bar-segment" style={{ width: '35%', background: '#B93939' }}></div>
      <div className="bar-segment" style={{ width: '20%', background: '#2BBC45' }}></div>
      <div className="bar-segment" style={{ width: '10%', background: '#000000' }}></div> 
    </div>

    <div className="progress-bars-inline">
  <div className="progress-item-inline">
    <div className="progress-bar-container">
      <div className="mini-bar" style={{ width: '45%', background: '#511DB9' }}></div>
    </div>
    <div className="percentage-inline">45%</div>
    <div className="label-inline">Nike</div>
  </div>
  <div className="progress-item-inline">
    <div className="progress-bar-container">
      <div className="mini-bar" style={{ width: '35%', background: '#B93939' }}></div>
    </div>
    <div className="percentage-inline">35%</div>
    <div className="label-inline">Boné</div>
  </div>
  <div className="progress-item-inline">
    <div className="progress-bar-container">
      <div className="mini-bar" style={{ width: '20%', background: '#2BBC45' }}></div>
    </div>
    <div className="percentage-inline">20%</div>
    <div className="label-inline">Adidas</div>
  </div>
</div>
  </section>
);  

const Tenis = () => (
  <section className="card tenis-card">
    <h2 className="tenis-title">Tênis</h2>

    <div className="tenis-row">
      <div className="tenis-text">
        <span className="label">SEG</span>
        <span className="value">10K</span>
        <span className="percent positive">+43%</span>
      </div>
      <div className="bar-graph">
        <div className="bar red" style={{ height: "40%" }}></div>
        <div className="bar red" style={{ height: "60%" }}></div>
        <div className="bar red highlight" style={{ height: "90%" }}></div>
        <div className="bar red" style={{ height: "50%" }}></div>
      </div>
    </div>

    <div className="divider" />

    <div className="tenis-row">
      <div className="tenis-text">
        <span className="label">TER</span>
        <span className="value">10m</span>
        <span className="percent positive">+13%</span>
      </div>
      <div className="bar-graph">
        <div className="bar green" style={{ height: "40%" }}></div>
        <div className="bar green" style={{ height: "60%" }}></div>
        <div className="bar green highlight" style={{ height: "90%" }}></div>
        <div className="bar green" style={{ height: "50%" }}></div>
      </div>
    </div>
  </section>
);

const KpiCard = ({ title, description, type, icon }) => (
  <section className={`card kpi-card ${type}`}>
    <div className="kpi-content">
      <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="kpi-percent">45%</span>
        <div className="kpi-progress-bar">
          <div className="kpi-progress" />
        </div>
      </div>
      <div className="icon">
        <img src={icon} alt={`${title} icon`} />
      </div>
    </div>
  </section>
);

const Main = () => (
  <main className="main-content">
    <TopBar />

    <div className="page-header">
      <h1>Dashboard</h1>
      <p>Gerencie seu negócio por aqui</p>
    </div>

    <div className="dashboard-grid">
      <div className="main-section">
        <Bones />
      <div className="analysis-tenis-container">
          <Analysis />
          <Tenis />
        </div>
      </div>

    <div className="kpi-container">
  <KpiCard
      title="Lucro"
      description={<>Resumo do lucro<br />baseado no mês</>}
      type="lucro"
      icon="./img/lucro.png"
    />
  <KpiCard
      title="Vendas"
      description={<>Resumo das vendas<br />baseado no mês</>}
      type="vendas"
      icon="./img/vendas.png"
    />
  <KpiCard
      title="Déficit"
      description={<>Resumo das<br /> despesas do mês</>}
      type="deficit"
      icon="./img/deficit.png"
    />
  </div>
</div>
  </main>
);

const Bones = () => (
  <section className="card bones-card">
    <div className="bones-left">
      <h2>Bonés</h2>
      <p className="subtitle">Valores recebidos</p>
      <div className="bones-value">$1,200.50</div>
      <div className="valor-rs">
        <span className="green-dot" />
        Valor em R$
      </div>
      <p className="bones-description">
        Vendas relacionadas<br />aos produtos da<br />categoria de Bonés
      </p>
    </div>

    <div className="bones-chart">
      {[
        { dia: "DOM", valor: 12 },
        { dia: "SEG", valor: 10 },
        { dia: "TER", valor: 14 },
        { dia: "QUA", valor: 13 },
        { dia: "QUI", valor: 17 },
        { dia: "SEX", valor: 17 },
        { dia: "SAB", valor: 15 },
        { dia: "SEG", valor: 16 },
      ].map((item, index) => (
        <div className="bar-item" key={index}>
          <div className="bar-value">{item.valor}</div>
          <div className="bar purple-bar" style={{ height: `${item.valor * 12}px` }}></div>
          <div className="bar-label">{item.dia}</div>
        </div>
      ))}
    </div>
  </section>
);

export default function Dashboard() {

  //Valida usuário Logado
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || token == null) {
      //Redirecionar se não estiver autenticado
    }
  }, []);


  return (
    <div className="container">
      <Sidebar />
      <Main />
    </div>
  );
}