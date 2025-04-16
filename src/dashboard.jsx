import React from 'react';
import './dashboard.css';

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
        <img src="./img/logout.png" alt="Logout" />
        Logout
      </a>
    </div>
  </aside>
);

const TopBar = () => (
  <header className="top-bar">
    <h1>Dashboard</h1>
    <p>Gerencie seu negócio por aqui</p>
    <div className="user-profile">
      <span>Calabreso Silva</span>
      <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop" alt="Profile" className="profile-pic" />
    </div>
  </header>
);

const Analysis = () => (
  <section className="card analysis-card">
    <h2>Análises</h2>
    <div className="big-number">1200.50</div>
    <div className="progress-bars">
      <div className="progress-item">
        <span>Nike</span>
        <div className="progress-bar">
          <div className="progress" style={{ width: '45%', background: '#7C3AED' }}></div>
        </div>
        <span>45%</span>
      </div>
      <div className="progress-item">
        <span>Boné</span>
        <div className="progress-bar">
          <div className="progress" style={{ width: '35%', background: '#EF4444' }}></div>
        </div>
        <span>35%</span>
      </div>
      <div className="progress-item">
        <span>Adidas</span>
        <div className="progress-bar">
          <div className="progress" style={{ width: '20%', background: '#10B981' }}></div>
        </div>
        <span>20%</span>
      </div>
    </div>
  </section>
);

const Tenis = () => (
  <section className="card tenis-card">
    <h2>Tênis</h2>
    <div className="tenis-stats">
      <div className="tenis-stat">
        <div className="stat-header">
          <span>SEG</span>
          <span className="value">10k</span>
        </div>
        <span className="trend positive">+43%</span>
      </div>
      <div className="tenis-stat">
        <div className="stat-header">
          <span>TER</span>
          <span className="value">10m</span>
        </div>
        <span className="trend positive">+13%</span>
      </div>
    </div>
  </section>
);

const KpiCard = ({ title, description }) => (
  <section className="card kpi-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="progress-circle" data-value="45"></div>
  </section>
);

const Main = () => (
  <main className="main-content">
    <TopBar />
    <div className="dashboard-grid">
      <div className="main-section">
        <section className="card bones-card">
          <div className="card-header">
            <h2>Bonês</h2>
            <span className="subtitle">Valores recebidos</span>
            <div className="value">$1,200.50</div>
            <span className="trend positive">Valor em R$</span>
          </div>
        </section>
        <div className="analysis-tenis-container">
          <Analysis />
          <Tenis />
        </div>
      </div>
      <div className="side-section">
        <KpiCard title="Lucro" description="Resumo do lucro baseado no mês" />
        <KpiCard title="Vendas" description="Resumo das vendas baseado no mês" />
        <KpiCard title="Déficit" description="Resumo das despesas do mês" />
      </div>
    </div>
  </main>
);

export default function Dashboard() {
  return (
    <div className="container">
      <Sidebar />
      <Main />
    </div>
  );
}