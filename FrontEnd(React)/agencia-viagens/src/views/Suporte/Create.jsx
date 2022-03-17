import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SuporteService from "../../services/SuporteService";
import ClienteService from "../../services/ClienteService"

export default function Create() {
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

  const criarOuEditarSuporte = (e) => {
    e.preventDefault();

    const suporte = { mensagem, dataEnvio, cliente};
    console.log(suporte)
    if (id) {
      SuporteService.updateSuporte(id, suporte).then((response) => {
        navigate("/Suporte");
      });
    } else {
      SuporteService.createSuporte(suporte).then((response) => {
        navigate("/Suporte");
      });
    }
  };

  useEffect(() => {
    function getSuporteById() {
      if (id) {
        SuporteService.getSuporteById(id)
          .then((response) => {
            setMensagem(response.data.mensagem);
            setDataEnvio(response.data.dataEnvio);
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

    getSuporteById();
  }, [id]);


  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="form-group mb-3">
            <label htmlFor="Mensagem" className="form-label">
              Mensagem
            </label>
            <input
              type="text"
              id="Mensagem"
              className="form-control"
              placeholder="Digite sua mensagem..."
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />
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
              <option value="DEFAULT" >{id ? cliente.nome : 'Escolha um cliente'}</option>
              {clientes.map((cliente) => (
                <option key={cliente.idCliente} value={cliente.idCliente}>
                  {cliente.nome}   -  {cliente.cpf}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => criarOuEditarSuporte(e)}
          >
            Enviar
          </button>
          <Link
            to="/Suporte"
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