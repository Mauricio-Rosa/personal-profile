// src/pages/Automacao/index.jsx
import "./styles.css";
import useHelmetMeta from "@/hooks/useHelmetMeta";
import Article from "@/components/Article";

import MANUT30_1 from "@/assets/a_webp/MANUT30_1.webp";
import MANUT30_2 from "@/assets/a_webp/MANUT30_2.webp";
import MANUT30_3 from "@/assets/a_webp/MANUT30_3.webp";
import MANUT30_4 from "@/assets/a_webp/MANUT30_4.webp";
import MANUT30_5 from "@/assets/a_webp/MANUT30_5.webp";
import MANUT30_6 from "@/assets/a_webp/MANUT30_6.webp";
import MANUT30_7 from "@/assets/a_webp/MANUT30_7.webp";

function Agile() {
  const helmet = useHelmetMeta({
    title: "Agile | Mauricio F.R.",
    description:
      "Conheça o aplicativo Manutenção 30, uma solução inovadora para otimizar a gestão de manutenção na Ferroport, desenvolvida por mim. Alem disso, descubra como ele melhora a eficiência operacional e a qualidade no atendimento às demandas de manutenção.",
  });
  return (
    <>
    {helmet}
    <div>
      <Article
        title="Manutenção 30!"
        subtitle="O aplicativo low code que revoluciona a gestão de manutenção da Ferroport"
        date="29/03/2024"
        images={[
          MANUT30_1,
          MANUT30_2,
          MANUT30_3,
          MANUT30_4,
          MANUT30_5,
          MANUT30_6,
          MANUT30_7,
        ]}
        imagePosition="right"
        content={
          <>
            <p>
              O aplicativo Manutenção 30 é uma solução inovadora desenvolvida
              para otimizar a gestão de manutenção na Ferroport. Com uma
              interface intuitiva e recursos avançados, ele permite que os
              usuários registrem e acompanhem ordens de serviço de forma
              eficiente, garantindo que as manutenções sejam realizadas dentro
              dos prazos estabelecidos. Através de um sistema de notificações,
              os responsáveis são alertados sobre as tarefas pendentes,
              facilitando o planejamento e a execução das atividades. Além
              disso, o aplicativo oferece relatórios detalhados sobre o
              desempenho das manutenções, permitindo uma análise precisa e a
              identificação de oportunidades de melhoria. Com o Manutenção 30, a
              Ferroport está elevando seus padrões de eficiência operacional e
              qualidade no atendimento às demandas de manutenção.
            </p>
            <p>
              <strong>📌 Qual problema ele resolve?</strong>
              <br />O aplicativo Manutenção 30 resolve o desafio de gerenciar e
              acompanhar as ordens de serviço de manutenção de forma eficiente,
              garantindo que as tarefas sejam concluídas dentro dos prazos
              estabelecidos. Ele elimina a necessidade de processos manuais e
              papelada, proporcionando uma solução digital que melhora a
              comunicação entre os responsáveis e facilita o planejamento das
              atividades.
            </p>
            <p>
            <strong>⚙️ Como funciona?</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>
                O usuário acessa o aplicativo e registra uma nova ordem de
                serviço, preenchendo os detalhes necessários.
              </li>
              <li>
                A ordem de serviço é enviada para os responsáveis, que recebem
                notificações sobre as tarefas pendentes.
              </li>
              <li>
                Os responsáveis podem atualizar o status da ordem de serviço à
                medida que as atividades são concluídas.
              </li>
              <li>
                O aplicativo gera relatórios detalhados sobre o desempenho das
                manutenções, permitindo uma análise precisa e identificação de
                oportunidades de melhoria.
              </li>
            </ul>
          </>
        }
      />
    </div>
    </>
  );
}

export default Agile;
