// src/pages/Automacao/index.jsx
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import Article from "@/components/Article";

import Microscópio from "@/assets/fibraOptica/microscópio.jpeg";
import Laser from "@/assets/fibraOptica/laser.jpg";
import PowerMeter from "@/assets/fibraOptica/Power Meter.jpg";

import "./styles.css";

function Automation() {
  return (
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
    </div>
  );
}

export default Automation;
