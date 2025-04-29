import React, { useState } from 'react';
import './SelectComponent.css';
import Title from "./Title"
const SelectComponent = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="select-container">
      <label htmlFor="select" className="label-select">Nível de acesso:</label>
      <select
        id="select"
        value={selectedOption}
        onChange={handleChange}
        className="select-field"
      >
        <option value="" disabled>Selecione</option>
        <option value="funcionário">Funcionário</option>
        <option value="síndico">Síndico</option>
      </select>


      {/* Renderiza inputs adicionais se "síndico" for selecionado */}
      {selectedOption === 'síndico' && (
        <div className="input-container">
          <div className="inpute-container">
          <Title>CNPJ do Condomínio:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite o CNPJ"
            />
          </div>
         

         
        </div>
      )}
    </div>
  );
};

export default SelectComponent;
