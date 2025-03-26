import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Produto from "./produto";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/produto" element={<Produto />} />
      </Routes>
    </Router>
  );
}

export default App;
