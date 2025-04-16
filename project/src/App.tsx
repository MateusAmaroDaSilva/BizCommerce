import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  History, 
  ShoppingCart, 
  Settings, 
  LogOut,
  TrendingUp,
  DollarSign,
  ShoppingBag
} from 'lucide-react';

function App() {
  return (
    <div className="flex h-screen bg-[#1a1a1a] text-white">
      {/* Sidebar */}
      <div className="w-64 bg-[#242424] p-4">
        <div className="flex items-center gap-2 mb-8">
          <TrendingUp className="h-6 w-6 text-purple-500" />
          <span className="font-bold text-xl">biz.erp</span>
        </div>
        
        <nav className="space-y-2">
          <SidebarItem icon={<LayoutDashboard />} text="Dashboard" active />
          <SidebarItem icon={<Package />} text="Produtos" />
          <SidebarItem icon={<History />} text="Histórico" />
          <SidebarItem icon={<ShoppingCart />} text="Vendas" />
          <SidebarItem icon={<Settings />} text="Settings" />
        </nav>

        <div className="absolute bottom-4">
          <SidebarItem icon={<LogOut />} text="Logout" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-400">Visualize seu negócio por aqui</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Bonus Chart */}
          <div className="bg-[#242424] p-6 rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-gray-400 mb-2">Bônus</h2>
                <p className="text-3xl font-bold">$1,200.50</p>
                <p className="text-sm text-gray-400">Período: maio/2023</p>
              </div>
              <div className="bg-green-500/20 p-2 rounded-lg">
                <DollarSign className="h-5 w-5 text-green-500" />
              </div>
            </div>
            <div className="h-48 flex items-end gap-2">
              {[35, 28, 45, 38, 42, 44, 45].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-purple-600 rounded-t-md"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>

          {/* Analysis Section */}
          <div className="bg-[#242424] p-6 rounded-xl">
            <h2 className="text-gray-400 mb-4">Análises</h2>
            <p className="text-3xl font-bold mb-6">1200.50</p>
            <div className="space-y-4">
              <ProgressBar label="Help" value={45} color="bg-purple-600" />
              <ProgressBar label="Error" value={35} color="bg-red-500" />
              <ProgressBar label="Acerto" value={45} color="bg-green-500" />
            </div>
          </div>
        </div>

        {/* Tennis Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 bg-[#242424] p-6 rounded-xl">
            <h2 className="text-gray-400 mb-4">Tênis</h2>
            <div className="grid grid-cols-2 gap-4">
              <MetricCard
                title="SEO"
                value="10k"
                change="+8.5%"
                icon={<TrendingUp className="h-5 w-5" />}
              />
              <MetricCard
                title="TER"
                value="10m"
                change="+12%"
                icon={<ShoppingBag className="h-5 w-5" />}
              />
            </div>
          </div>

          {/* Side Stats */}
          <div className="space-y-4">
            <StatCard title="Lucro" value="45%" icon={<DollarSign />} color="bg-green-500" />
            <StatCard title="Vendas" value="45%" icon={<ShoppingCart />} color="bg-purple-600" />
            <StatCard title="Déficit" value="45%" icon={<TrendingUp />} color="bg-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, text, active = false }) {
  return (
    <div className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer transition-colors
      ${active ? 'bg-purple-600' : 'hover:bg-[#303030]'}`}>
      {icon}
      <span>{text}</span>
    </div>
  );
}

function ProgressBar({ label, value, color }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 bg-[#303030] rounded-full">
        <div className={`h-full ${color} rounded-full`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function MetricCard({ title, value, change, icon }) {
  return (
    <div className="bg-[#303030] p-4 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-400">{title}</span>
        {icon}
      </div>
      <p className="text-xl font-bold">{value}</p>
      <p className="text-green-500 text-sm">{change}</p>
    </div>
  );
}

function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-[#242424] p-4 rounded-xl flex items-center gap-4">
      <div className={`${color}/20 p-2 rounded-lg`}>
        <div className={`${color.replace('bg-', 'text-')}`}>
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-gray-400">{title}</h3>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}

export default App;