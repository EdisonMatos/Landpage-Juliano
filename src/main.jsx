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
