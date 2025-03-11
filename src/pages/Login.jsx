import './Login.css'
import caires from "../assets/caires.png";
import { IoIosFingerPrint } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';



function Cadastro() {

  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/Telainicial');
  };
  const Cadastre = () => {
    navigate('/Funciocondo');
};

    
return (
    <>
         <div className='box-cad'>
           <div className='rectangle-cad'>
           <div className="rectangle1-cad" />
           <div className="rectangle2-cad" />
           <div className="input-cad">
           <div className="text1-cad">Cadastre sua conta.</div>
           <div className="text2-cad">Bem-vindo ao <br></br>Caires!</div>
           <div className="login-cad">LOGIN</div>
            <img src={caires} alt="Logo" className="img-cad"/>

           <button className='custom-button-cad' onClick={handleClick}>ENTRAR</button>
           <button className='custom-button-cad1' onClick={Cadastre}>CADASTRE-SE</button>

           {/* Campo de Email */}
          <div className="input-cad">
            <input type="text" className="input-field-cad" placeholder="Email:" />
            <MdOutlineMail size={30} color="black" className="icon-email" />
          </div>
           
           {/* Campo de Senha */}
          <div className="input1-cad">
            <input type="password" className="input-field-cad" placeholder="Senha:"  />
            <IoIosFingerPrint size={30} color="black" className="icon-password" />
          </div>
           
             </div>
           </div>
           </div>
       </>
     )
   }

export default Cadastro