import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonVoltarAdm from "../../components/ButtonVoltarAdm";
import SuporteService from "../../services/SuporteService";

export default function Index() {
  const [suportes, setSuportes] = useState([]);

  const getAllSuportes = () => {
    SuporteService.getAllSuportes()
      .then((response) => {
        setSuportes(response.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllSuportes();
  }, []);

  const deleteSuporte = (idSuporte) => {
    SuporteService.deleteSuporte(idSuporte)
      .then((response) => {
        getAllSuportes();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <header className="header">
        <h1 className="container">Lista  de mensagens</h1>
      </header>
      <div className="container py-3">
        <Link to="/Livros-Create" className="btn btn-primary mb-2">
          Criar mensagem de suporte
        </Link>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Mensagem</th>
                <th>Data de envio</th>
                <th>Cliente</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {suportes.map((suporte) => (
                <tr key={suporte.idSuporte}>
                  <td>{suporte.idSuporte}</td>
                  <td>{suporte.mensagem}</td>
                  <td>{suporte.dataEnvio}</td>
                  <td>
                    {suporte.cliente.nome}
                  </td>
                  <td className="d-flex">
                    <Link
                      to={`/Suporte-Update/${suporte.idSuporte}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteSuporte(suporte.idSuporte)}
                      style={{ marginLeft: "10px" }}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ButtonVoltarAdm/>
      </div>
    </>
  );
}