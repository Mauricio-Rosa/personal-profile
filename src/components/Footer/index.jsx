import './styles.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-name">Desenvolvido por mim</p>
        
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
            <FaWhatsapp />
          </a>
          <a href="https://www.linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="mailto:seu@email.com" aria-label="Email">
            <FaInstagram />
          </a>
          <a href="mailto:seu@email.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        
        <p className="footer-copy">
          © {new Date().getFullYear()} Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
