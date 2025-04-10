import React, { useState } from 'react';
import { saveAs } from 'file-saver';

export default function App() {
  const [tema, setTema] = useState("");
  const [paginas, setPaginas] = useState("");
  const [resposta, setResposta] = useState("");
  const [loading, setLoading] = useState(false);

  const gerarTrabalho = () => {
    setLoading(true);
    setResposta("Gerando trabalho...");

    setTimeout(() => {
      const texto = `📘 Trabalho de Pesquisa\n\nTema: ${tema}\n\n[INTRODUÇÃO]\nO presente trabalho discute o tema '${tema}', com base em estudos recentes e fontes científicas.\n\n[DESENVOLVIMENTO]\nAnálise crítica do tema com dados, autores e contexto atual.\n\n[CONCLUSÃO]\nConclui-se que o tema '${tema}' é de grande relevância, exigindo atenção da comunidade científica.\n\nReferências:\n- SILVA, João. Introdução à Pesquisa Acadêmica. São Paulo: Atlas, 2020.\n- ONU. Relatório sobre Desenvolv...
      setResposta(texto);
      setLoading(false);
    }, 2000);
  };

  const baixarArquivo = (formato) => {
    const blob = new Blob([resposta], {
      type: formato === 'pdf' ? 'application/pdf' : 'application/msword'
    });
    saveAs(blob, `Trabalho_${tema}.${formato}`);
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>🧠 AM Tecnologia - Geração Inteligente de Trabalhos</h1>
      <input
        placeholder="Digite o tema do trabalho"
        value={tema}
        onChange={(e) => setTema(e.target.value)}
      /><br/>
      <input
        placeholder="Número de páginas"
        type="number"
        value={paginas}
        onChange={(e) => setPaginas(e.target.value)}
      /><br/>
      <button onClick={gerarTrabalho} disabled={loading}>
        {loading ? "Gerando..." : "Gerar Trabalho"}
      </button>
      {resposta && (
        <div>
          <textarea rows={10} cols={80} value={resposta} readOnly /><br/>
          <button onClick={() => baixarArquivo('doc')}>Baixar Word</button>
          <button onClick={() => baixarArquivo('pdf')}>Baixar PDF</button>
        </div>
      )}
    </div>
  );
}
