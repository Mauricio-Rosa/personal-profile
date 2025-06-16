// src/pages/Automacao/index.jsx
import useHelmetMeta from "@/hooks/useHelmetMeta";
import Article from "@/components/Article";

import Microscópio from "@/assets/a_webp/microscópio.webp";
import Laser from "@/assets/a_webp/laser.webp";
import PowerMeter from "@/assets/a_webp/Power Meter.webp";

import CTRL_GIR_EMP_1 from "@/assets/a_webp/CTRL_GIR_EMP_1.webp";
import CTRL_GIR_EMP_2 from "@/assets/a_webp/CTRL_GIR_EMP_2.webp";
import CTRL_GIR_EMP_3 from "@/assets/a_webp/CTRL_GIR_EMP_3.webp";
import CTRL_GIR_EMP_4 from "@/assets/a_webp/CTRL_GIR_EMP_4.webp";
import CTRL_GIR_EMP_5 from "@/assets/a_webp/CTRL_GIR_EMP_5.webp";

import CTRL_FLUX_1 from "@/assets/a_webp/CTRL_FLUX_1.webp";
import CTRL_FLUX_2 from "@/assets/a_webp/CTRL_FLUX_2.webp";
import CTRL_FLUX_3 from "@/assets/a_webp/CTRL_FLUX_3.webp";
import CTRL_FLUX_4 from "@/assets/a_webp/CTRL_FLUX_4.webp";
import CTRL_FLUX_5 from "@/assets/a_webp/CTRL_FLUX_5.webp";

import "./styles.css";

function Automation() {
  const helmet = useHelmetMeta({
    title: "Automation | Mauricio F.R.",
    description:
      "Testes em fibras ópticas são essenciais para garantir a qualidade e confiabilidade das conexões ópticas, utilizando ferramentas como microscópios, lasers e power meters.",
  });
  return (
    <>
      {helmet}
      <div id="content">
        <Article
          title="Testes em fibras ópticas"
          subtitle="A importância dos testes em fibras ópticas"
          date="15/06/2025"
          images={[Microscópio, Laser, PowerMeter]}
          imagePosition="right"
          content="O uso do microscópio para fibra óptica é essencial para garantir a qualidade e a confiabilidade das conexões ópticas. Esse instrumento permite inspecionar com precisão as faces dos conectores, identificando arranhões, sujeiras ou imperfeições que podem comprometer seriamente o desempenho da rede. Mesmo pequenas partículas de poeira ou danos microscópicos podem causar perda de sinal, reflexões indesejadas (refração) e até falhas de comunicação. Ao utilizar o microscópio, os técnicos conseguem realizar limpezas preventivas e assegurar que os conectores estejam em perfeitas condições antes da instalação ou manutenção, aumentando a vida útil do sistema e reduzindo o tempo de inatividade. Em resumo, ele é uma ferramenta indispensável para manter altos padrões de performance e confiabilidade em redes ópticas.
        "
        />
        <Article
          title="Controle de Giro das Empilhadeiras"
          subtitle="Aumento de controle de risco crítico"
          date="01/11/2024"
          images={[
            CTRL_GIR_EMP_1,
            CTRL_GIR_EMP_2,
            CTRL_GIR_EMP_3,
            CTRL_GIR_EMP_4,
            CTRL_GIR_EMP_5,
          ]}
          imagePosition="left"
          content={
            <>
              <p>
                <strong>Objetivo</strong>
                <p>
                  Redução de riscos de desmoronamento Criação de pilhas com alta
                  estabilidade
                </p>
                <br />
                <strong>Ações realizadas</strong>
                <ul>
                  <li>Avaliação da formação das pilhas no pátio</li>
                  <li>
                    Criação de modelo matemático do empilhamento do minério
                  </li>
                  <li>Implementação do controle nas empilhadeiras</li>
                  <li>Testes de validação do algoritmo</li>
                  <li>Consolidação dos resultados obtidos</li>
                </ul>
              </p>
              <br />
              <p>
                Este projeto, conduzido pela equipe de PCP e Automação, trouxe
                melhorias substanciais para a segurança operacional, ao
                centralizar e otimizar o fluxo de queda do material das
                empilhadeiras. Com isso, alcançamos uma formação de pilhas mais
                estáveis, o que contribuiu diretamente para a mitigação de um
                dos riscos críticos do terminal: o desmoronamento no pátio. Esse
                avanço não só reforça a segurança, mas também proporcionou um
                ganho adicional de capacidade de armazenamento no estoque, o que
                otimiza ainda mais nossas operações. O comprometimento e a
                excelência na execução demonstrados pela equipe foram
                determinantes para o sucesso deste projeto.
              </p>
            </>
          }
        />
        <Article
          title="Controle de fluxo de minério"
          subtitle="Veja o projeto de controle de fluxo de uma recuperadora de minério de ferro que ganhou o prêmio de terceiro lugar na Abraman (Associação Brasileira de Manutenção e Gestão de Ativos)"
          date="03/03/2023"
          images={[
            CTRL_FLUX_1,
            CTRL_FLUX_2,
            CTRL_FLUX_3,
            CTRL_FLUX_4,
            CTRL_FLUX_5,
          ]}
          imagePosition="right"
          content={
            <>
              <p>
                <strong>Objetivo</strong>
                <p>
                  Aumento de segurança operacional e controle de risco crítico e
                  aumento de produção anual
                </p>
                <br />
                <strong>Ações realizadas</strong>
                <ul>
                  <li>Avaliação doe padronização de operação</li>
                  <li>
                    Criação de algoritmo de malha para o controlador da máquina
                  </li>
                  <li>Implementação do controle em uma recuperadora</li>
                  <li>Testes de validação de performance</li>
                  <li>Consolidação dos resultados obtidos</li>
                </ul>
              </p>
              <br />
              <p>
                Uma vez realizado ajustes iniciais, o sistema foi posto em teste
                alguns minutos durante a operação de embarque do dia 02/03/2023,
                onde obtivemos comparativo de comportamento da variável a ser
                controlada antes e depois.
                <br />
                No dia seguinte, 03/03/2023 o controlador foi ativado por volta
                de 10h28 e partir de então foram realizados constantes ajustes
                para melhoria do desempenho do sistema.
                <br />
                Ao analisar dados estatísticos de histogramas e ocorrências de
                picos por faixas de vazão, ficou bem evidente que o sistema
                contribui de forma considerável na segurança do ativo e das
                pessoas envolvidas no processo, e consequentemente também
                colabora para o aumento da produtividade.
              </p>
            </>
          }
        />
      </div>
    </>
  );
}

export default Automation;
