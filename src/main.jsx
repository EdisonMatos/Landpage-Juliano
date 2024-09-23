import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Index from "./pages/Index.jsx";
import LPTrabalhista from "./pages/LPTrabalhista.jsx";
import LPPrevidenciario from "./pages/LPPrevidenciario.jsx";

import "./index.css";
import "./styles/backgrounds.css";
import "./styles/shapeDivs.css";

function App() {
  return (
    <>
      <Helmet>
        <title>Dr. Juliano Aleixo - Site</title>
        <meta
          name="description"
          content="Dr. Juliano Aleixo é advogado em Cacoal - RO."
        />
        <meta
          name="keywords"
          content="Advogado Previdenciário Cacoal,
          Direito Ambiental Cacoal,
          Consultoria Jurídica Previdenciária,
          Defesa Ambiental,
          Serviços Jurídicos em Cacoal,
          Dr. Juliano Aleixo,
          Advocacia Especializada em Previdência,
          Direito Ambiental em Rondônia,
          Consultoria Ambiental Cacoal,
          Advocacia Previdenciária Rondônia,
          Direito Ambiental Rondônia,
          Ação Previdenciária Cacoal,
          Proteção Jurídica Ambiental,
          Defesa de Direitos Previdenciários,
          Serviços Jurídicos Ambientais,
          Direito de Seguridade Social Cacoal,
          Consultoria em Seguros e Previdência,
          Advocacia para Questões Ambientais em Cacoal,
          Atendimento Jurídico Especializado Cacoal,
          Direitos Previdenciários em Rondônia,"
        />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/trabalhista" element={<LPTrabalhista />} />
          <Route path="/previdenciario" element={<LPPrevidenciario />} />
        </Routes>
      </Router>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
