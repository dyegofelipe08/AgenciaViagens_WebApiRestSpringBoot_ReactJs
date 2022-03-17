import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LocalService from "../../services/LocalService";


export default function Create() {
  const [descricao, setDescricao] = useState("");
  const [urlImagem, setUrlImagem] = useState("");
  const [preco, setPreco] = useState(0.0);
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarLocal = (e) => {
    e.preventDefault();

    const local = { descricao, urlImagem, preco};

    if (id) {
       LocalService.updateLocal(id, local)
        .then((response) => {
            navigate("/Locais")
        })

    } else {
        LocalService.createLocal(local)
        .then((response) => {
            navigate("/Locais")
        })
    }
  }

  useEffect(() => {
      function getLocalById() {
        if (id) {
            LocalService.getLocalById(id)
            .then((response) => {
                setDescricao(response.data.descricao);
                setUrlImagem(response.data.urlImagem);
                setPreco(response.data.preco);

            })
            .catch((error) => {
                console.log(error);
            })
        }
      }
      getLocalById()
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="Descricao" className="form-label">
              Descrição
            </label>
            <input
              type="text"
              id="Descricao"
              className="form-control"
              placeholder="Descrição do local"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="UrlImagem" className="form-label">
              URL da Imagem 
            </label>
            <input
              type="text"
              id="UrlImagem"
              className="form-control"
              placeholder="Cole aqui o link da url"
              value={urlImagem}
              onChange={(e) => setUrlImagem(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Preco" className="form-label">
              Preço
            </label>
            <input
              type="text"
              id="Preco"
              className="form-control"
              placeholder="Preço do local a cadastrar"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
            />
          </div>
        
          <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarLocal(e)}>
            Enviar
          </button>
          <Link
            to="/Adm"
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