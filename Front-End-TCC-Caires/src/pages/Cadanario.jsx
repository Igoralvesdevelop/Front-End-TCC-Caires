import "./Cadanario.css";
import Title from "../components/Title";
import SelectComponent from "../components/SelectComponent";
import Button from "../components/Button";
import DropdownWithRadios from "../components/Dropdown";
import PickDate from "../components/PickDate";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";

function Cadanario() {
  const navigate = useNavigate();
  const methods = useForm();

  async function realizarCadastro(data) {
    try {
      const response = await fetch("http://localhost:3333/funcionario", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const respJSON = await response.json();
      if (response.status === 201) {
        navigate("/Telainicial");
      } else {
        alert(respJSON.message || "Erro ao cadastrar funcionário.");
      }
    } catch (error) {
      alert("Erro ao conectar com o servidor.");
    }
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

            <div className="input-container">
              <Title>CNPJ do Condomínio:</Title>
              <input
                type="text"
                className="input-fields"
                placeholder="Digite o cnpj"
                {...methods.register("cnpj", { required: "cnpj é obrigatório" })}
              />
              {methods.formState.errors.cnpj && (
                <p className="error-message">{methods.formState.errors.cnpj.message}</p>
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
