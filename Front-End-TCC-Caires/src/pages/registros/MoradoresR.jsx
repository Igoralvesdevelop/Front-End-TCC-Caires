import "./MoradoresR.css";
import cairesa from "../../assets//cairesazul.png";
import { IoIosSearch } from "react-icons/io";
import ButtonR from "../../components/ButtonR";

function MoradoresR() {
  return (
    <>
     <div class="continent-4">
        <ButtonR />
    <div className="continente scroll">
      <div className="pesquisa-side">
        <div className="continente-1">
          <img src={cairesa} alt="Logo" className="img-cadA" />
        </div>
        <div className="procura-2">
          <div className="input-contain">
          {/* <IoIosSearch size={30} color="black" className="input-icon" /> */}
            <input
              type="text"
              className="input-fiels"
              placeholder="procurar"
            />
          </div>
        </div>
      </div>

      <div className="label-side">
        <div className="dive-label">
          <div className="div-label">
              <p>Nome:</p>
              {[...Array(8)].map((_, index) => (
                <div key={index} className="text-container">
                  <text className="text-fields"></text>
                </div>
              ))}
            </div>
            <div className="div1-label">
              <p>Ramal:</p>
              {[...Array(8)].map((_, index) => (
                <div key={index} className="text-container">
                  <text className="text-fields"></text>
                </div>
              ))}
            </div>
            <div className="div2-label">
              <p>Telefone:</p>
              {[...Array(8)].map((_, index) => (
                <div key={index} className="text-container">
                  <text className="text-fields"></text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
      </>
  );
}

export default MoradoresR;
