import Title from "../components/Title";
import Button from "../components/Button";
import DropdownWithRadios from "../components/Dropdown";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import MeuMenu from "../components/MeuMenu";
import { useState } from "react";
import { useForm } from "react-hook-form";

function PrestadoresC({ imageUrl }) {
  const navigate = useNavigate();
  const [genero, setGenero] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const registerData = {
      nome: data.nome,
      cpf: data.cpf,
      uf: data.uf,
      apartamento: data.apartamento,
      bloco: data.bloco,
      data_entrada: null,
      data_saida: null,
      fk_id_prestador_servico: 1
    };

    fetch("http://localhost:3333/controlPS", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
      },
      body: JSON.stringify(registerData)
    })
      .then(async (resp) => {
        if (!resp.ok) {
          const errorText = await resp.text();
          throw new Error(errorText);
        }
        return resp.json();
      })
      .then(() => {
        navigate("/MoradoresR");
      })
      .catch((error) => {
        console.log("ERRO:", error.message);
      });
  };

  const handleClick = () => {
    navigate("/Funciocondo");
  };

  const formatCPF = (value) => {
    let v = value.replace(/\D/g, "");
    if (v.length > 3) v = v.slice(0, 3) + "." + v.slice(3);
    if (v.length > 7) v = v.slice(0, 7) + "." + v.slice(7);
    if (v.length > 11) v = v.slice(0, 11) + "-" + v.slice(11, 13);
    if (v.length > 14) v = v.slice(0, 14);
    return v;
  };

  return (
    <div className="container teste">
      <div className="other-side">
        <div className="contente-1">
          <div>
            <MeuMenu />
          </div>
          <Title>Adicionar um novo Prestador de serviço:</Title>
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
        <form className="putbu" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <Title>Nome:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite o seu nome"
              {...register("nome", { required: true })}
            />
            {errors.nome && <span style={{ color: "red" }}>Campo obrigatório</span>}
          </div>

          <div className="input-container">
            <Title>CPF:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite seu CPF"
              {...register("cpf", { required: true })}
              onChange={(e) => {
                const formatted = formatCPF(e.target.value);
                setValue("cpf", formatted);
              }}
              value={watch("cpf") || ""}
            />
            {errors.cpf && <span style={{ color: "red" }}>Campo obrigatório</span>}
          </div>

          <div className="input-container">
            <Title>Gênero:</Title>
            <DropdownWithRadios value={genero} onChange={setGenero} />
          </div>

          <div className="input-container">
            <Title>UF:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite seu UF"
              {...register("uf", { required: true })}
            />
            {errors.uf && <span style={{ color: "red" }}>Campo obrigatório</span>}
          </div>

          <div className="input-container">
            <Title>Apartamento:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite seu apartamento"
              {...register("apartamento", { required: true })}
            />
            {errors.apartamento && <span style={{ color: "red" }}>Campo obrigatório</span>}
          </div>

          <div className="input-container">
            <Title>Bloco:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite seu bloco"
              {...register("bloco", { required: true })}
            />
            {errors.bloco && <span style={{ color: "red" }}>Campo obrigatório</span>}
          </div>

          <div className="contente-3"></div>
          <div className="contente-2">
            <div className="button-div">
              <Button text="VOLTAR" onClick={() => navigate("/prestadoresR")} />
              <Button text="CADASTRAR" type="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PrestadoresC;
