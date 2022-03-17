import React from "react";
import { Link } from "react-router-dom";

export default function ButtonAcessarListas(props) {

    return (
        <div className="text-center">
            <button className="btn-md btn-success rounded-3 shadowButton "><Link className="nav-link" to={props.link} ><p className="m-0">Clique aqui</p></Link></button>
        </div>
    )

}