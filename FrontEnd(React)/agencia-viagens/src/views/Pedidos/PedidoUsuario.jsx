import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PedidoService from "../../services/PedidoService";
import ClienteService from "../../services/ClienteService";

export default function PedidoUsuario() {
    const [dataPedido, setDataPedido] = useState(null)
    const [cliente, setCliente] = useState({ idCliente: "", nome: "", cpf:""});
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

    const criarPedido = (e) => {
        e.preventDefault();

        const pedido = { dataPedido, cliente };
        console.log(pedido)
        
            PedidoService.createPedido(pedido).then((response) => {
                navigate("/ItensUsuario");
            })
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
                            cpf: response.data.cliente.cpf,
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
                        <h2 className="text-center">Criar Pedido</h2>
                    </legend>
                    <div className="form-group mb-3">
                        <label htmlFor="idCliente" className="form-label">
                            <h4>Estamos quse finalizando. Selecione seu CPF para proesguir com o pedido...</h4>
                        </label>
                        <select
                            id="idCliente"
                            name="idCliente"
                            className="form-select"
                            onChange={(e) =>
                                setCliente({ idCliente: Number.parseInt(e.target.value) })
                            }
                        >
                            <option value="DEFAULT" >Selecione seu CPF</option>
                            {clientes.map((cliente) => (
                                <option key={cliente.idCliente} value={cliente.idCliente}>
                                    {cliente.cpf}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-success"
                        onClick={(e) => criarPedido(e)}
                    >
                        Enviar
                    </button>
                    <Link
                        to="/"
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