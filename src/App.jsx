//importação de bibliotecas
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importação de componentes
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// importação de páginas
import About from "./pages/About";

function App() {
  /*
    Componente principal do aplicativo.
    Este componente define as rotas e estrutura básica da aplicação.
    Ele inclui o cabeçalho, a navegação, o conteúdo principal e o rodapé.
    As rotas são definidas usando o React Router, permitindo a navegação entre diferentes páginas.
  */
  return (
    <Router>
      <Header />
      <Navigation />
      <main>
        <Routes>
          <Route path="/personal-profile/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
