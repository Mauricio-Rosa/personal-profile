// src/pages/About/About.jsx
import "./styles.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";

import PI from "@/constants/personalInfo";
import { getExperienceTime } from "@/utils/experienceCounter";

import profileImage from "@/assets/favicon/android-chrome-512x512.png";
import abramanImage from "@/assets/premio abraman.jpg";
import assinatura from "@/assets/assinatura.png";

function About() {
  const experience = getExperienceTime();
  const imgRef = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
    const imgElement = imgRef.current;
    if (!imgElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imgElement.classList.add("animate-scale-up-hor-left");
          observer.unobserve(imgElement);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(imgElement);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section">
      <div className="about-card">
        <div className="about-header">
          <img
            src={profileImage}
            alt="Foto de perfil"
            className="about-photo"
          />
          <div className="about-info">
            <h1 className="about-name">{PI.NAME}</h1>
            <h2 className="about-title">
              {PI.CURRENT_ROLE} na{" "}
              {PI.CURRENT_COMPANY}
            </h2>
            <p className="about-location">
              {PI.CURRENT_LOCATION}
            </p>
          </div>
        </div>

        <div className="about-summary">
          <p>
            Apresento-me como um profissional com mais de {experience} de
            experiência nas áreas de automação e engenharia elétrica, com
            habilidades em ferramentas como IBA, PIMS, AutoCAD, MS Project,
            Python, VMware, entre outras. Tenho conhecimento em gestão de
            projetos e qualidade, incluindo indicadores de desempenho (KPIs),
            5S, Kanban, planners etc.
            <br />
            <br />
            Atualmente, atuo como {PI.CURRENT_ROLE} na{" "}
            {PI.CURRENT_COMPANY}, no setor de logística
            portuária de minério de ferro, sendo responsável pelo detalhamento e
            engenharia de soluções.
            <br />
            <img
              ref={imgRef}
              className="img-abraman"
              src={abramanImage}
              alt="Premiação ABRAMAN"
            />
            Fui premiado com o terceiro lugar na convenção nacional de
            manutenção de 2024 da Associação Brasileira de Manutenção (ABRAMAN),
            referente ao ano de 2023, com o projeto "Controle de fluxo e
            sobrecarga de minério de ferro em um recuperador, utilizando
            algoritmo de controle e malha PI".
            <br />
            <br />
            Além disso, possuo experiência no relacionamento com clientes e
            fornecedores, incluindo internacionais, validação de projetos,
            desenvolvimento de escopo, planos de projeto e detalhamento técnico
            de desenhos. Já fui responsável pela contratação de serviços
            terceirizados e pela execução de projetos CAPEX e OPEX, participando
            de todo o processo.
            <br />
            <br />
            Gostaria também de destacar minha participação integral na comissão
            de partida do inversor de média tensão MVW-01, com treinamento
            realizado na sede da WEG e cursos internos. Sou um dos principais
            pontos focais responsáveis por inversores, além de disseminar
            conhecimento para toda a equipe de manutenção elétrica.
            <br />
            <br />
            Estou à disposição para fornecer mais informações e conversar sobre
            como posso contribuir com sua equipe.
          </p>
        </div>

        <img
          className="img-signature"
          src={assinatura}
          alt="Assinatura"
        />

        <section className="funnels">
          <div className="funnel">
            <h3>Automação Industrial</h3>
            <p>
              Conheça meus projetos com inversores, CLPs e sistemas como IBA e
              PIMS.
            </p>
            <button
              className="cta-button"
              onClick={() => navigate("/automation")}
            >
              Explorar automação
            </button>
          </div>

          <div className="funnel">
            <h3>Métodos Ágeis</h3>
            <p>
              Experiência com 5S, Kanban, gestão de indicadores e cultura de
              melhoria contínua.
            </p>
            <button
              className="cta-button"
              onClick={() => navigate("/agile")}
            >
              Ver minha atuação ágil
            </button>
          </div>

          <div className="funnel">
            <h3>Programação & Soluções Digitais</h3>
            <p>
              Criação de soluções em Python, React, Power Apps e automações com
              Power Automate.
            </p>
            <button
              className="cta-button"
              onClick={() => navigate("/code")}
            >
              Acessar soluções digitais
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
