import "./MoradoresR.css";
import cairesa from "../../assets/cairesazul.png";
import { IoIosSearch } from "react-icons/io";
import ButtonR from "../../components/ButtonR";
import ButtonAz from "../../components/ButtonAz";
import MenuC from "../../components/MenuC";
import { useForm} from"react-hook-form";
import { useEffect, useState } from "react";
import Moradorcard from "../Moracard";
function MoradoresR() {
  const [moradores, setMoradores] = useState([]);


 useEffect(() => {
  fetch('http://localhost:3333/morador', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    }
  })
    .then((resp) => resp.json())
    .then((morador) => {
      console.log("Resposta do backend:", morador);
      const lista = Array.isArray(morador.data)
        ? morador.data
        : Array.isArray(morador.message)
          ? morador.message
          : Array.isArray(morador)
            ? morador
            : [];
      setMoradores(lista);
      console.log("Moradores recebidos:", lista);
    })
    .catch((err) => {
      console.log(err)
      setMoradores([]);
    });
}, [])

  return (
    
    <div className="container-principal">
      {/* Container dos botões - Não interfere no alinhamento */}
      <div className="container-botoes">
        <ButtonAz />
      </div>

      {/* Container principal do conteúdo */}
      <div className="continent-4">
        <div className="continente scroll">
       
          {/* Barra de pesquisa */}
          <div className="pesquisa-side">
            <div className="continente-1">
            <div>
      <MenuC /> {/* Aqui o menu aparece na tela */}
    </div>
              <img src={cairesa} alt="Logo" className="img-cadA" />
            </div>
            <div className="procura-2">
              <div className="input-contain">
                <IoIosSearch size={20} color="black" className="input-icon" />
                <input
                  type="text"
                  className="input-fiels"
                  placeholder="procurar"
                />
              </div>
            </div>
          </div>

          {/* Lista de Informações */}
          <div className="label-side">
            <div className="div-label">
              <p>Nome</p>
              <p>Ramal</p>
              <p>Telefone</p>
             </div> 
          {Array.isArray(moradores) && moradores.length > 0 ? (
            moradores.map((morador, idx) => (
              <Moradorcard
                key={morador.id_morador || idx}
                nome={morador.nome}
                ramal={morador.ramal}
                telefone={morador.telefone}
                // Passe outros props se necessário
              />
            ))
          ) : (
            <div style={{ padding: "16px", color: "#888" }}>Nenhum morador encontrado.</div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoradoresR;
