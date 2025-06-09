import "./MoradoresR.css";
import cairesa from "../../assets/cairesazul.png";
import { IoIosSearch } from "react-icons/io";
import ButtonR from "../../components/ButtonR";
import ButtonAz from "../../components/ButtonAz";
import MeuMenu from "../../components/MeuMenu";
import { IoAddCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EventCard from "../EventCard";

function EventosR() {
  const navigate = useNavigate();
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/eventos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        const lista = Array.isArray(data.message) ? data.message : [];
        setEventos(lista);
      })
      .catch((err) => {
        console.error("Erro ao buscar eventos:", err);
        setEventos([]);
      });
  }, []);

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
                <MeuMenu /> {/* Aqui o menu aparece na tela */}
              </div>
              <img src={cairesa} alt="Logo" className="img-cadA" />
              <div className="icon-contain">
                <IoAddCircleOutline
                  size={50}
                  color="black"
                  className="more-icon"
                  onClick={() => navigate("/eventosc")}
                  style={{ cursor: "pointer" }}
                />
              </div>
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
            <div className="dive-label">
              {Array.isArray(eventos) && eventos.length > 0 ? (
                eventos.map((evento, idx) => (
                  <EventCard
                    key={evento.id_evento || idx}
                    titulo_evento={evento.titulo_evento}
                    CPF={evento.cpf}
                    Data={evento.inicio_evento}
                  />
                  
                ))
              ) : (
                <div style={{ padding: "16px", color: "#888" }}>
                  Nenhum evento encontrado.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventosR;
