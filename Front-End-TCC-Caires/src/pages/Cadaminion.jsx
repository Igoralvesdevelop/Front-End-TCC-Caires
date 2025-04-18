import "./Cadaminion.css";
import Title from "../components/Title";
import SelectComponent from "../components/SelectComponent";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Cadaminion() {
  const navigate = useNavigate();

  const handleClicks = () => {
    navigate("/Funciocondo");
  };
  return (
    <div class="container teste">
      <div class="other-side">
        <div class="contente-1">
          <Title>Adicionar um novo Condomínio:</Title>
          <div class="photo-circle"></div>
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
            <Title>Endereço:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite seu endereço"
            />
          </div>
          <div className="input-container">
            <Title>CEP:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite o CEP"
            />
          </div>

          <div className="input-container">
            <Title>Ramal:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite o ramal"
            />
          </div>
          <div className="input-container">
            <Title>CPF do síndico:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite seu CPF"
            />
          </div>
          <div className="input-container">
            <Title>CNPJ:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite o CNPJ"
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
          <div className="contente-3"></div>
          <div class="contente-2">
            <div className="button-div">
              <Button
                text="VOLTAR"
                onClick={handleClicks}
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

export default Cadaminion;
