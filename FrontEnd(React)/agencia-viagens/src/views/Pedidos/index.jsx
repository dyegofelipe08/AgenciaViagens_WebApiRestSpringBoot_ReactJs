import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PedidoService from "../../services/PedidoService";

export default function Index() {
  const [pedidos, setPedidos] = useState([]);

  const getAllPedidos = () => {
    PedidoService.getAllPedidos()
      .then((response) => {
        setPedidos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllPedidos();
  }, []);

  const deletePedido = (idPedido) => {
    PedidoService.deletePedido(idPedido)
      .then((response) => {
        getAllPedidos();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <header className="header">
        <h1 className="container">Lista de pedidos</h1>
      </header>
      <div className="container py-3">
        <Link to="/Pedidos-Create" className="btn btn-primary mb-2">
          Criar Pedido
        </Link>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Data Pedido</th>
                <th>Total do pedido</th>
                <th>Cliente</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map((pedido) => (
                <tr key={pedido.idPedido}>
                  <td>{pedido.idPedido}</td>
                  <td>{pedido.totalPedido}</td>
                  <td>{pedido.dataPedido}</td>
                  <td>{pedido.cliente.nome}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Pedidos-Update/${pedido.idPedido}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deletePedido(pedido.idPedido)}
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
      </div>
    </>
  );
}