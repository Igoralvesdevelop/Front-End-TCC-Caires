
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ButtonAz.css";

function ButtonAz() {
  const navigate = useNavigate();
  const [abaSelecionada, setAbaSelecionada] = useState("início"); // Estado para aba ativa

  const abas = [
    { nome: "início", rota: "/inicio" },
    { nome: "registros", rota: "/registros" },
    { nome: "pedidos", rota: "/pedidos" }
  ];

  return (
    <div className="layout-lateral">
      <div className="container-vertical">
        {abas.map((aba) => (
          <button
            key={aba.nome}
            className={`botao-vertical ${abaSelecionada === aba.nome ? "selecionado" : ""}`}
            onClick={() => {
              setAbaSelecionada(aba.nome);
              navigate(aba.rota);
            }}
          >
            <span className="texto-rotacionado">
              {aba.nome.charAt(0).toUpperCase() + aba.nome.slice(1)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ButtonAz;
