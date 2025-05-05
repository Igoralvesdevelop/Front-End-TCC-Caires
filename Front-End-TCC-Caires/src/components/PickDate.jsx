import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function PickDate() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="input-container">
      <DatePicker
        className="input-fields" 
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)} // Atualiza a data selecionada
        dateFormat="dd/MM/yyyy" // Formato da data
        isClearable // Permite limpar a seleção
        placeholderText="Selecione uma data"
      />
    </div>
  );
}

export default PickDate;
