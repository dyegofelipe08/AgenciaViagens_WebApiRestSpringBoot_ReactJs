import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonVoltarAdm from "../../components/ButtonVoltarAdm";
import ItensPedidoService from "../../services/ItensPedidoService";

export default function Index() {
  const [itens, setItens] = useState([]);

  const getAllItens = () => {
    ItensPedidoService.getAllItens()
      .then((response) => {
        setItens(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllItens();
  }, []);

  const deleteItem = (itemId) => {
    ItensPedidoService.deleteItem(itemId)
      .then((response) => {
        getAllItens();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <header className="header">
        <h1 className="container">Lista de itens dos pedido</h1>
      </header>
      <div className="container py-3">
        <Link to="/ItensPedido-Create" className="btn btn-primary mb-2">
          Adicionar itens ao pedido
        </Link>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Pedido</th>
                <th>Local</th>
                <th>Local Promocional</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {itens.map((item) => (
                <tr key={item.idItemPedido}>
                  <td>{item.idItemPedido}</td>
                  <td>{item.pedido.cliente.nome}</td>
                  <td>{item.local.descricao}</td>
                  <td>{item.localPromo.descricaoPromo}</td>
                  <td className="d-flex">
                    <Link
                      to={`/ItensPedido-Update/${item.idItemPedido}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteItem(item.idItemPedido)}
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