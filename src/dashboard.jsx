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

    {/* Barra grande de análise */}
    <div className="stacked-bar">
      <div className="bar-segment" style={{ width: '45%', background: '#511DB9' }}></div>
      <div className="bar-segment" style={{ width: '35%', background: '#B93939' }}></div>
      <div className="bar-segment" style={{ width: '20%', background: '#2BBC45' }}></div>
      <div className="bar-segment" style={{ width: '10%', background: '#000000' }}></div> {/* Só pra completar 100% */}
    </div>

    {/* Itens em linha */}
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

export default function Dashboard() {
  return (
    <div className="container">
      <Sidebar />
      <Main />
    </div>
  );
}