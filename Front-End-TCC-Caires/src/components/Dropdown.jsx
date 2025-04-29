import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import "./Dropdown.css";

const DropdownWithRadios = () => {
  const { register } = useFormContext();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="dropdown">
      <ul className="dropdown-options">
        <li>
          <label>
            <input
              type="radio"
              name="genero"
              value="Feminino"
              onChange={handleOptionChange}
              {...register("genero", { required: true })}
            />
            Feminino
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="genero"
              value="Masculino"
              onChange={handleOptionChange}
              {...register("genero", { required: true })}
            />
            Masculino
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="genero"
              value="Outro"
              onChange={handleOptionChange}
              {...register("genero", { required: true })}
            />
            Outro
          </label>
        </li>
      </ul>
    </div>
  );
};

export default DropdownWithRadios;
