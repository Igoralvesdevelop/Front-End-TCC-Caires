import "./Cadanario.css";
import Title from "../components/Title";
import SelectComponent from '../components/SelectComponent'; 
import Button from '../components/Button'
import DropdownWithRadios from "../components/Dropdown";
import PickDate from "../components/PickDate";
import { useNavigate } from "react-router-dom";

function Cadanario() {

  const navigate = useNavigate();
  
    const handleClick = () => {
      navigate("/Funciocondo");
    };
  return (
    <div class="container teste">
      
      <div class="other-side">
        <div class="contente-1">
        <Title>Adicionar um novo Funcionário:</Title>
        <div class="photo-circle">
        </div>

        </div>

       
      </div>

      <div className="direita-side">
        <div className="putbu">
          <div className="input-container">
            <Title>Nome:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite seu nome"
            />
          </div>

          <div className="input-container">
            <Title>CPF:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite seu CPF"
            />
          </div>
          <div className="input-container">
            <Title>Data de Nascimento:</Title>
            <PickDate />
          </div>

          <div className="input-container">
            <Title>Gênero:</Title>
          <DropdownWithRadios></DropdownWithRadios>
          </div>
          <div className="input-container">
            <Title>Telefone:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite seu telefone"
            />
          </div>

          <div className="input-container">
            <Title>Senha:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite sua senha"
            />
          </div>
          
          <div>
    
      <SelectComponent />
    </div>
    <div className="contente-3"></div>
    <div class="contente-2">
          <div className="button-div">
            <Button
              text="VOLTAR"
              onClick={handleClick}
               // Função de clique
            />
          
          <Button
              text="CADASTRAR"
              onClick={() => alert("Botão clicado!")}
              // Função de clique
            />
          </div>
        </div>
      </div>
      </div>

    </div>
  );
}

export default Cadanario;
