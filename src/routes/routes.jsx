import About from "@/pages/About";
import Automacao from "@/pages/Automacao";

// Rotas centralizadas
const ROUTES = {
  ABOUT: {
    path: "/personal-profile/about",
    element: <About />,
    label: "Sobre",
  },
  AUTOMACAO: {
    path: "/personal-profile/automacao",
    element: <Automacao />,
    label: "Automação",
  },
  LOGOUT: {
    path: "/logout",
    label: "Sair",
  },
};

// Array com apenas rotas que têm componente React definido (para uso com <Routes>)
export const routes = Object.values(ROUTES).filter((r) => r.element);

export default ROUTES;
