import About from "@/pages/About";
import Automacao from "@/pages/Automation";
import Agile from "@/pages/Agile";
import Programming from "@/pages/Programming";
import Contact from "@/pages/Contact";

// Rotas centralizadas
const ROUTES = {
  ABOUT: {
    path: "/",
    element: <About />,
    label: "Sobre",
  },
  AUTOMACAO: {
    path: "/automation",
    element: <Automacao />,
    label: "Automação",
  },
  AGILE: {
    path: "/agile",
    element: <Agile />,
    label: "Agile",
  },
  PROGRAMMING: {
    path: "/programming",
    element: <Programming />,
    label: "Programming",
  },
  CONTACT: {
    path: "/contact",
    element: <Contact />,
    label: "Contact",
  },
  LOGOUT: {
    path: "/logout",
    label: "Sair",
  },
};

// Array com apenas rotas que têm componente React definido (para uso com <Routes>)
export const routes = Object.values(ROUTES).filter((r) => r.element);

export default ROUTES;
