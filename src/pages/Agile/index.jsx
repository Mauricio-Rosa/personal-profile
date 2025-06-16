// src/pages/Automacao/index.jsx
import "./styles.css";
import Article from "@/components/Article";

import MANUT30_1 from "@/assets/Agiles/Manut30/MANUT30_1.png";
import MANUT30_2 from "@/assets/Agiles/Manut30/MANUT30_2.png";
import MANUT30_3 from "@/assets/Agiles/Manut30/MANUT30_3.jpeg";
import MANUT30_4 from "@/assets/Agiles/Manut30/MANUT30_4.jpeg";
import MANUT30_5 from "@/assets/Agiles/Manut30/MANUT30_5.jpeg";
import MANUT30_6 from "@/assets/Agiles/Manut30/MANUT30_6.jpeg";
import MANUT30_7 from "@/assets/Agiles/Manut30/MANUT30_7.jpeg";

function Agile() {
  return (
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
  );
}

export default Agile;
