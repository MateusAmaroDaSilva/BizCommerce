import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, use } from "react"
import { listCustomers } from "./services/custumerAPI";
import { listSales } from "./services/saleAPI";
import { listProduct } from "./services/productAPI";
import { initialCustomers } from "./services/custumerInitial";
import { initialProducts } from "./services/productsInitial";
import { initialSales } from "./services/salesInitial";
import "./relatorios.css"

const Relatorios = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Abril, 2025")
  const [customers, setCustumers] = useState([]);
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]);

  const salesData = [
    { product: "Tênis da Nike", value: "R$ 75.000,00", percentage: 100 },
    { product: "Boné da Nike", value: "R$ 45.000,00", percentage: 60 },
    { product: "Tênis da Adidas", value: "R$ 30.000,00", percentage: 40 },
  ]

  const token = localStorage.getItem("token");

  //Valida usuário Logado
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || token == null) {
      //Redirecionar se não estiver autenticado
    }
  }, []);
  
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
          <li><Link to="/categorias"><img src="../img/etiqueta.png" alt="Categotia" /><span>Categorias</span></Link></li>
          <li><Link to="/relatorios"><img src="../img/Document.png" alt="" /><span>Relatórios</span></Link></li>
          <li><Link to="/vendas"><img src="../img/Bag.png" alt="" /><span>Vendas</span></Link></li>
          <li><Link to="/clientes" className="categoria-menu-item active"><img src="./img/clientes.png" alt="clientes" />Clientes</Link></li>
        </ul>
        <ul className="logout">
          <li onClick={handleLogout}><Link to="/"><img src="../img/logout.png" alt="" /><span>Logout</span></Link></li>
        </ul>
      </nav>


      <main className="content">
        <header className="header-container">
          <div className="header-left">
            <h1 className="page-title">Relatórios</h1>
            <div className="period-selector">
              <span className="period-label">Período</span>
              <span className="period-value">{selectedPeriod}</span>
            </div>
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
              <span>🔗</span>
              Compartilhar
            </button>
            <button className="action-button export-button">
              <span>📤</span>
              Exportar
            </button>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="chart-section total-sales">
            <h3 className="section-title">Total de vendas</h3>
            <div className="total-value">{formatCurrency(stats.totalSales)}</div>
            <div className="horizontal-chart">
              {stats.productStats.slice(0, 3).map((product, index) => (
                <div
                  key={product.productId}
                  className="chart-bar"
                  style={{ width: `${Math.max(10, product.percentage)}%` }}
                >
                  <span className="bar-value">{Math.round(product.percentage)}%</span>
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
                </div>
              </div>
            </div>
          </div>

          <div className="chart-section revenue-product">
            <h3 className="section-title">Receita por produto (Top 5)</h3>
            <div className="product-list">
              {stats.productStats.slice(0, 5).map((product, index) => (
                <div key={product.productId} className="product-item">
                  <span className="product-name">{getProductName(product.productId)}</span>
                  <span className="product-value">{formatCurrency(product.revenue)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="chart-section revenue-period">
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clients-section">
          <h3 className="section-title">
            <span className="client-icon">👤</span>
            Clientes ({customers.length})
          </h3>
          <div className="clients-grid">
            {customers.map((client, index) => (
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
