import React, { useState } from "react";
import "./ButtonAz.css";

function ButtonAz() {
  const [abaSelecionada, setAbaSelecionada] = useState("início");

  const abas = ["início", "registros", "pedidos"];

  return (
<div className="layout-lateral">
      <div className="container-vertical">
        {abas.map((aba) => (
          <button
            key={aba}
            className={`botao-vertical ${abaSelecionada === aba ? "selecionado" : ""}`}
            onClick={() => setAbaSelecionada(aba)}
          >

<span className="texto-rotacionado">
              {aba.charAt(0).toUpperCase() + aba.slice(1)}
            </span>
          </button>
        ))}
      </div>


      </div>

  );
}

export default ButtonAz;