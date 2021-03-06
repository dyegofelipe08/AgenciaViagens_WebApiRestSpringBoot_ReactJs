import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ItensPedidoService from "../../services/ItensPedidoService";
import PedidoService from "../../services/PedidoService";
import LocalService from "../../services/LocalService";
import LocalPromoService from "../../services/LocalPromoService";

export default function Create() {
 
  const [pedido, setPedido] = useState({ idPedido: "", cliente: {nome:""}});
  const [local, setLocal] = useState({ idLocal: "", descricao: "" });
  const [localPromo, setLocalPromo] = useState({ idLocalPromo: "", descricaoPromo: "" });

  const [pedidos, setPedidos] = useState([]);
  const [locais, setLocais] = useState([]);
  const [locaisPromo, setLocaisPromo] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

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

  const criarOuEditarItemPromo = (e) => {
    e.preventDefault();

    const item = { pedido, local, localPromo };
    console.log(item)
    if (id) {
      ItensPedidoService.updateItem(id, item).then((response) => {
        navigate("/ItensPedido");
      });
    } else {
        ItensPedidoService.createItem(item).then((response) => {
        navigate("/ItensPedido");
      });
    }
  };

  useEffect(() => {
    function getItemById() {
      if (id) {
        ItensPedidoService.getItemById(id)
          .then((response) => {
            setPedido({
              idPedido: response.data.pedido.idPedido,
              cliente : {
                nome:response.data.pedido.cliente.nome,
              }
            });
            setLocal({
              idLocal: response.data.local.idLocal,
              descricao: response.data.local.descricao,
            });
            setLocalPromo({
                idLocalPromo: response.data.localPromo.idLocalPromo,
                descricaoPromo: response.data.localPromo.descricaoPromo,
              });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getItemById();
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="form-group mb-3">
            <label htmlFor="idPedido" className="form-label">
              Pedido
            </label>
            <select
              id="idPedido"
              name="idPedido"
              className="form-select"
              onChange={(e) =>
                setPedido({ idPedido: Number.parseInt(e.target.value) })
              }
            >
              <option value="DEFAULT" >{id ? pedido.cliente.nome : 'Escolha o nome do cliente'}</option>
              {pedidos.map((pedido) => (
                <option key={pedido.idPedido} value={pedido.idPedido}>
                  {pedido.cliente.nome}  {pedido.cliente.cpf}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="idLocal" className="form-label">
            Local
            </label>
            <select
              id="idLocal"
              name="idLocal"
              className="form-select"
              onChange={(e) =>
                setLocal({ idLocal: Number.parseInt(e.target.value) })
              }
            >
              <option value="DEFAULT" >{id ? local.descricao : 'Escolha um local'}</option>
              {locais.map((local) => (
                <option key={local.idLocal} value={local.idLocal}>
                  {local.descricao}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="idLocalPromo" className="form-label">
            Local Promocional
            </label>
            <select
              id="idLocalPromo"
              name="idLocalPromo"
              className="form-select"
              onChange={(e) =>
                setLocalPromo({ idLocalPromo: Number.parseInt(e.target.value) })
              }
            >
              <option value="DEFAULT" >{id ? localPromo.descricaoPromo : 'Escolha um local promocional'}</option>
              {locaisPromo.map((localPromo) => (
                <option key={localPromo.idLocalPromo} value={localPromo.idLocalPromo}>
                  {localPromo.descricaoPromo}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => criarOuEditarItemPromo(e)}
          >
            Enviar
          </button>
          <Link
            to="/ItensPedido"
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