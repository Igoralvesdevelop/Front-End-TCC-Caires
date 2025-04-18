import Title from "../components/Title";
import SelectComponent from '../components/SelectComponent'; 
import Button from '../components/Button'
import DropdownWithRadios from "../components/Dropdown";


function MoradoresC() {
  return (
    <div class="container teste">
      
      <div class="other-side">
        <div class="contente-1">
        <Title>Adicionar um novo Morador:</Title>
        <div class="photo-circle">
        </div>

        </div>

        <div class="contente-2">
          <div className="button-div">
            <Button
              text="VOLTAR"
              onClick={() => alert("Botão clicado!")} // Função de clique
            />
          
          <Button
              text="CADASTRAR"
              onClick={() => alert("Botão clicado!")} // Função de clique
            />
          </div>
        </div>
      </div>

      <div className="direita-side">
        <div className="tamanho"></div>
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
              placeholder="Digite seu endereço"
            />
          </div>
          <div className="input-container">
            <Title>Data de Nascimento:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite seu nome"
            />
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
              placeholder="Digite seu nome"
            />
          </div>
          <div className="input-container">
            <Title>Apartamento:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite seu nome"
            />
          </div>
          <div className="input-container">
            <Title>Bloco:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite seu nome"
            />
          </div>
          <div className="input-container">
            <Title>Ramal:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite seu nome"
            />
          </div>
          <div className="input-container">
            <Title>Email:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite seu nome"
            />
          </div>
          <div className="input-container">
            <Title>Senha:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite seu nome"
            />
          </div>
         
          <div>
    
    </div>
        
        </div>
      </div>
    </div>
  );
}

export default MoradoresC;
