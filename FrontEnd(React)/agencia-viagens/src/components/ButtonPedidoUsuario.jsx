import React from "react";
import { Link } from "react-router-dom";

export default function ButtonPedidoUsuario() {

    return (
        <div className="text-center">
            <button className="btn btn-success rounded-3 shadowButton "><Link className="nav-link" to='/PedidoUsuario' ><p className="lead m-0">Fazer pedido</p></Link></button>
        </div>
    )

}
