import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonVoltarAdm from "../../components/ButtonVoltarAdm";
import ClienteService from "../../services/ClienteService";


export default function Index() {
  const [clientes, setClientes] = useState([]);

  const getAllClientes = () => {
    ClienteService.getAllClientes()
      .then((response) => {
        setClientes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllClientes();
  }, []);

  const deleteCliente = (clienteId) => {
    ClienteService.deleteCliente(clienteId)
      .then((response) => {
        getAllClientes();
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
        <h1 className="container text-center pt-4">Lista de clientes</h1>
      </header>
      <div className="container p-5 ">
        <Link to="/Clientes-Create" className="btn btn-primary mb-4 ">
          Cadastrar cliente
        </Link>
        <div className="table-responsive">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome completo</th>
                <th>CPF</th>
                <th>Telefone</th>
                <th>E-mail</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.idCliente}>
                  <td>{cliente.idCliente}</td>
                  <td>{cliente.nome}</td>
                  <td>{cliente.cpf}</td>
                  <td>{cliente.telefone}</td>
                  <td>{cliente.email}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Clientes-Update/${cliente.idCliente}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteCliente(cliente.idCliente)}
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