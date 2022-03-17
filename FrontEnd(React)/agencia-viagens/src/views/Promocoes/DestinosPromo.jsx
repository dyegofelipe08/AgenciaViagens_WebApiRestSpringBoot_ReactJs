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
        <div className='row p-4 m-4'>

            {locaisPromo.map((localPromo) => (
                <div className='col-sm-4 my-4'>
                    <div className="card bg-info shadowCards" style={{ width: '20rem' }}>
                        <img className="card-img-top " src={localPromo.urlImagemPromo} alt={localPromo.descricaoPromo} />
                        <div className="card-body">
                            <h2 className="card-title text-center">R$ {localPromo.precoComDesconto}</h2>
                            <p className="card-title text-center"><s>R$ {localPromo.preco}</s></p>
                            <p className="card-text text-center">{localPromo.descricaoPromo}</p>
                            <a ><Link className="btn btn-success btn-block" to='/Clientes-Create'>Selecionar</Link></a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}