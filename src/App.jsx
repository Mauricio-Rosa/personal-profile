// src/App.jsx
import { BrowserRouter as Router } from "react-router-dom";

// Componentes de layout
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Importa o AppRoutes centralizado
import AppRoutes from "./routes";

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
