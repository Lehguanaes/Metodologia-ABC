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
            <Route
              path="/"
              element={
                <>
                  <h1 className="text-3xl font-bold text-600">Bem-vindo!</h1>
                  <p className="mt-4 text-gray-700">
                    Aqui vai o conteúdo principal do seu sistema.
                  </p>
                </>
              }
            />
           
        
            <Route path="/ComoFunciona" element={<ComoFunciona />} />
                        <Route path="/Metodologia" element={<Metodologia />} />
                            <Route path="/SobreNos" element={<SobreNos/>} />


          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
