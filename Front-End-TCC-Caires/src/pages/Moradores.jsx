import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import "../styles/moradores.css";

function Moradores() {
  const [moradores, setMoradores] = useState([]);
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    genero: "",
    dt_nascimento: "",
    apartamento: "",
    bloco: "",
    email: "",
    ramal: "",
  });
  const [senhaGerada, setSenhaGerada] = useState("");

  useEffect(() => {
    fetch("http://localhost:3333/morador", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setMoradores(data.message || []);
      })
      .catch((error) => console.error("Erro ao buscar moradores:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3333/morador", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setSenhaGerada(data.senha); // Exibe a senha gerada
        alert("Morador cadastrado com sucesso!");
        setMoradores([...moradores, formData]);
        setFormData({
          nome: "",
          cpf: "",
          telefone: "",
          genero: "",
          dt_nascimento: "",
          apartamento: "",
          bloco: "",
          email: "",
          ramal: "",
        });
      })
      .catch((error) => console.error("Erro ao cadastrar morador:", error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3333/morador/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        alert("Morador excluído com sucesso!");
        setMoradores(moradores.filter((morador) => morador.id !== id));
      })
      .catch((error) => console.error("Erro ao excluir morador:", error));
  };

  return (
    <div className="container">
      <Title>Gerenciar Moradores</Title>
      <div className="moradores-list">
        <h2>Lista de Moradores</h2>
        {moradores.length > 0 ? (
          <ul>
            {moradores.map((morador) => (
              <li key={morador.id}>
                <span>{morador.nome}</span>
                <Button text="Excluir" onClick={() => handleDelete(morador.id)} />
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum morador encontrado.</p>
        )}
      </div>

      <div className="moradores-form">
        <h2>Cadastrar Morador</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            value={formData.cpf}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="telefone"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="genero"
            placeholder="Gênero"
            value={formData.genero}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="dt_nascimento"
            placeholder="Data de Nascimento (DD/MM/AAAA)"
            value={formData.dt_nascimento}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="apartamento"
            placeholder="Apartamento"
            value={formData.apartamento}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="bloco"
            placeholder="Bloco"
            value={formData.bloco}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="ramal"
            placeholder="Ramal"
            value={formData.ramal}
            onChange={handleInputChange}
          />
          <Button text="Cadastrar" type="submit" />
        </form>
        {senhaGerada && <p>Senha gerada para o primeiro acesso: {senhaGerada}</p>}
      </div>
    </div>
  );
}

export default Moradores;
