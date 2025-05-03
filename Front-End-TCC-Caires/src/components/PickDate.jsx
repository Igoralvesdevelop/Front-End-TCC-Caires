import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function PickDate() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleInputChange = (event) => {
    const inputDate = event.target.value; 

    // Regex para validar apenas formato DD/MM/YYYY
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

    if (dateRegex.test(inputDate)) {
      const [day, month, year] = inputDate.split("/");
      const parsedDate = new Date(`${year}-${month}-${day}`); // Ajusta para YYYY-MM-DD
      
      if (!isNaN(parsedDate.getTime())) {
        setSelectedDate(parsedDate);
      }
    }
  };

  return (
    <div className="input-container">
      <DatePicker
        className="input-fields"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy" // Mantém o formato correto
        isClearable
        placeholderText="Selecione uma data"
        customInput={
          <input
            type="text"
            className="input-fields"
            placeholder="DD/MM/YYYY"
            onChange={handleInputChange}
            value={selectedDate ? selectedDate.toLocaleDateString("pt-BR") : ""}
          />
        }
      />
    </div>
  );
}

export default PickDate;
