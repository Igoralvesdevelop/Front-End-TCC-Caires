import React from "react";
import { useHistorico } from "../context/HistoricoContext";
import ButtonAz from "../components/ButtonAz";

function AcessosLiberados() {
  const { historicoConsultas } = useHistorico();

  return (
    <div className="container" style={{padding: 32}}>
      <ButtonAz text="VOLTAR" onClick={() => window.history.back()} />
      <h2 style={{marginTop: 24}}>Acessos Liberados</h2>
      {historicoConsultas.length === 0 ? (
        <p>Nenhum acesso liberado registrado.</p>
      ) : (
        <table style={{width: '100%', marginTop: 24, borderCollapse: 'collapse'}}>
          <thead>
            <tr style={{background: '#f0f0f0'}}>
              <th style={{padding: 8, border: '1px solid #ccc'}}>Nome</th>
              <th style={{padding: 8, border: '1px solid #ccc'}}>ID</th>
              <th style={{padding: 8, border: '1px solid #ccc'}}>Apartamento</th>
              <th style={{padding: 8, border: '1px solid #ccc'}}>Bloco</th>
              <th style={{padding: 8, border: '1px solid #ccc'}}>Data/Hora</th>
            </tr>
          </thead>
          <tbody>
            {historicoConsultas.slice().reverse().map((m, idx) => (
              <tr key={idx}>
                <td style={{padding: 8, border: '1px solid #ccc'}}>{m.nome}</td>
                <td style={{padding: 8, border: '1px solid #ccc'}}>{m.id_morador}</td>
                <td style={{padding: 8, border: '1px solid #ccc'}}>{m.apartamento}</td>
                <td style={{padding: 8, border: '1px solid #ccc'}}>{m.bloco}</td>
                <td style={{padding: 8, border: '1px solid #ccc'}}>{m.dataHora || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AcessosLiberados;
