import { Link } from "react-router-dom";
import './styles.css';
import { FaUserGraduate, FaTools, FaCode } from "react-icons/fa";
import { SiRockwellautomation } from "react-icons/si";
import { IoCallSharp } from "react-icons/io5";
import ROUTES from "@/routes/routes";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to={ROUTES.ABOUT.path} className="nav-link">
            <FaUserGraduate className="nav-icon" />
            <span className="nav-label">Sobre</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={ROUTES.AUTOMACAO.path} className="nav-link">
            <SiRockwellautomation className="nav-icon" />
            <span className="nav-label">Automação</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={ROUTES.AGILE.path} className="nav-link">
            <FaTools className="nav-icon" />
            <span className="nav-label">Ágeis</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={ROUTES.PROGRAMMING.path} className="nav-link">
            <FaCode className="nav-icon" />
            <span className="nav-label">Programação</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={ROUTES.CONTACT.path} className="nav-link">
            <IoCallSharp className="nav-icon" />
            <span className="nav-label">Contato</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
