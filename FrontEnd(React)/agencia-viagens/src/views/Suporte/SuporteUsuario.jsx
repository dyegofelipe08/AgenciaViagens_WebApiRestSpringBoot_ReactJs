import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SuporteService from "../../services/SuporteService";
import ClienteService from "../../services/ClienteService"

export default function SuporteUsuario() {
  const [mensagem, setMensagem] = useState("");
  const [dataEnvio, setDataEnvio] = useState(null);
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

  const criarSuporte = (e) => {
    e.preventDefault();

    const suporte = { mensagem, dataEnvio, cliente};
    console.log(suporte)
    
      SuporteService.createSuporte(suporte).then((response) => {
        navigate("/SuporteOk");
      });
    
  };

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">Fale conosco</h2>
          </legend>
          <div className="form-group mb-3">
            <label htmlFor="Mensagem" className="form-label">
              Mensagem
            </label>
            <textarea value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}  placeholder="Digite sua mensagem..." class="form-control" id="mensagem" rows="3"></textarea>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="Cliente_IdCliente" className="form-label">
              Cliente
            </label>
            <select
              id="Cliente_IdCliente"
              name="Cliente_IdCliente"
              className="form-select"
              onChange={(e) =>
                setCliente({ idCliente: Number.parseInt(e.target.value) })
              }
            >
              <option value="DEFAULT" >Selecione seu nome na lista</option>
              {clientes.map((cliente) => (
                <option key={cliente.idCliente} value={cliente.idCliente}>
                  {cliente.nome}   -  {cliente.cpf}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-success"
            onClick={(e) => criarSuporte(e)}
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