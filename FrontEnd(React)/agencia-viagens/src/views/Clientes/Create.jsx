import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClienteService from "../../services/ClienteService";


export default function Create() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarCliente = (e) => {
    e.preventDefault();

    const cliente = { nome, cpf, telefone, email};

    if (id) {
        ClienteService.updateCliente(id, cliente)
        .then((response) => {
            navigate("/Clientes")
        })

    } else {
        ClienteService.createCliente(cliente)
        .then((response) => {
            navigate("/Clientes")
        })
    }
  }

  useEffect(() => {
      function getClienteById() {
        if (id) {
            ClienteService.getClienteById(id)
            .then((response) => {
                setNome(response.data.nome);
                setCpf(response.data.cpf);
                setTelefone(response.data.telefone);
                setEmail(response.data.email);

            })
            .catch((error) => {
                console.log(error);
            })
        }
      }
      getClienteById()
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="Nome" className="form-label">
              Nome completo
            </label>
            <input
              type="text"
              id="Nome"
              className="form-control"
              placeholder="Digite aqui seu nome completo..."
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Cfp" className="form-label">
              CPF
            </label>
            <input
              type="text"
              id="Cpf"
              className="form-control"
              placeholder="Somente números..."
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Telefone" className="form-label">
              Telefone
            </label>
            <input
              type="text"
              id="Telefone"
              className="form-control"
              placeholder="(xx) xxxxx-xxxx"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              E-mail
            </label>
            <input
              type="text"
              id="Telefone"
              className="form-control"
              placeholder="seuemail@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarCliente(e)}>
            Enviar
          </button>
          <Link
            to="/Clientes"
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