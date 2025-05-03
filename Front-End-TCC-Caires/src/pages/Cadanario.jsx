import "./Cadanario.css";
import Title from "../components/Title";
import SelectComponent from "../components/SelectComponent";
import Button from "../components/Button";
import DropdownWithRadios from "../components/Dropdown";
import PickDate from "../components/PickDate";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";

function Cadanario() {
  const navigate = useNavigate();
  const methods = useForm();

  const [funcionario, setFuncionario] = useState([])

  function handlerChangeFuncionario(event){
    setFuncionario({...funcionario, [event.target.name] : event.target.value});
    console.log(funcionario);
}



   function realizarCadastro(funcionario) {
    fetch('http://127.0.0.1:/funcionario', {
      method:'POST',
      mode:'cors',
      headers:{
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Headers':'*'
      },
      body: JSON.stringify(funcionario)

  }).then((resp)=>
      resp.json()
  ).then((respJSON)=>{
      console.log('RESPOSTA: ' + respJSON);
  }).catch((error)=>{
      console.log('ERRO: ' + error);
  })

}


  const submit = (data) => {
    realizarCadastro(data);
  };

  const handleClick = () => {
    navigate("/Funciocondo");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)} className="container teste">
        <div className="other-side">
          <div className="contente-1">
            <Title>Adicionar um novo Funcionário:</Title>
            <div className="photo-circle"></div>
          </div>
        </div>

        <div className="direita-side">
          <div className="putbu">
            <div className="input-container">
              <Title>Nome:</Title>
              <input
                type="text"
                name="nome"
                onChange={handlerChangeFuncionario}
                className="input-fields"
                placeholder="Digite seu nome"
                {...methods.register("nome", { required: "Nome é obrigatório" })}
              />
              {methods.formState.errors.nome && (
                <p className="error-message">{methods.formState.errors.nome.message}</p>
              )}
            </div>

            <div className="input-container">
              <Title>CPF:</Title>
              <input
                type="text"
                className="input-fields"
                placeholder="Digite seu cpf"
                {...methods.register("cpf", {
                  required: "CPF é obrigatório",
                  minLength: { value: 11, message: "cpf deve ter 11 dígitos" },
                })}
              />
              {methods.formState.errors.cpf && (
                <p className="error-message">{methods.formState.errors.cpf.message}</p>
              )}
            </div>

            <div className="input-container">
              <Title>Data de Nascimento:</Title>
              <PickDate
                {...methods.register("dt_nascimento", { required: "Data de nascimento é obrigatória" })}
              />
              {methods.formState.errors.dt_nascimento && (
                <p className="error-message">{methods.formState.errors.dt_nascimento.message}</p>
              )}
            </div>

            <div className="input-container">
              <Title>Gênero:</Title>
              <DropdownWithRadios {...methods.register("genero", { required: "Gênero é obrigatório" })} />
              {methods.formState.errors.genero && (
                <p className="error-message">{methods.formState.errors.genero.message}</p>
              )}
            </div>

            <div className="input-container">
              <Title>Telefone:</Title>
              <input
                type="text"
                className="input-fields"
                placeholder="Digite seu telefone"
                {...methods.register("telefone", { required: "Telefone é obrigatório" })}
              />
              {methods.formState.errors.telefone && (
                <p className="error-message">{methods.formState.errors.telefone.message}</p>
              )}
            </div>

            <div className="input-container">
              <Title>Senha:</Title>
              <input
                type="password"
                className="input-fields"
                placeholder="Digite sua senha"
                {...methods.register("senha", {
                  required: "Senha é obrigatória",
                  minLength: {
                    value: 8,
                    message: "A senha deve possuir no mínimo 8 caracteres",
                  },
                })}
              />
              {methods.formState.errors.senha && (
                <p className="error-message">{methods.formState.errors.senha.message}</p>
              )}
            </div>

    

            <SelectComponent />

            <div className="contente-3"></div>

            <div className="contente-2">
              <div className="button-div">
                <Button text="VOLTAR" onClick={handleClick} type="button" />
                <Button text="CADASTRAR" type="submit" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default Cadanario;