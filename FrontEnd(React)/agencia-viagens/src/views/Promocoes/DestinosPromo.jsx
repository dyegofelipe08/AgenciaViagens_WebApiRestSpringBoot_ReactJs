import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LocalPromoService from '../../services/LocalPromoService';

export default function Destinos() {

    const [locaisPromo, setLocaisPromo] = useState([]);

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

    return (
        <div className='container row w-100'>

            {locaisPromo.map((localPromo) => (
                 <div className='col-sm-12 col-md-6 col-lg-6 col-xl-4 py-4 my-3 '>
                    <div className="card bg-info shadowCards" style={{ width: '19rem' }}>
                        <img className="card-img-top " src={localPromo.urlImagemPromo} alt={localPromo.descricaoPromo} />
                        <div className="card-body">
                            <h2 className="card-title text-center">R$ {localPromo.precoComDesconto}</h2>
                            <p className="card-title text-center"><s>R$ {localPromo.preco}</s></p>
                            <p className="card-text text-center text-warning lead">{(localPromo.taxaDesconto)*100} % OFF</p>
                            <h5 className="card-text text-center">{localPromo.descricaoPromo}</h5>

                            <a ><Link className="btn btn-success btn-block" to='/CadastroUsuario'>Selecionar</Link></a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}