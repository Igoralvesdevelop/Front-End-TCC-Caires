import React from "react";
import "./Dropdown.css";

const DropdownWithRadios = ({ value = "", onChange = () => {} }) => {
  const options = ["Feminino", "Masculino", "Outro"];

  return (
    <div className="dropdown">
      <ul className="dropdown-options">
        {options.map((opt) => (
          <li key={opt}>
            <label>
              <input
                type="radio"
                name="genero"
                value={opt}
                checked={value === opt}
                onChange={(e) => onChange(e.target.value)}
              />
              {opt}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownWithRadios;
