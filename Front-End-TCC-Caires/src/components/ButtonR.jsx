import React, { useState } from "react";
import "./ButtonR.css";

function ButtonR() {
  const [abaSelecionada, setAbaSelecionada] = useState("moradores");

  const abasHorizontais = ["moradores", "servidor", "visitantes", "veículos", "eventos"];

  return (
    <div className="layoute-lateral">
      {/* Abas Verticais */}
      <div className="container-horizontal">
        {abasHorizontais.map((aba) => (
          <button
            key={aba}
            className={`botao-horizontal ${abaSelecionada === aba ? "selecionado" : ""}`}
            onClick={() => setAbaSelecionada(aba)}
          >
            <span className="texto-rotacionado">
              {aba.charAt(0).toUpperCase() + aba.slice(1)}
            </span>
          </button>
        ))}
      </div>

      <div className="conteudo">
       
      </div>
    </div>
  );
}

export default ButtonR;
