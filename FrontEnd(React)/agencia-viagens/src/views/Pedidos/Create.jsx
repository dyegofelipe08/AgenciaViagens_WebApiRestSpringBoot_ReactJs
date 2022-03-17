import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PedidoService from "../../services/PedidoService";
import ClienteService from "../../services/ClienteService";

export default function Create() {
  const [dataPedido, setDataPedido] = useState(null)
  const [cliente, setCliente] = useState({ idCliente: "", nome: ""});
  const [clientes, setClientes] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

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

  const criarOuEditarPedido = (e) => {
    e.preventDefault();

    const pedido = { dataPedido, cliente };
    console.log(pedido)
    if (id) {
      PedidoService.updatePedido(id, pedido).then((response) => {
        navigate("/Pedidos");
      });
    } else {
      PedidoService.createPedido(pedido).then((response) => {
        navigate("/Pedidos");
      });
    }
  };

  useEffect(() => {
    function getPedidoById() {
      if (id) {
        PedidoService.getPedidoById(id)
          .then((response) => {
            setDataPedido(response.data.dataPedido);
            setCliente({
              idCliente: response.data.cliente.idCliente,
              nome: response.data.cliente.nome,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getPedidoById();
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="form-group mb-3">
            <label htmlFor="ClienteId_Cliente" className="form-label">
              Cliente
            </label>
            <select
              id="ClienteId_Cliente"
              name="ClienteId_Cliente"
              className="form-select"
              onChange={(e) =>
                setCliente({ idCliente: Number.parseInt(e.target.value) })
              }
            >
              <option value="DEFAULT" >{id ? cliente.nome : 'Selecione seu nome'}</option>
              {clientes.map((cliente) => (
                <option key={cliente.idCliente} value={cliente.idCliente}>
                  {cliente.nome} {cliente.cpf}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => criarOuEditarPedido(e)}
          >
            Enviar
          </button>
          <Link
            to="/Pedidos"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}