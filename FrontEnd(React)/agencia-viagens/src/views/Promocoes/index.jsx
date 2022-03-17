import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonVoltarAdm from "../../components/ButtonVoltarAdm";
import LocalPromoService from "../../services/LocalPromoService";


export default function Index() {
  const [locaisPromo, setLocaisPromo] = useState([]);

  const getAllLocaisPromo = () => {
    LocalPromoService.getAllLocaisPromo()
      .then((response) => {
        setLocaisPromo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllLocaisPromo();
  }, []);

  const deleteLocalPromo = (localPromoId) => {
    LocalPromoService.deleteLocalPromo(localPromoId)
      .then((response) => {
        getAllLocaisPromo();
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
        <h1 className="container text-center pt-4">Lista de locais promocionais</h1>
      </header>
      <div className="container p-5 ">
        <Link to="/Promocoes-Create" className="btn btn-primary mb-4 ">
          Cadastrar Local Promocional
        </Link>
        <div className="table-responsive">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Descrição</th>
                <th>URL Imagem</th>
                <th>Preço cheio</th>
                <th>Taxa de desconto(%)</th>
                <th>Preço com desconto</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {locaisPromo.map((localPromo) => (
                <tr key={localPromo.idLocalPromo}>
                  <td>{localPromo.idLocalPromo}</td>
                  <td>{localPromo.descricaoPromo}</td>
                  <td>{localPromo.urlImagemPromo}</td>
                  <td>{localPromo.preco}</td>
                  <td>{localPromo.taxaDesconto}</td>
                  <td>{localPromo.precoComDesconto}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Promocoes-Update/${localPromo.idLocalPromo}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteLocalPromo(localPromo.idLocalPromo)}
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