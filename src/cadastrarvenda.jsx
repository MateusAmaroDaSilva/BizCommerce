import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { listCustomers } from "./services/custumerAPI";
import { listProduct } from "./services/productAPI";
import { initialCustomers } from "./services/custumerInitial";
import { initialProducts } from "./services/productsInitial";
import "./cadastrarvenda.css"
import { postSales } from "./services/saleAPI";

const CadastrarVenda = () => {
  const [custumers, setCustumers] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState("Pagamento")
  const [selectedClient, setSelectedClient] = useState(null)
  const [clientId, setClientId] = useState(null)
  const [clientName, setClientName] = useState(null)
  const [clientEmail, setClientEmail] = useState("")
  const [clientPhone, setClientPhone] = useState("")
  const [address, setAddress] = useState(null)
  const [city, setCity] = useState(null)
  const [state, setState] = useState(null)
  const [cep, setCep] = useState(null)
  const [saleDate, setSaleDate] = useState(null)
  const [selectedProducts, setSelectedProducts] = useState(null)
  const [quantity, setQuantity] = useState(40)
  const [paymentMethod, setPaymentMethod] = useState("cartao")
  const [cardFlag, setCardFlag] = useState(null)
  const [saleStatus, setSaleStatus] = useState("Pendente")
  const [salePrice, setSalePrice] = useState(null)
  const normalize = (str) =>
    str.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

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


  const imgStatus = (saleStatus) => {
    if(saleStatus === "Pago"){
      return <span className="status-badge pago">Pago</span>
    }
    if(saleStatus === "Pendente"){
      return <span className="status-badge pendente">Pendente</span>
    }
    else{
      return <span className="status-badge cancelado">Cancelado</span>
    }
  }

  // Handle client selection and auto-fill form fields
  const handleClientSelection = (e) => {
    const clientId = e.target.value
    setSelectedClient(clientId)

    if (clientId) {
      // Find the selected customer in the customers array
      const selectedCustomer = custumers.find((customer) => customer.id.toString() === clientId)

      if (selectedCustomer) {
        // Auto-fill form fields with customer data
        setClientId(clientId)
        setClientName(selectedCustomer.name)
        setClientEmail(selectedCustomer.email)
        setClientPhone(selectedCustomer.phone)

        // Parse address to extract components
        const addressParts = parseAddress(selectedCustomer.address)

        setAddress(addressParts.street)
        setCity(addressParts.city)
        setState(addressParts.state)
        setCep(addressParts.cep)
      }
    } else {
      // Clear form fields if no customer is selected
      clearCustomerFields()
    }
  }

  // Helper function to parse address string into components
  const parseAddress = (addressString) => {
    // Exemplo do formato do Endereço: "57074-698, Av. Deverso, 3\nVila Bárbara do Sul - MG"
    try {
      const parts = {}

      // Extract CEP (postal code)
      const cepMatch = addressString.match(/(\d{5}-\d{3})/)
      parts.cep = cepMatch ? cepMatch[0] : ""

      // Extract street address (everything before the newline)
      const addressLines = addressString.split("\n")
      parts.street = addressLines[0].replace(/^\d{5}-\d{3},\s*/, "").trim()

      // Extract city and state from the second line
      if (addressLines.length > 1) {
        const cityStateParts = addressLines[1].split(" - ")
        parts.city = cityStateParts[0].trim()
        parts.state = cityStateParts.length > 1 ? cityStateParts[1].trim() : ""
      } else {
        parts.city = ""
        parts.state = ""
      }

      return parts
    } catch (error) {
      console.error("Error parsing address:", error)
      return { street: addressString, city: "", state: "", cep: "" }
    }
  }

  // Clear all customer-related form fields
  const clearCustomerFields = () => {
    setClientName("")
    setClientEmail("")
    setClientPhone("")
    setAddress("")
    setCity("")
    setState("")
    setCep("")
  }

  // Add product to cart
  const addCart = async (e) => {
    e.preventDefault()

    // Validation
    if (!selectedProducts) {
      alert("Por favor, selecione um produto")
      return
    }

    if (quantity <= 0) {
      alert("A quantidade deve ser maior que zero")
      return
    }

    // Find the selected product
    const selectedProduct = products.find((product) => product.id.toString() === selectedProducts)

    if (!selectedProduct) {
      alert("Produto não encontrado")
      return
    }

    // Check if product is already in cart
    const existingCartItemIndex = cart.findIndex((item) => item.id === selectedProduct.id)

    if (existingCartItemIndex !== -1) {
      // Update quantity if product already exists in cart
      const updatedCart = [...cart]
      updatedCart[existingCartItemIndex].quantity += quantity
      updatedCart[existingCartItemIndex].subtotal =
        updatedCart[existingCartItemIndex].quantity * Number.parseFloat(selectedProduct.price)
      setCart(updatedCart)
    } else {
      // Add new product to cart
      const cartItem = {
        id: selectedProduct.id,
        name: selectedProduct.name,
        brand: selectedProduct.brand,
        price: Number.parseFloat(selectedProduct.price),
        quantity: quantity,
        subtotal: quantity * Number.parseFloat(selectedProduct.price),
      }
      setCart([...cart, cartItem])
    }

    // Reset form
    setSelectedProducts("")
    setQuantity(1)
  }

  // Remove item from cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId)
    setCart(updatedCart)
  }

  // Calculate total cart value
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.subtotal, 0)
  }

  // Format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }


  const handleRegister = async (e) => {
    e.preventDefault();

    const customer_id = clientId;
    const price = {calculateTotal};
    const shipping = ((price / 100) * 2)
    const status = saleStatus;
    const payment_method = paymentMethod === "cartao" ? cardFlag : paymentMethod;
    const sale_date = saleDate;
  
    const requestBody = {
      customer_id,
      price,
      shipping,
      status,
      payment_method,
      sale_date
    };
    console.log(requestBody)
    
    const result = await postSales(token, requestBody);
    if (result.status === 201 || result.status === 200) {
      // Idealmente use React Router
    }
    else {
       alert("Produto de Cadastro Invalido")
    }
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
          <li><Link to="/clientes"><img src="./img/clientes.png" alt="clientes" />Clientes</Link></li>
        </ul>
        <ul className="logout">
          <li><Link to="/"><img src="../img/logout.png" alt="" /><span>Logout</span></Link></li>
        </ul>
      </nav>


      <main className="content">
        <header className="header-container">
          <div className="header-left">
            <button className="back-button">
              <span>←</span>
            </button>
            <h1 className="page-title">Cadastrar Venda</h1>
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

        <div className="form-container">
          <div className="form-section">
            <h2 className="section-title">Dados do Cliente</h2>

            <div className="form-group">
            <label>Selecionar Cliente *</label>
              <select value={selectedClient} onChange={handleClientSelection} className="form-select">
                <option value="">Selecione um cliente</option>
                {custumers.map((customer) => (
                  <option key={customer.id} value={customer.id}>
                    {customer.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Nome do cliente</label>
              <input
                type="text"
                placeholder="Nome completo"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="text" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} placeholder="Email" className="form-input" />
            </div>

            <div className="form-group">
              <label>Telefone</label>
              <input type="text" placeholder="Número de Telefone" value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} className="form-input" />
            </div>

            <div className="form-group">
              <label>Endereço</label>
              <input
                type="text"
                placeholder="Rua, número, complemento"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Cidade</label>
                <input
                  type="text"
                  placeholder="Cidade"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Estado</label>
                <input
                  type="text"
                  placeholder="UF"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label>CEP</label>
              <input
                type="text"
                placeholder="00000-000"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                className="form-input"
              />
            </div>
          </div>

          <div className="form-section">
            <h2 className="section-title">Produtos</h2>

            <div className="form-group">
              <label>Data da Venda *</label>
              <input
                type="date"
                placeholder="Informe a data"
                value={saleDate}
                onChange={(e) => setSaleDate(e.target.value)}
                className="form-input date-input"
              />
            </div>

            <div className="form-group">
              <label>Adicionar Produtos</label>
              <div className="product-row">
              <select
                  value={selectedProducts}
                  onChange={(e) => setSelectedProducts(e.target.value)}
                  className="form-select product-select"
                >
                  <option value="">Selecione os produtos</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
                <div className="quantity-container">
                  <label>Qtd.</label>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="quantity-input"
                  />
                  <button className="add-button" onClick={addCart}>+</button>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Produtos Selecionados</label>
              <div className="selected-products">
              {cart.length === 0 ? (
                  <p>Nenhum produto adicionado</p>
                ) : (
                  <div className="cart-items">
                    {cart.map((item) => (
                      <div key={item.id} className="cart-item">
                        <div className="cart-item-info">
                          <div className="cart-item-name">
                            <strong>{item.name} (Qtd.{item.quantity})</strong>
                            <span className="cart-item-brand">{item.brand}</span>
                          </div>
                          <div className="cart-item-price">{formatCurrency(item.price)}</div>
                        </div>
                        <div className="cart-item-controls">
                          <div className="cart-item-subtotal">{formatCurrency(item.subtotal)}</div>
                          <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                            ×
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="total-section">
              <div className="total-row">
                <span className="total-label">Total:</span>
                <span className="total-value">{formatCurrency(calculateTotal())}</span>
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="tabs">
              <button
                className={`tab ${activeTab === "Pagamento" ? "active" : ""}`}
                onClick={() => setActiveTab("Pagamento")}
              >
                Pagamento
              </button>
              <button
                className={`tab ${activeTab === "Detalhes" ? "active" : ""}`}
                onClick={() => setActiveTab("Detalhes")}
              >
                Detalhes
              </button>
            </div>

            {activeTab === "Pagamento" && (
              <div className="tab-content">
                <div className="form-group">
                  <label>Método de Pagamento *</label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-select"
                  >
                    <option value="cartao">Cartão de Crédito</option>
                    <option value="pix">PIX</option>
                    <option value="dinheiro">Dinheiro</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Bandeira *</label>
                  <select value={cardFlag} onChange={(e) => setCardFlag(e.target.value)} disabled={paymentMethod !== "cartao"} className="form-select">
                    {paymentMethod === "cartao" ? <option value="mastercard">Mastercard</option> : <option value="disabilitado">--------------------------------</option>}
                    <option value="visa">Visa</option> 
                  </select>
                </div>

                <div className="form-group">
                  <label>Status da Venda *</label>
                  <div className="status-container">
                    {imgStatus(saleStatus)}
                    <select
                      value={saleStatus}
                      onChange={(e) => setSaleStatus(e.target.value)}
                      className="form-select status-select"
                    >
                      <option value="Pendente">Pagamento pendente</option>
                      <option value="Pago">Pagamento confirmado</option>
                      <option value="Cancelado">Pagamento cancelado</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Detalhes" && (
              <div className="tab-content">
                <p>Conteúdo da aba Detalhes</p>
              </div>
            )}
          </div>
        </div>

        <div className="form-actions">
          <button className="cancel-button">Cancelar</button>
          <button className="submit-button" onClick={handleRegister}>Finalizar Venda</button>
        </div>
      </main>
    </div>
  )
}

export default CadastrarVenda
