<<<<<<< HEAD
"use client"

import { useState } from "react"
=======
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, use } from "react"
import { listCustomers } from "./services/custumerAPI";
import { listSales } from "./services/saleAPI";
import { listProduct } from "./services/productAPI";
import { initialCustomers } from "./services/custumerInitial";
import { initialProducts } from "./services/productsInitial";
import { initialSales } from "./services/salesInitial";
>>>>>>> 56e04d10b89bbe1160046689791e2cc85e249409
import "./relatorios.css"

const Relatorios = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Abril, 2025")
<<<<<<< HEAD
=======
  const [customers, setCustumers] = useState([]);
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]);
>>>>>>> 56e04d10b89bbe1160046689791e2cc85e249409

  const salesData = [
    { product: "Tênis da Nike", value: "R$ 75.000,00", percentage: 100 },
    { product: "Boné da Nike", value: "R$ 45.000,00", percentage: 60 },
    { product: "Tênis da Adidas", value: "R$ 30.000,00", percentage: 40 },
  ]

<<<<<<< HEAD
  const clientsData = [
    {
      name: "Clebinho Sincero",
      phone: "(14) 98765-1234",
      email: "clebinho.sincero@zapmail.com",
    },
    {
      name: "Jurema da Galáxia",
      phone: "(14) 54321-4321",
      email: "jurema.stars@interplanetario.org",
    },
    {
      name: "Tonhão Supremacy",
      phone: "(14) 12345-4321",
      email: "tonhao.poderoso@supremacia.net",
    },
    {
      name: "Zé do Wi-Fi",
      phone: "(14) 12345-0101",
      email: "zedowifi.conexao@roteador.email",
    },
    {
      name: "Calabreso Silva",
      phone: "(14) 4002-8922",
      email: "calabreso.silva@linguicahot.com",
    },
    {
      name: "Coxinelson Duarte",
      phone: "(14) 00111-1110",
      email: "coxinelson.topzeira@fritemail.com",
    },
    {
      name: "Brunilda Pistola",
      phone: "(14) 7024-2470",
      email: "brunilda.1911@ragezone.com",
    },
    {
      name: "Salsiônio Rocha",
      phone: "(14) 5551-1115",
      email: "salsionio.picante@hotgrill.net",
    },
  ]
