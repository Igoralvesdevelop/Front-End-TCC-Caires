import Title from "../components/Title";
import SelectComponent from "../components/SelectComponent";
import Button from "../components/Button";
import DropdownWithRadios from "../components/Dropdown";
import { IoPersonCircleOutline } from "react-icons/io5";
import MeuMenu from "../components/MeuMenu";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import "../styles/error.css";

function MoradoresC() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const [mensagemSucesso, setMensagemSucesso] = useState("");

  const formatDate = (value) => {
    let v = value.replace(/\D/g, "");
    if (v.length > 2) v = v.slice(0, 2) + "/" + v.slice(2);
    if (v.length > 5) v = v.slice(0, 5) + "/" + v.slice(5, 9);
    if (v.length > 10) v = v.slice(0, 10);
    return v;
  };

  const formatCPF = (value) => {
    let v = value.replace(/\D/g, "");
    if (v.length > 3) v = v.slice(0, 3) + "." + v.slice(3);
    if (v.length > 7) v = v.slice(0, 7) + "." + v.slice(7);
    if (v.length > 11) v = v.slice(0, 11) + "-" + v.slice(11, 13);
    if (v.length > 14) v = v.slice(0, 14);
    return v;
  };

  const onSubmit = (data) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      alert("Email inválido. Por favor, insira um email válido.");
      return;
    }
    insertMorador(data);
  };

  function insertMorador(register) {
    fetch("http://localhost:3333/morador", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      body: JSON.stringify(register),
    })
      .then(async (resp) => {
        if (!resp.ok) {
          const errorText = await resp.text();
          console.error("ERRO:", errorText);
          throw new Error(errorText);
        }
        return resp.json();
      })
      .then((respJSON) => {
        console.log("RESPOSTA:", respJSON);
        setMensagemSucesso(`Morador cadastrado com sucesso! Senha: ${respJSON.senha}`);
        setTimeout(() => setMensagemSucesso(""), 5000); // Remove a mensagem após 5 segundos
      })
      .catch((error) => {
        console.log("ERRO:", error.message);
      });
  }

  return (
    <div className="container teste">
      <div className="other-side">
        <div className="contente-1">
          <div>
            <MeuMenu />
          </div>
          <Title>Adicionar um novo Morador:</Title>
          <div className="photo-circle">
            <IoPersonCircleOutline size={550} color="#555" />
          </div>
        </div>
      </div>

      <div className="direita-side">
        <div className="tamanho"></div>
        <div className="putbu">
          {mensagemSucesso && <p className="success-message">{mensagemSucesso}</p>}
          <div className="input-container">
            <Title>Nome:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite seu nome"
              {...register("nome", { required: true })}
            />
            {errors?.nome?.type === "required" && (
              <p className="error-menssage">Nome é Obrigatório</p>
            )}
          </div>

          <div className="input-container">
            <Title>CPF:</Title>
            <Controller
              name="cpf"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="text"
                  className="input-fields"
                  placeholder="Digite seu CPF"
                  {...field}
                  onChange={(e) => {
                    const formatted = formatCPF(e.target.value);
                    field.onChange(formatted);
                  }}
                />
              )}
            />
          </div>
          <div className="input-container">
            <Title>Data de Nascimento:</Title>
            <Controller
              name="dt_nascimento"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="text"
                  className="input-fields"
                  placeholder="Digite a data de nascimento (DD/MM/AAAA)"
                  {...field}
                  onChange={(e) => {
                    const formatted = formatDate(e.target.value);
                    field.onChange(formatted);
                  }}
                />
              )}
            />
          </div>

          <div className="input-container">
            <Title>Gênero:</Title>
            <Controller
              name="genero"
              control={control}
              defaultValue=""
              render={({ field }) => <DropdownWithRadios {...field} />}
            />
          </div>
          <div className="input-container">
            <Title>Telefone:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite seu telefone"
              {...register("telefone")}
            />
          </div>
          <div className="input-container">
            <Title>Email:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite seu email"
              {...register("email")}
            />
          </div>
          <div className="input-container">
            <Title>Apartamento:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite seu apartamento"
              {...register("apartamento")}
            />
          </div>
          <div className="input-container">
            <Title>Bloco:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite seu bloco"
              {...register("bloco")}
            />
          </div>
          <div className="input-container">
            <Title>Ramal:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite seu ramal"
              {...register("ramal")}
            />
          </div>

          <div>
            <div className="contente-3"></div>
            <div className="contente-2">
              <div className="button-div">
                <Button text="VOLTAR" />
                <Button
                  text="CADASTRAR"
                  onClick={() => {
                    handleSubmit(onSubmit)();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoradoresC;
