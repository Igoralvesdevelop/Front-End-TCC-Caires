import Title from "../components/Title";
import SelectV from "../components/SelectV";
import Button from "../components/Button";
import DropdownWithRadios from "../components/Dropdown";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Controller, useForm } from "react-hook-form";
import MeuMenu from "../components/MeuMenu";
import { useNavigate } from "react-router-dom";

function VisitantesC({ imageUrl }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm();

  const onSubmi = async (data) => {
    console.log(data);
    try {
      const response = await fetch("http://localhost:3333/visitantes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar visitante");
      }

      await response.json();
      alert("Visitante cadastrado com sucesso!");
      navigate("/Funciocondo");
    } catch (error) {
      alert("Falha no cadastro: " + error.message);
    }
  };

  return (
    <div className="container teste">
      <div className="other-side">
        <div className="contente-1">
          <MeuMenu />
          <Title>Adicionar um novo Visitante:</Title>
          <div className="photo-circle">
            {imageUrl ? (
              <img src={imageUrl} alt="User" />
            ) : (
              <IoPersonCircleOutline size={550} color="#555" />
            )}
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
              {...register("nome", {
                required: "O nome é obrigatório",
                minLength: {
                  value: 3,
                  message: "O nome deve ter no mínimo 3 caracteres"
                }
              })}
            />
            {errors.nome && <p className="error">{errors.nome.message}</p>}
          </div>

          <div className="input-container">
            <Title>CPF:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite seu CPF"
              {...register("cpf", {
                required: "O CPF é obrigatório",
                pattern: {
                  value: /^\d{11}$/,
                  message: "CPF deve conter exatamente 11 números"
                }
              })}
            />
            {errors.cpf && <p className="error">{errors.cpf.message}</p>}
          </div>

          <div className="input-container">
            <Title>Telefone:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite seu telefone"
              {...register("telefone", {
                required: "O telefone é obrigatório",
                pattern: {
                  value: /^\d{10,11}$/,
                  message: "Telefone deve ter 10 ou 11 dígitos"
                }
              })}
            />
            {errors.telefone && <p className="error">{errors.telefone.message}</p>}
          </div>

          <div className="input-container">
            <Title>Gênero:</Title>
            <Controller
              name="genero"
              control={control}
              defaultValue=""
              rules={{ required: "Selecione um gênero" }}
              render={({ field }) => <DropdownWithRadios {...field} />}
            />
            {errors.genero && <p className="error">{errors.genero.message}</p>}
          </div>

          <div className="input-container">
            <Title>RG:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite seu RG"
              {...register("rg", {
                required: "O RG é obrigatório",
                pattern: {
                  value: /^\d{5,12}$/,
                  message: "RG deve ter entre 5 e 12 dígitos"
                }
              })}
            />
            {errors.rg && <p className="error">{errors.rg.message}</p>}
          </div>

          <div>
            <SelectV />
          </div>

          <div className="contente-2">
            <div className="button-div">
              <Button text="VOLTAR" onClick={() => navigate("/visitantesR")} />
              <Button text="CADASTRAR" onClick={handleSubmit(onSubmi)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitantesC;
