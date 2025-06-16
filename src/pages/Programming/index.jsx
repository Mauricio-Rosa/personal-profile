// src/pages/Automacao/index.jsx
import Article from "@/components/Article";
import "./styles.css";

import Analise from "@/assets/a_webp/analise.webp";
import Dashboard from "@/assets/a_webp/dashboard.webp";
import UploadArquivos from "@/assets/a_webp/uploadArquivos.webp";
import Variaveis from "@/assets/a_webp/variaveis.webp";

import ITR_GEN1 from "@/assets/a_webp/Inicio.webp";
import ITR_GEN2 from "@/assets/a_webp/exemploEtapa.webp";
import ITR_GEN3 from "@/assets/a_webp/manualIncorporado.webp";
import ITR_GEN4 from "@/assets/a_webp/selecao.webp";

function Programming() {
  return (
    <div>
      <Article
        title="Logix Force manager Pro"
        subtitle="A importância do controle de forces no controle de processos"
        date="15/01/2025"
        images={[Dashboard, Analise, UploadArquivos, Variaveis]}
        imagePosition="right"
        content="O uso do microscópio para fibra óptica é essencial para garantir a qualidade e a confiabilidade das conexões ópticas. Esse instrumento permite inspecionar com precisão as faces dos conectores, identificando arranhões, sujeiras ou imperfeições que podem comprometer seriamente o desempenho da rede. Mesmo pequenas partículas de poeira ou danos microscópicos podem causar perda de sinal, reflexões indesejadas (refração) e até falhas de comunicação. Ao utilizar o microscópio, os técnicos conseguem realizar limpezas preventivas e assegurar que os conectores estejam em perfeitas condições antes da instalação ou manutenção, aumentando a vida útil do sistema e reduzindo o tempo de inatividade. Em resumo, ele é uma ferramenta indispensável para manter altos padrões de performance e confiabilidade em redes ópticas.
              "
      />
      <Article
        title=" ITR Generator"
        subtitle="Automatizando a criação de documentos técnicos com eficiência e padronização"
        date="05/03/2025"
        images={[ITR_GEN1, ITR_GEN2, ITR_GEN3, ITR_GEN4]}
        imagePosition="left"
        content={
          <>
            <p>
              Na área de automação industrial, elaborar ITRs (Instruções
              Técnicas de Rotina) e procedimentos operacionais é uma tarefa
              recorrente — e muitas vezes repetitiva. Pensando nisso, desenvolvi
              o <strong>ITR Generator</strong>, um software feito em Python com
              interface gráfica que transforma arquivos .txt e imagens em
              documentos técnicos formatados e padronizados automaticamente.
            </p>
            <p>
              <strong>📌 Qual problema ele resolve?</strong>
              <br />
              Em muitas empresas, a elaboração de ITRs é feita manualmente,
              consumindo tempo e gerando inconsistências visuais. Cada
              colaborador pode seguir um padrão diferente, dificultando a
              leitura e a padronização documental — o que impacta diretamente na
              eficiência operacional e na qualidade da informação.
            </p>
            <p>
              <strong>⚙️ Como funciona?</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>
                O usuário seleciona um arquivo .txt contendo o conteúdo da
                instrução.
              </li>
              <li>
                Adiciona imagens (como prints de CLPs, telas de HMI ou esquemas
                elétricos).
              </li>
              <li>Clica em “Gerar ITR”.</li>
              <li>
                O software monta automaticamente um documento estruturado com
                layout profissional, com numeração automática, cabeçalhos e
                imagens posicionadas corretamente.
              </li>
            </ul>
            <p>
              ✅ Tecnologias: Python, customtkinter, python-docx, estrutura MVC.
            </p>
          </>
        }
      />
    </div>
  );
}

export default Programming;
