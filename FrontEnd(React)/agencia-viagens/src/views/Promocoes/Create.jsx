import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LocalPromoService from "../../services/LocalPromoService";


export default function Create() {
  const [descricaoPromo, setDescricaoPromo] = useState("");
  const [urlImagemPromo, setUrlImagemPromo] = useState("");
  const [preco, setPreco] = useState(0.00);
  const [taxaDesconto, setTaxaDesconto] = useState(0.00);

  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarLocalPromo = (e) => {
    e.preventDefault();

    const localPromo = { descricaoPromo, urlImagemPromo, preco, taxaDesconto};

    if (id) {
        LocalPromoService.updateLocalPromo(id, localPromo)
        .then((response) => {
            navigate("/Promocoes")
        })

    } else {
        LocalPromoService.createLocalPromo(localPromo)
        .then((response) => {
            navigate("/Promocoes")
        })
    }
  }

  useEffect(() => {
      function getLocalPromoById() {
        if (id) {
            LocalPromoService.getLocalPromoById(id)
            .then((response) => {
                setDescricaoPromo(response.data.descricaoPromo);
                setUrlImagemPromo(response.data.urlImagemPromo);
                setPreco(response.data.preco);
                setTaxaDesconto(response.data.taxaDesconto);
                
            })
            .catch((error) => {
                console.log(error);
            })
        }
      }
      getLocalPromoById()
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="DescricaoPromo" className="form-label">
              Descrição
            </label>
            <input
              type="text"
              id="DescricaoPromo"
              className="form-control"
              placeholder="Digite a descrição do local..."
              value={descricaoPromo}
              onChange={(e) => setDescricaoPromo(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="UrlImagemPromo" className="form-label">
              URL da Imagem
            </label>
            <input
              type="text"
              id="UrlImagemPromo"
              className="form-control"
              placeholder="Cole aqui a url da imagem a cadastrar"
              value={urlImagemPromo}
              onChange={(e) => setUrlImagemPromo(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="preco" className="form-label">
              Preço cheio (R$)
            </label>
            <input
              type="text"
              id="preco"
              className="form-control"
              placeholder="0.00"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="TaxaDesconto" className="form-label">
             Taxa de desconto (%)
            </label>
            <input
              type="text"
              id="TaxaDesconto"
              className="form-control"
              placeholder="0.00"
              value={taxaDesconto}
              onChange={(e) => setTaxaDesconto(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarLocalPromo(e)}>
            Enviar
          </button>
          <Link
            to="/Promocoes"
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