=======
  const token = localStorage.getItem("token");

  //Valida usuário Logado
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token || token == null) {
  //     //Redirecionar se não estiver autenticado
  //   }
  // }, []);
  
  //Função de Logout
  const handleLogout = async (e) => {
    e.preventDefault();
    
    localStorage.removeItem('token');
    //Redirecionar para deslogar
  };
  
  useEffect(() => {

    const fetchCostumers = async () => {
      try {
        const response = await listCustomers(token);
    
        if (response.status === 200) {
          const data = await response.json();
          setCustumers(data.data);
        } else {
          throw new Error("Erro ao carregar da API");
        }
      } catch (error) {
        console.warn("Erro ao buscar da API, carregando dados locais...");
    
        setCustumers(initialCustomers().data)
      }
    };
    fetchCostumers();

    // listCustomers(token).then((resposta) => {
    //   if (resposta.status === 200) {
    //     resposta.json().then((custumers) => {
    //       setCustumers(custumers.data);
    //     });
    //   }
    // });
  }, [token]);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await listSales(token);
    
        if (response.status === 200) {
          const data = await response.json();
          setSales(data.data);
        } else {
          throw new Error("Erro ao carregar da API");
        }
      } catch (error) {
        console.warn("Erro ao buscar da API, carregando dados locais...");
    
        setSales(initialSales().data)
      }
    };
      
    fetchSales();

    // listSales(token).then((resposta) => {
    //   if (resposta.status === 200) {
    //     resposta.json().then((sales) => {
    //       setSales(sales.data);
    //     });
    //   }
    // });
  }, [token]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await listProduct(token);
  
        if (response.status === 200) {
          const data = await response.json();
          setProducts(data.data);
        } else {
          throw new Error("Erro ao carregar da API");
        }
      } catch (error) {
        console.warn("Erro ao buscar da API, carregando dados locais...");
  
        setProducts(initialProducts().data)
      }
    };
  
    fetchProducts();
    
    // listProduct(token).then((resposta) => {
    //   if (resposta.status === 200) {
    //     resposta.json().then((products) => {
    //       setProducts(products.data);
    //     });
    //   }
    // });
  }, [token]);


  const processedData = () => {
    // Calculate total sales value

    const paidSales = sales.filter(sale => sale.status === "pago");

    const totalSales = paidSales.reduce((sum, sale) => {
      return sum + Number.parseFloat(sale.price) + Number.parseFloat(sale.shipping || 0)
    }, 0)
    

    // Group sales by product_id and calculate revenue
    const productRevenue = {}
    const productCounts = {}

    sales.forEach((sale) => {
      const productId = sale.product_id
      if (productId) {
        const revenue = Number.parseFloat(sale.price) + Number.parseFloat(sale.shipping || 0)
        productRevenue[productId] = (productRevenue[productId] || 0) + revenue
        productCounts[productId] = (productCounts[productId] || 0) + 1
      }
    })

    // Convert to array and sort by revenue
    const productStats = Object.entries(productRevenue)
      .map(([productId, revenue]) => ({
        productId,
        revenue,
        count: productCounts[productId],
        percentage: (revenue / totalSales) * 100,
      }))
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 5) // Top 5 products

    // Group sales by date for period chart
    const salesByDate = {}
    sales.forEach((sale) => {
      const date = new Date(sale.sale_date).toLocaleDateString("pt-BR")
      salesByDate[date] = (salesByDate[date] || 0) + Number.parseFloat(sale.price)
    })

    // Payment method statistics
    const paymentMethods = {}
    sales.forEach((sale) => {
      const method = sale.payment_method
      paymentMethods[method] = (paymentMethods[method] || 0) + 1
    })

    // Status statistics
    const statusStats = {}
    sales.forEach((sale) => {
      const status = sale.status
      statusStats[status] = (statusStats[status] || 0) + 1
    })

    return {
      totalSales,
      productStats,
      salesByDate,
      paymentMethods,
      statusStats,
      totalOrders: sales.length,
    }
  }

  const stats = processedData();

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  const getProductName = (productId) => {
    const productNames = Object.fromEntries(
      products.map(product => [product.id, product.name])
    );
    return productNames[productId] || `Produto ${productId}`
  }

