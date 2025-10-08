import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import ComoFunciona from "./pages/comoFunciona/ComoFunciona.jsx";
import Metodologia from "./pages/metodologia/Metodologia.jsx";
import SobreNos from "./pages/sobreNos/SobreNos.jsx";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            {/* Página inicial abre diretamente "Como Funciona" */}
            <Route path="/" element={<ComoFunciona />} />

            <Route path="/ComoFunciona" element={<ComoFunciona />} />
            <Route path="/Metodologia" element={<Metodologia />} />
            <Route path="/SobreNos" element={<SobreNos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;