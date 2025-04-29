import React from "react";
import { useFormContext } from "react-hook-form";
import "./SelectComponent.css";

const SelectComponent = () => {
  const { register } = useFormContext();

  return (
    <div className="select-container">
      <label htmlFor="nivel_acesso" className="label-select">Nível de acesso:</label>
      <select
        id="nivel_acesso"
        className="select-field"
        {...register("nivel_acesso", { required: true })}
      >
        <option value="" disabled>Selecione</option>
        <option value="Funcionario">Funcionário</option>
        <option value="Sindico">Síndico</option>

      </select>
    </div>
  );
};

export default SelectComponent;