>>>>>>> 56e04d10b89bbe1160046689791e2cc85e249409

  return (
    <div className="container">
      <nav className="sidebar">
<<<<<<< HEAD
        <div className="sidebar-content">
          <div className="logo">
            <img src="/img/logobiz.png" alt="Logo Biz ERP" />
            <h3>biz.erp</h3>
          </div>
          <ul className="menu">
            <li>
              <a href="/dashboard">
                <img src="/img/Home.png" alt="Dashboard" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/produtos">
                <img src="/img/Category.png" alt="Produtos" />
                <span>Produtos</span>
              </a>
            </li>
            <li className="active">
              <a href="/relatorios">
                <img src="/img/Document.png" alt="Relatórios" />
                <span>Relatórios</span>
              </a>
            </li>
            <li>
              <a href="/vendas">
                <img src="/img/Bag.png" alt="Vendas" />
                <span>Vendas</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="logout">
          <a href="#">
            <img src="/img/logout.png" alt="Logout" />
            Logout
          </a>
        </div>
      </nav>

=======
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
          <li><Link to="/clientes"><img src="./img/clientes.png" alt="clientes" />Clientes</Link></li>
        </ul>
        <ul className="logout">
          <li onClick={handleLogout}><Link to="/"><img src="../img/logout.png" alt="" /><span>Logout</span></Link></li>
        </ul>
      </nav>


>>>>>>> 56e04d10b89bbe1160046689791e2cc85e249409
      <main className="content">
        <header className="header-container">
          <div className="header-left">
            <h1 className="page-title">Relatórios</h1>
<<<<<<< HEAD
          </div>
          <div className="period-center">
            <span className="period-label">Período</span>
            <span className="period-value">{selectedPeriod}</span>
=======
            <div className="period-selector">
              <span className="period-label">Período</span>
              <span className="period-value">{selectedPeriod}</span>
            </div>
>>>>>>> 56e04d10b89bbe1160046689791e2cc85e249409
          </div>
          <div className="user-info">
            <span>Calabreso Silva</span>
            <img
              className="avatar"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"
              alt="Avatar"
            />
            <div className="dropdown-arrow">▼</div>
          </div>
        </header>

        <div className="report-header">
          <h2 className="report-title">Relatório de vendas mensal</h2>
          <div className="report-actions">
            <button className="action-button share-button">
<<<<<<< HEAD
              <svg
                className="action-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 5.12548 15.0077 5.24917 15.0227 5.37061L8.08261 9.18838C7.54305 8.46153 6.7317 8 5.8 8C4.14315 8 2.8 9.34315 2.8 11C2.8 12.6569 4.14315 14 5.8 14C6.7317 14 7.54305 13.5385 8.08261 12.8116L15.0227 16.6294C15.0077 16.7508 15 16.8745 15 17C15 18.6569 16.3431 20 18 20C19.6569 20 21 18.6569 21 17C21 15.3431 19.6569 14 18 14C17.0683 14 16.257 14.4615 15.7174 15.1884L8.77735 11.3706C8.79229 11.2492 8.8 11.1255 8.8 11C8.8 10.8745 8.79229 10.7508 8.77735 10.6294L15.7174 6.81162C16.257 7.53847 17.0683 8 18 8Z"
                  fill="currentColor"
                />
              </svg>
              Compartilhar
            </button>
            <button className="action-button export-button">
              <svg
                className="action-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 16L12 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 13L11.913 15.913V15.913C11.961 15.961 12.039 15.961 12.087 15.913V15.913L15 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 15L3 16L3 19C3 20.1046 3.89543 21 5 21L19 21C20.1046 21 21 20.1046 21 19L21 16L21 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
=======
              <span>🔗</span>
              Compartilhar
            </button>
            <button className="action-button export-button">
              <span>📤</span>
>>>>>>> 56e04d10b89bbe1160046689791e2cc85e249409
              Exportar
            </button>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="chart-section total-sales">
            <h3 className="section-title">Total de vendas</h3>
<<<<<<< HEAD
            <div className="total-value">R$150.000,00</div>
            <div className="horizontal-chart">
              {salesData.map((item, index) => (
                <div key={index} className="chart-bar" style={{ width: `${item.percentage}%` }}>
                  <span className="bar-value">100</span>
=======
            <div className="total-value">{formatCurrency(stats.totalSales)}</div>
            <div className="horizontal-chart">
              {stats.productStats.slice(0, 3).map((product, index) => (
                <div
                  key={product.productId}
                  className="chart-bar"
                  style={{ width: `${Math.max(10, product.percentage)}%` }}
                >
                  <span className="bar-value">{Math.round(product.percentage)}%</span>
>>>>>>> 56e04d10b89bbe1160046689791e2cc85e249409
                </div>
              ))}
            </div>
          </div>

          <div className="chart-section products-sold">
            <h3 className="section-title">Produtos Vendidos</h3>
            <div className="vertical-chart">
              <div className="chart-container">
                <div className="y-axis">
                  <span>500</span>
                  <span>400</span>
                  <span>300</span>
                  <span>200</span>
                  <span>100</span>
                  <span>0</span>
                </div>
                <div className="bars-container">
<<<<<<< HEAD
                  <div className="bar-group">
                    <div className="bar" style={{ height: "80%" }}></div>
                    <span className="bar-label">Tênis da Nike</span>
                  </div>
                  <div className="bar-group">
                    <div className="bar" style={{ height: "60%" }}></div>
                    <span className="bar-label">Boné da Nike</span>
                  </div>
                  <div className="bar-group">
                    <div className="bar" style={{ height: "40%" }}></div>
                    <span className="bar-label">Tênis da Adidas</span>
                  </div>
=======
                {stats.productStats.slice(0, 3).map((product, index) => {
                    const maxCount = Math.max(...stats.productStats.map((p) => p.count))
                    const height = (product.count / maxCount) * 100
                    return (
                      <div key={product.productId} className="bar-group">
                        <div className="bar" style={{ height: `${height}%` }}>
                          <span className="bar-count">{product.count}</span>
                        </div>
                        <span className="bar-label">{getProductName(product.productId)}</span>
                      </div>
                    )
                  })}
>>>>>>> 56e04d10b89bbe1160046689791e2cc85e249409
                </div>
              </div>
            </div>
          </div>

          <div className="chart-section revenue-product">
<<<<<<< HEAD
            <h3 className="section-title">Receita por produto</h3>
            <div className="product-list">
              {salesData.map((item, index) => (
                <div key={index} className="product-item">
                  <span className="product-name">{item.product}</span>
                  <span className="product-value">{item.value.replace("R$ ", "R$ ")}</span>
=======
            <h3 className="section-title">Receita por produto (Top 5)</h3>
            <div className="product-list">
              {stats.productStats.slice(0, 5).map((product, index) => (
                <div key={product.productId} className="product-item">
                  <span className="product-name">{getProductName(product.productId)}</span>
                  <span className="product-value">{formatCurrency(product.revenue)}</span>
>>>>>>> 56e04d10b89bbe1160046689791e2cc85e249409
                </div>
              ))}
            </div>
          </div>

          <div className="chart-section revenue-period">
<<<<<<< HEAD
            <h3 className="section-title">Receita por Período</h3>
            <div className="line-chart">
              <div className="chart-container">
                <div className="y-axis">
                  <span>800</span>
                  <span>600</span>
                  <span>400</span>
                  <span>200</span>
                  <span>0</span>
                </div>
                <div className="line-container">
                  <svg className="line-svg" viewBox="0 0 300 150">
                    <polyline
                      points="0,120 30,100 60,80 90,60 120,70 150,50 180,40 210,60 240,45 270,35 300,40"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                    />
                  </svg>
=======
            <h3 className="section-title">Resumo das Vendas</h3>
            <div className="period-stats">
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-label">Métodos de Pagamento</span>
                  <div className="payment-methods">
                    {Object.entries(stats.paymentMethods).map(([method, count]) => (
                      <div key={method} className="payment-item">
                        <span className="method-name">{method.toUpperCase()}</span>
                        <span className="method-count">{count}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Status dos Pedidos</span>
                  <div className="status-stats">
                    {Object.entries(stats.statusStats).map(([status, count]) => (
                      <div key={status} className="status-item">
                        <span className={`status-badge ${status}`}>{status.toUpperCase()}</span>
                        <span className="status-count">{count}</span>
                      </div>
                    ))}
                  </div>
>>>>>>> 56e04d10b89bbe1160046689791e2cc85e249409
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clients-section">
          <h3 className="section-title">
            <span className="client-icon">👤</span>
<<<<<<< HEAD
            Clientes
          </h3>
          <div className="clients-grid">
            {clientsData.slice(0, 8).map((client, index) => (
=======
            Clientes ({customers.length})
          </h3>
          <div className="clients-grid">
            {customers.map((client, index) => (
>>>>>>> 56e04d10b89bbe1160046689791e2cc85e249409
              <div key={index} className="client-item">
                <div className="client-name">{client.name}</div>
                <div className="client-phone">{client.phone}</div>
                <div className="client-email">{client.email}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Relatorios
