import React, { useState } from "react";
import "./ButtonR.css";

function ButtonAz() {
  const [abaSelecionada, setAbaSelecionada] = useState("moradores"); // Inicia com "moradores" como padrão

  const abasHorizontais = ["moradores", "servidor", "visitantes", "veículos", "eventos"];

  return (
    <div className="layout-horizontal">
      {/* Abas Horizontais */}
      <div className="container-horizontal">
        {abasHorizontais.map((aba) => (
          <button
            key={aba}
            className={`botao-horizontal ${abaSelecionada === aba ? "selecionado" : ""}`}
            onClick={() => setAbaSelecionada(aba)} // Seleciona a aba ao clicar
          >
            {aba.charAt(0).toUpperCase() + aba.slice(1)} {/* Texto em maiúscula */}
          </button>
        ))}
      </div>

      
    </div>
  );
}

export default ButtonAz;
