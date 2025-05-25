import React from "react";
import "./impressao.css"; // Certifique-se de usar o CSS que você forneceu
import cairesd from "../assets/cairesd.png";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Impressao() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Telainicial");
  };

  return (
    <div class="container">
      <div class="oeste-side">
        <div class="content-1">
          {" "}
          <img src={cairesd} alt="Logo" className="cd-cad" />
        </div>
        <div class="busca-2">
          <div className="div-a">
            <div className="busca-contain">
              <IoIosSearch size={20} color="black" className="input-icon" />
              <input
                type="text"
                className="input-fiels"
                placeholder="procurar"
              />
            </div>
          </div>
          <div class="div-but">
            <button className="custom-button-cad31">ACESSAR</button>
          </div>
        </div>
      </div>

      <div class="right-side">
        {/* <div className="log-div">
            <img src={cairesd} alt="Logo" className="cd-cad" />
        </div> */}

        <div className="buput"></div>
        <div className="div-button21">
          <button className="custom-button-cad12" onClick={handleClick}>
            VOLTAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default Impressao;
