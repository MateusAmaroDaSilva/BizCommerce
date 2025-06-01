import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDashboard } from './services/dashboardAPI';
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
        <img src="./img/Home.png" alt="Dashboard" />
        Dashboard</a>
      <Link to="/produto" className="menu-item">
     <img src="./img/Category.png" alt="Produtos" />
        Produtos
      </Link>
      <Link to="/categoria" className="menu-item active">
      <img src="./img/etiqueta.png" alt="Categotia" />
      Categorias
      </Link>
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
      <a href="#" className="menu-item" onClick={handleLogout}>
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

const Analysis = ({ categoriesData }) => {
  // Calculate total revenue for all categories
  const totalRevenue = categoriesData?.reduce((sum, category) => sum + Number.parseFloat(category.revenue), 0) || 0;

  // Get top 3 categories by revenue
  const topCategories =
    categoriesData?.sort((a, b) => Number.parseFloat(b.revenue) - Number.parseFloat(a.revenue)).slice(0, 3) || [];

  // Calculate percentages
  const percentages = topCategories.map((category) => ({
    name: category.name,
    percentage: Math.round((Number.parseFloat(category.revenue) / totalRevenue) * 100),
  }));

  return (
  <section className="card analysis-card">
    <h2>Análises</h2>
    <div className="big-number">R${new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(totalRevenue)}</div>

    <div className="stacked-bar">
        {percentages.map((item, index) => (
          <div
            key={index}
            className="bar-segment"
            style={{
              width: `${item.percentage}%`,
              background: index === 0 ? "#511DB9" : index === 1 ? "#B93939" : "#2BBC45",
            }}
          ></div>
        ))}
    </div>

  <div className="progress-bars-inline">
    {percentages.map((item, index) => (
      <div className="progress-item-inline" key={index}>
        <div className="progress-bar-container">
          <div
            className="mini-bar"
            style={{
              width: `${item.percentage}%`,
              background: index === 0 ? "#511DB9" : index === 1 ? "#B93939" : "#2BBC45",
            }}
          ></div>
        </div>
        <div className="percentage-inline">{item.percentage}%</div>
        <div className="label-inline">{item.name}</div>
      </div>
    ))}
  </div>
  </section>
);
};  

const Tenis = ({ tenisData }) => {
  return (
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
};

const KpiCard = ({ title, description, value, type, icon }) => (
  <section className={`card kpi-card ${type}`}>
    <div className="kpi-content">
      <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="kpi-percent">{value.toFixed(2)}%</span>
        <div className="kpi-progress-bar">
          <div className="kpi-progress" style={{ width: `${value}%` }}/>
        </div>
      </div>
      <div className="icon">
        <img src={icon || "/placeholder.svg"} alt={`${title} icon`} />
      </div>
    </div>
  </section>
);

const Main = ({ dashboardData }) => {

  const bonesCategory = dashboardData?.categories_performance?.find((cat) => cat.name === "Boné")
  const tenisCategory = dashboardData?.categories_performance?.find((cat) => cat.name === "Tênis")
  const categoriesData = dashboardData?.categories_performance || []

  // Calculate profit percentage from profit analysis
  const profitPercentage = dashboardData?.profit_analysis?.profit_margin || 45

  // Calculate sales percentage (using total_sales change as percentage)
  const salesPercentage = Math.min(100, Math.abs(dashboardData?.overview?.total_sales?.change / 10)) || 45
  console.log(Math.min(100, Math.abs(dashboardData?.overview?.total_sales?.change / 10)))

  // Calculate deficit percentage (inverse of profit for visualization)
  const deficitPercentage = Math.min(100, 100 - profitPercentage) || 45

  return(
  <main className="main-content">
    <TopBar />

    <div className="page-header">
      <h1>Dashboard</h1>
      <p>Gerencie seu negócio por aqui</p>
    </div>

    <div className="dashboard-grid">
      <div className="main-section">
        <Bones bonesData={bonesCategory} />
      <div className="analysis-tenis-container">
          <Analysis categoriesData={categoriesData} />
          <Tenis tenisData={tenisCategory}/>
        </div>
      </div>

    <div className="kpi-container">
  <KpiCard
      title="Lucro"
      description={<>Resumo do lucro<br />baseado no mês</>}
      type="lucro"
      value={profitPercentage}
      icon="./img/lucro.png"
    />
  <KpiCard
      title="Vendas"
      description={<>Resumo das vendas<br />baseado no mês</>}
      type="vendas"
      value={salesPercentage}
      icon="./img/vendas.png"
    />
  <KpiCard
      title="Déficit"
      description={<>Resumo das<br /> despesas do mês</>}
      type="deficit"
      value={deficitPercentage}
      icon="./img/deficit.png"
    />
  </div>
</div>
  </main>
)
};

const Bones = ({ bonesData }) => {

  const boneCategory = bonesData || {}

  const dailyData = boneCategory?.daily_chart?.slice(-8) || []

  const formattedRevenue = boneCategory.formatted_revenue || "$1,200.50"

  return (
  <section className="card bones-card">
    <div className="bones-left">
      <h2>Bonés</h2>
      <p className="subtitle">Valores recebidos</p>
      <div className="bones-value">{formattedRevenue.replace(' ', '')}</div>
      <div className="valor-rs">
        <span className="green-dot" />
        Valor em R$
      </div>
      <p className="bones-description">
        Vendas relacionadas<br />aos produtos da<br />categoria de Bonés
      </p>
    </div>

    <div className="bones-chart">
        {dailyData.map((item, index) => {
          // Extract day from date (format: "DD/MM")
          const day = item.date.split("/")[0]
          // Map day number to abbreviation
          const dayAbbr = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB", "SEG"][index % 8]
          // Calculate value for chart (normalize to range similar to original)
          const chartValue = Math.min(17, Math.max(10, Math.round(Number.parseFloat(item.value) / 100)))

          return (
            <div className="bar-item" key={index}>
              <div className="bar-value">{chartValue}</div>
              <div className="bar purple-bar" style={{ height: `${chartValue * 12}px` }}></div>
              <div className="bar-label">{dayAbbr}</div>
            </div>
          )
        })}
    </div>
  </section>
)
};

export default function Dashboard() {

  const token = localStorage.getItem("token");

  const [dashboardData, setDashboardData] = useState(null)

  //Valida usuário Logado
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || token == null) {
      //Redirecionar se não estiver autenticado
    }
  }, []);

  useEffect(() => {
    const fetchDashboard = async () => {
      // In a real app, this would use the token for authentication
      const response = await getDashboard()  
      if (response.status === 200) {
        const data = await response.json()
        setDashboardData(data.data) // Access the data property from the JSON
        console.log("Dashboard data loaded:", data.data)
      } else {
        throw new Error("Failed to load dashboard data")
      }  
    }

    fetchDashboard()
  }, [token])


  return (
    <div className="container">
      <Sidebar />
      <Main dashboardData={dashboardData} />
    </div>
  );
}