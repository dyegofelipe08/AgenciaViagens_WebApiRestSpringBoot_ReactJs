import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ItensPedidoService from "../../services/ItensPedidoService";
import PedidoService from "../../services/PedidoService";
import LocalService from "../../services/LocalService";
import LocalPromoService from "../../services/LocalPromoService";

export default function ItensUsuario() {
 
  const [pedido, setPedido] = useState({ idPedido: "", cliente: ""});
  const [local, setLocal] = useState({ idLocal: "", descricao: "" });
  const [localPromo, setLocalPromo] = useState({ idLocalPromo: "", descricao: "" });

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

  const criarItemUsuario = (e) => {
    e.preventDefault();

    const item = { pedido, local, localPromo };
    console.log(item)
    
        ItensPedidoService.createItem(item).then((response) => {
        navigate("/PedidoOk");
      });
  
  };

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">Adicionar Locais ao pedido</h2>
          </legend>
          <div className="form-group mb-3">
            <label htmlFor="AutorId_autor" className="form-label">
              Pedido
            </label>
            <select
              id="PedidoId_Pedido"
              name="PedidoId_Pedido"
              className="form-select"
              onChange={(e) =>
                setPedido({ idPedido: Number.parseInt(e.target.value) })
              }
            >
              <option value="DEFAULT" >Escolha o nome do cliente</option>
              {pedidos.map((pedido) => (
                <option key={pedido.idPedido} value={pedido.idPedido}>
                  {pedido.cliente.nome}  {pedido.cliente.cpf}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="Local" className="form-label">
            Local
            </label>
            <select
              id="Local"
              name="Local"
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
            <label htmlFor="LocalPromo" className="form-label">
            Local Promocional
            </label>
            <select
              id="LocalPromo"
              name="LocalPromo"
              className="form-select"
              onChange={(e) =>
                setLocalPromo({ idLocalPromo: Number.parseInt(e.target.value) })
              }
            >
              <option value="DEFAULT" >{id ? localPromo.descricao : 'Escolha um local promocional'}</option>
              {locaisPromo.map((localPromo) => (
                <option key={localPromo.idLocalPromo} value={localPromo.idLocalPromo}>
                  {localPromo.descricaoPromo}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-success"
            onClick={(e) => criarItemUsuario(e)}
          >
            Enviar
          </button>
          <Link
            to="/PedidoUsuario"
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