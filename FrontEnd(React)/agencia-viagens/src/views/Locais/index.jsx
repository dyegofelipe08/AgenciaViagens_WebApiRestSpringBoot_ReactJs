import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonVoltarAdm from "../../components/ButtonVoltarAdm";
import LocalService from "../../services/LocalService";


export default function Index() {
  const [locais, setLocais] = useState([]);

  const getAllLocais = () => {
    LocalService.getAllLocais()
      .then((response) => {
        setLocais(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllLocais();
  }, []);

  const deleteLocal = (localId) => {
    LocalService.deleteLocal(localId)
      .then((response) => {
        getAllLocais();
      })
      .catch((error) => {
        console.log(error);
        const { data } = error.response;
        if (data.status === 500) {
          alert("Erro na API");
        }
      });
  };

  return (
    <>
      <header className="header">
        <h1 className="container text-center pt-4">Lista de Destinos</h1>
      </header>
      <div className="container p-5 ">
        <Link to="/Locais-Create" className="btn btn-primary mb-4 ">
          Cadastrar Local
        </Link>
        <div className="table-responsive">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Descrição</th>
                <th>URl Imagem</th>
                <th>Preço</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {locais.map((local) => (
                <tr key={local.idLocal}>
                  <td>{local.idLocal}</td>
                  <td>{local.descricao}</td>
                  <td>{local.urlImagem}</td>
                  <td>{local.preco}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Locais-Update/${local.idLocal}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteLocal(local.idLocal)}
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