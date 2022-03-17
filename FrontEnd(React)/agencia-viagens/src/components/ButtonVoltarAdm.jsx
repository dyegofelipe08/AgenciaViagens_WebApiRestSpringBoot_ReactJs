import React from "react";
import { Link } from "react-router-dom";

export default function ButtonVoltarAdm() {

    return (
        <div className="text-center">
            <button className="btn-md btn-success rounded-3 shadowButton "><Link className="nav-link" to='/Adm' ><p className="m-0">Voltar</p></Link></button>
        </div>
    )

}