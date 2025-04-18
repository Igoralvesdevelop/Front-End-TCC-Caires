import React from "react";
import "./Login.css"; // Certifique-se de usar o CSS que você forneceu
import caires from "../assets/caires.png";
import { IoIosFingerPrint } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Telainicial");
  };

  const Cadastre = () => {
    navigate("/Funciocondo");
  };
  

  return (
    <div class="container">
      <div class="left-side">
        <div class="content-1">
          <img src={caires} alt="Logo" className="img-cad" />
        </div>

        <div class="content-2">
          <div className="div-a">
            <h1 className="text2-cad">
              Bem-vindo ao <br></br>Caires!
            </h1>
          </div>
          <div className="text1-cad">Cadastre sua conta.</div>
          <div class="button-div">
            <button className="custom-button-cad" onClick={Cadastre}>
              CADASTRE-SE
            </button>
          </div>
        </div>
      </div>

      <div class="right-side">
        <div className="login-div">
        <h1 className="login-cad">LOGIN</h1>
        </div>

       <div className="buput">
        <div className="input-cad1">
          <MdOutlineMail size={30} color="black" className="icon-email" />
          <input type="text" className="input-field-cad" placeholder="Email:" />
          
        </div>

        <div className="input1-cad">
          <IoIosFingerPrint size={30} color="black" className="icon-password" />
          <input
            type="password"
            className="input-field-cad"
            placeholder="Senha:" 
          />
         
        </div>
         </div>
        <div className="div-button2">
        <button className="custom-button-cad1" onClick={handleClick}>
          ENTRAR
        </button>
       
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
