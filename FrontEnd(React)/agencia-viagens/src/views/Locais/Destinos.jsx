
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LocalService from '../../services/LocalService';

export default function Destinos() {

    const [locais, setLocais] = useState([]);

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

    return (
        <div className='container row w-100'>

            {locais.map((local) => (
                <div className='col-sm-12 col-md-6 col-lg-6 col-xl-4 py-4 my-3 '>
                    <div className="card bg-info shadowCards" style={{ width: '19rem' }}>
                        <img className="card-img-top " src={local.urlImagem} alt={local.descricao} />
                        <div className="card-body">
                            <h2 className="card-title text-center">R$ {local.preco}</h2>
                            <h5 className="card-text text-center">{local.descricao}</h5>
                            <a ><Link className="btn btn-success btn-block" to='/CadastroUsuario'>Selecionar</Link></a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}