import "./styles.css";
import { getExperienceTime } from "../../utils/experienceCounter";

function About() {
  const experience = getExperienceTime();

  return (
    <section className="about-section">
      <div className="about-card">
        <div className="about-header">
          <img
            src="src\assets\favicon\android-chrome-512x512.png"
            alt="Foto de perfil"
            className="about-photo"
          />
          <div className="about-info">
            <h1 className="about-name">{import.meta.env.VITE_NAME}</h1>
          <h2 className="about-title">{import.meta.env.VITE_CURRENT_ROLE} na {import.meta.env.VITE_CURRENT_COMPANY}</h2>
            <p className="about-location">{import.meta.env.VITE_CURRENT_LOCATION}</p>
          </div>
        </div>

        <div className="about-summary">
          <p>
            Apresento-me como um profissional com mais de {experience} de experiência
            nas áreas de automação e engenharia elétrica, com habilidades em
            ferramentas como IBA, PIMS, AutoCAD, MS Project, Python, VMware,
            entre outras. Tenho conhecimento em gestão de projetos e qualidade,
            incluindo indicadores de desempenho (KPIs), 5S, Kanban, planners
            etc.
            <br />
            <br />
            Atualmente, atuo como {import.meta.env.VITE_CURRENT_ROLE} na {import.meta.env.VITE_CURRENT_COMPANY}, no setor
            de logística portuária de minério de ferro, sendo responsável pelo
            detalhamento e engenharia de soluções.
            <br />
            <br />
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
      <img className="img-signature" src="src\assets\assinatura.png" alt="" srcset="" />
      </div>
    </section>
  );
}

export default About;
