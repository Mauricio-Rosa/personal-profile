// src/pages/Automacao/index.jsx
import { useState } from 'react';
import Modal from '@/components/Modal';
import "./styles.css";

function Automation() {
const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <button onClick={openModal}>Abrir Modal</button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Título do Modal"
        severity="info" // Parâmetro de criticidade
      >
        <p>Este é o conteúdo do modal com criticidade de aviso.</p>
      </Modal>
    </div>
  );
}

export default Automation;
