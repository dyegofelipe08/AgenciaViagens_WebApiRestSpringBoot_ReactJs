
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
        <div className='row p-4 m-4'>

            {locais.map((local) => (
                <div className='col-sm-4 my-4'>
                    <div className="card bg-info shadowCards" style={{ width: '20rem' }}>
                        <img className="card-img-top " src={local.urlImagem} alt={local.descricao} />
                        <div className="card-body">
                            <h2 className="card-title text-center">R$ {local.preco}</h2>
                            <p className="card-text text-center">{local.descricao}</p>
                            <a ><Link className="btn btn-success btn-block" to='/CadastroUsuario'>Selecionar</Link></a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}