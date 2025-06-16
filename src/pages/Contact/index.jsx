// src/pages/Automacao/index.jsx
import useHelmetMeta from "@/hooks/useHelmetMeta";
import React, { useRef, useEffect, useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import emailjs from "emailjs-com";
import PI from "@/constants/personalInfo";
import LINKS from "@/constants/ExternalLinks";
import "./styles.css";

function Contact() {
    const helmet = useHelmetMeta({
    title: "Contact | Mauricio F.R.",
    description:
      "Conheça a trajetória profissional de Maurício Freire Rosa, especialista em automação, engenharia elétrica e desenvolvimento de soluções digitais com Python, javascript, React e Power Platform.",
  });

  const form = useRef();
  const closeModal = () => setModalOpen(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    severity: "",
  });

  // Inicializa o EmailJS uma vez quando o componente monta
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    // Envia o formulário usando o método sendForm do EmailJS
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Substitua pelo seu Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Substitua pelo seu Template ID
        form.current
      )
      .then(
        (result) => {
          setModalContent({
            title: "Mensagem enviada com sucesso!",
            message: `Recebi sua mensagem, obrigado pelo contato!\n\n${result.text}`,
            severity: "success",
          });
          setModalOpen(true);
        },
        (error) => {
          setModalContent({
            title: "Erro ao enviar mensagem",
            message: `Erro ao enviar mensagem. Tente novamente mais tarde.\n\n${error.text}`,
            severity: "error",
          });
          setModalOpen(true);
        }
      );
  };

  return (
    <>
    {helmet}
    <section className="contact">
      {/* Título da seção */}
      <h1 className="contact-title">Entre em Contato</h1>

      {/* Descrição */}
      <p className="contact-description">
        Ficarei feliz em ouvir de você! Preencha o formulário abaixo ou entre em
        contato diretamente.
      </p>

      {/* Formulário de contato */}
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <label htmlFor="name" className="form-label">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          placeholder="Insira o seu nome"
          required
        />

        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          placeholder="Iinsira o seu email"
          required
        />

        <label htmlFor="message" className="form-label">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          placeholder="Digite sua mensagem aqui"
          required
        ></textarea>

        <Button text="Enviar" type="submit" className="form-button" />
      </form>

      {/* Informações de contato direto */}
      <div className="contact-info">
        <h1>Ou se preferir, pelas redes sociais</h1>
        <div className="social-links">
          <a
            className="a-contact-info"
            href={LINKS.WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Whatsapp"
          >
            <FaWhatsapp className="contact-icon" />
            <span>Whatsapp</span>
          </a>
          <a
            className="a-contact-info"
            href={LINKS.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="contact-icon" />
            <span>Linkedin</span>
          </a>
          <a
            className="a-contact-info"
            href={LINKS.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="contact-icon" />
            <span>Github</span>
          </a>
          <a
            className="a-contact-info"
            href={LINKS.INSTAGRAM}
            aria-label="Instagram"
          >
            <FaInstagram className="contact-icon" />
            <span>Instagram</span>
          </a>
        </div>
      </div>

      {/* Mapa de localização */}
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170125.41908862995!2d-41.47784323233956!3d-21.776742460528403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdd5d1be81b545%3A0xee97b136e7168ee1!2sCampos%20dos%20Goytacazes%2C%20RJ!5e1!3m2!1spt-BR!2sbr!4v1749945194445!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Localização"
          referrerPolicy="no-referrer"
        ></iframe>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent.title}
        severity={modalContent.severity}
      >
        <p>{modalContent.message}</p>
      </Modal>
    </section>
    </>
  );
}

export default Contact;
