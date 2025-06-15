import Title from "../components/Title";
import Button from '../components/Button'
import PickDate from "../components/PickDate";
import MeuMenu from "../components/MeuMenu";
import { useState } from "react";


function PedidosC () {
  const [empresa, setEmpresa] = useState("");
  const [idMorador, setIdMorador] = useState("");
  const [status, setStatus] = useState("");
  const [imagem, setImagem] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImagem(e.target.files[0]);
    }
  };

  const handleCadastrar = async (e) => {
    e.preventDefault();
    if (!empresa || !idMorador || !status) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }
    const formData = new FormData();
    formData.append('empresa', empresa);
    formData.append('fk_id_morador', idMorador);
    formData.append('status_entrega', status);
    if (imagem) formData.append('imagem', imagem);
    try {
      const response = await fetch('http://localhost:3333/encomendas', {
        method: 'POST',
        body: formData
      });
      if (!response.ok) {
        const errorText = await response.text();
        alert('Erro ao cadastrar encomenda: ' + errorText);
        return;
      }
      alert('Encomenda cadastrada com sucesso!');
      setEmpresa("");
      setIdMorador("");
      setStatus("");
      setImagem(null);
    } catch (err) {
      alert('Erro de conexão com o servidor.');
    }
  };

  return (
    <form className="container" onSubmit={handleCadastrar} encType="multipart/form-data">
      <div className="othe-side">
        <div className="conten-1">
          <div>
            <MeuMenu />
          </div>
          <Title>Adicionar uma nova encomenda:</Title>
        </div>
      </div>
      <div className="direit-side">
        <div className="tamanho"></div>
        <div className="putb">
          <div className="input-container">
            <Title>Empresa:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite a empresa"
              value={empresa}
              onChange={e => setEmpresa(e.target.value)}
              name="empresa"
              required
            />
          </div>
          <div className="input-container">
            <Title>Id_morador:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite o Id do morador"
              value={idMorador}
              onChange={e => setIdMorador(e.target.value)}
              name="fk_id_morador"
              required
            />
          </div>
          <div className="input-container">
            <Title>Status da Entrega:</Title>
            <input
              type="text"
              className="input-fields"
              placeholder="Digite o status. ex:Pendente,Processando"
              value={status}
              onChange={e => setStatus(e.target.value)}
              name="status_entrega"
              required
            />
          </div>
          <div className="input-container">
            <Title>Imagem da Encomenda:</Title>
            <input
              type="file"
              accept="image/*"
              className="input-fields"
              onChange={handleImageChange}
              name="imagem"
            />
          </div>
          <div className="contente-3"></div>
          <div className="contente-2">
            <div className="button-div">
              <Button
                text="VOLTAR"
                onClick={navigate("/PedidosR")}
              />
              <Button
                text="CADASTRAR"
                type="submit"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default PedidosC;