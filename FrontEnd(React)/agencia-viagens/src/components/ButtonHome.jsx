import React from "react";
import { Link } from "react-router-dom";

export default function ButtonHome() {

    return (
        <div className="text-center">
            <button className="btn-md btn-success rounded-3 shadowButton "><Link className="nav-link" to='/' ><p className="m-0">Home</p></Link></button>
        </div>
    )

}